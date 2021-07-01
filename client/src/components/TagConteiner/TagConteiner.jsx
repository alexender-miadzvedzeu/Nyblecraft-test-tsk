import React from 'react';
import Tag from './Tag/Tag';
import classes from './TagConteiner.module.css';

const TagConteiner = props => {
    return (
        <div className={classes.wrapper}>
            {props.tags.map((tag, key) => <Tag key={key} tag={tag}/>)}
        </div>
    )
}

export default TagConteiner;