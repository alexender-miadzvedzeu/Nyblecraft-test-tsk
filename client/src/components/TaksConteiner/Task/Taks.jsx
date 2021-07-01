import React from 'react';
import classes from './Taks.module.css';

const Taks = props => {
    console.log(props.task.task);
    return (
        <div className={classes.wrapper}>
            <span className={classes.text}>{props.task.task}</span>
        </div>
    )
}

export default Taks;