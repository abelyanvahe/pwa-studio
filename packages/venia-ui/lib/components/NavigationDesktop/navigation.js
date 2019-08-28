import React, { PureComponent } from 'react';
import { func, shape, string } from 'prop-types';
import CategoryTree from './categoryTree';
import defaultClasses from './navigation.css';

class Navigation extends PureComponent {
    // static propTypes = {
    //     getAllCategories: func.isRequired,
    // };

    // static getDerivedStateFromProps(props, state) {
    //     if (!state.rootNodeId && props.rootCategoryId) {
    //         return {
    //             ...state,
    //             rootNodeId: props.rootCategoryId
    //         };
    //     }

    //     return state;
    // }
    // componentDidMount() {
    //     this.props.getAllCategories();
    // }

    // state = {
    //     rootNodeId: null,
    //     currentPath: null
    // };

    // get categoryTree() {
    //     const { props, setCurrentPath, state } = this;
    //     const { rootNodeId } = state;
    //     const { closeDrawer } = props;

    //     return rootNodeId ? (
    //         <CategoryTree
    //             rootNodeId={props.rootCategoryId}
    //             currentId={rootNodeId}
    //             updateRootNodeId={setCurrentPath}
    //             onNavigate={closeDrawer}
    //         />
    //     ) : null;
    // }


    // setCurrentPath = currentPath => {
    //     const path = currentPath.split('/').reverse();
    //     const rootNodeId = parseInt(path[0]);

    //     this.setState(() => ({
    //         rootNodeId: rootNodeId,
    //         currentPath: path
    //     }));
    // };
    // setRootNodeIdToParent = () => {
    //     const path = this.state.currentPath;
    //     const parentId =
    //         path.length > 1 ? parseInt(path[1]) : this.props.rootCategoryId;
    //     path.shift();

    //     this.setState(() => ({
    //         rootNodeId: parentId,
    //         currentPath: path
    //     }));
    // };
    render() {
        // const {
        //     categoryTree,
        //     props,
        //     state
        // } = this;

        // const {
        //     rootNodeId
        // } = state;
   
        return (
            <aside>
                {/* <nav className={defaultClasses.body}>
                    {categoryTree}
                </nav> */}
                nscjkdncjkd
            </aside>
        );
    }
}

export default Navigation

