import React, { Component, Fragment } from 'react';
import { func, number, objectOf, shape } from 'prop-types';

import { Query } from '@magento/venia-drivers';
import LoadingIndicator from '../LoadingIndicator';
import Branch from './categoryBranch';
import Leaf from './categoryLeaf';
import CategoryTree from './categoryTree';
import defaultClasses from './categoryTree.css';
import navigationMenu from '../../queries/getNavigationMenu.graphql';

const loadingIndicator = <LoadingIndicator>{`Fetching...`}</LoadingIndicator>;

class Tree extends Component {
    static propTypes = {
  
        nodes: objectOf(
            shape({
                id: number.isRequired,
                position: number.isRequired
            })
        ),
        onNavigate: func,
        rootNodeId: number.isRequired,
        updateRootNodeId: func.isRequired,
        currentId: number.isRequired
    };

    get leaves() {
        const {
            onNavigate,
            rootNodeId,
            updateRootNodeId,
            currentId
        } = this.props;
        return rootNodeId ? (
            <Query query={navigationMenu} variables={{ id: rootNodeId }}>
                {({ loading, error, data }) => {
                    // console.log(data, 'data')
                    if (error) return <div>Data Fetch Error</div>;
                    // if (loading) return loadingIndicator;
                    if (loading) return '';


                    const branches = [];
                   
                    const children = data.category.children.sort((a, b) => {
                        if (a.position > b.position) return 1;
                        else if (a.position == b.position && a.id > b.id)
                            return 1;
                        else return -1;
                    });

                    const leaves = children.map(node => {
                        // allow leaf node to render if value is 1 or undefined (field not in Magento 2.3.0 schema)
                        if (node.include_in_menu === 0) {
                            return null;
                        }
                        const { children_count } = node;
                        const isLeaf = children_count == 0;
                        const elementProps = {
                            nodeId: node.id,
                            name: node.name,
                            urlPath: node.url_path,
                            path: node.path,
                            level: node.level
                        };



                        if (!isLeaf) {
                            branches.push(
                                <CategoryTree
                                    key={node.id}
                                    rootNodeId={node.id}
                                    updateRootNodeId={updateRootNodeId}
                                    onNavigate={onNavigate}
                                    currentId={currentId}
                                />
                            );
                        }
      
                        const element = isLeaf ? (
                            <Leaf {...elementProps} onNavigate={onNavigate} />
                        ) : (
                            <Branch
                                {...elementProps}
                                onDive={updateRootNodeId}
                                branches={branches}
                            />
                        );

                        return <li key={node.id}>{element}</li>;
                    });

                    return (
                        <Fragment>
                              {leaves}
                        </Fragment>
                    );
                }}
            </Query>
        ) : null;
    }

    render() {
        const { leaves } = this;
        return (
            <div className={defaultClasses.root}>
                <ul className={defaultClasses.tree}>{leaves} </ul>
            </div>
        );
    }
}

export default Tree;
