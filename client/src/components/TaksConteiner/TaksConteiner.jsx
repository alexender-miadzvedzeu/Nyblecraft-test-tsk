import React from 'react';
import classes from './TaksConteiner.module.css';
import Taks from './Task/Taks';

const TaksConteiner = props => {
    return (
        <div className={classes.wrapper}>
            {props.task.map((task, key) => <Taks task={task} key={key} />)}
        </div>
    )
}

export default TaksConteiner;