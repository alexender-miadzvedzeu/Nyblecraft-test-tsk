import React from 'react';
import Tag from './Tag/Tag';
import classes from './TagConteiner.module.css';

const TagConteiner = props => {
    return (
        <div className={classes.wrapper}>
            {props.task.map((task, key) => <Tag task={task} key={key} />)}
        </div>
    )
}

export default TagConteiner;