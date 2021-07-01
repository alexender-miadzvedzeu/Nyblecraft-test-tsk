import React, { useState } from 'react';
import classes from './Taks.module.css';
import { VscEdit } from 'react-icons/vsc';
import { AiOutlineDelete } from 'react-icons/ai';

const Taks = props => {

    const [currentTask, setCurrentTask] = useState('');

    const removeTask = () => {
        props.removeTask(props.task.id);
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.text}>
                {props.task.task.split(' ').map((elem, key) => {
                    if (elem.startsWith('#')) {
                        return <span key={key} className={classes.tag}>{elem + ' '}</span>
                    } else {
                        return elem + ' ';
                    }
                })}
            </div>
            <div className={classes.buttons}>
                <button className={classes.edit}>
                    <VscEdit />
                </button>
                <button className={classes.del} onClick={removeTask}>
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    )
}

export default Taks;