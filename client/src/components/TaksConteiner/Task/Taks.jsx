import React from 'react';
import classes from './Taks.module.css';

const Taks = props => {
    return (
        <div className={classes.wrapper}>
            <span className={classes.text}>{props.task.task}</span>
        </div>
    )
}

export default Taks;