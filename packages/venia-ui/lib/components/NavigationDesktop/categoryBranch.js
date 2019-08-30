import React, { useState } from 'react';
import { Link, withRouter } from '@magento/venia-drivers';
import defaultClasses from './categoryLeaf.css';
const urlSuffix = '.html';

const Branch = (props) => {
    const [ tagIndex, setTagIndex ] = useState(null)
    const { name, branches, urlPath, path, level } = props;   
    const activeClistStyle = (url, index) => {
        props.history.push(`${url}${urlSuffix}`)
    }
    const positionLevel = `position_${level}`;
    return (
        <>
        <span 
            className={defaultClasses.root}
            onClick={() => activeClistStyle(urlPath, 10)}
        >
            <span className={defaultClasses.text} >
                {name}
                <span className={defaultClasses.arrowDown}>&#x25BE;</span>
                </span>

            <div className={`${defaultClasses.childTag} ${defaultClasses[positionLevel]}`}>
            {branches.map(item => {
                
                if(path.split('/').includes(item.key)) {
         
                    return item
                }
            })}
            </div>
        </span>
        </>
    );
}

export default withRouter(Branch)
