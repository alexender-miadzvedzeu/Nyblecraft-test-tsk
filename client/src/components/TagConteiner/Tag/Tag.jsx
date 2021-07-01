import React from 'react';
import classes from './Tag.module.css';

const Tag = props => {
    if (props.task.tags.length !== 0) {
        return (
            <div className={classes.wrapper}>
                <span className={classes.text}>{props.task.tags}</span>
            </div>
        )
    } else {
        return null
    }
    
}

export default Tag;