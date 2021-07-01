import React from 'react';
import classes from './Tag.module.css';

const Tag = props => {
    return (
        <div className={classes.wrapper}>
            <span className={classes.text}>{props.tag}</span>
        </div>
    )
}

export default Tag;