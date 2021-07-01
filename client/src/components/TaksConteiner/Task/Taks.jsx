import React, { useState, useEffect } from 'react';
import classes from './Taks.module.css';
import { VscEdit } from 'react-icons/vsc';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

const Taks = props => {
    const [edit, setEdit] = useState(false);
    const [task, setTask] = useState(props.task.task);
    console.log(task)
    useEffect(() => {
        setTask(props.task.task)
    },[])
    const removeTask = () => {
        props.removeTask(props.task.id);
    }

    return (
        <div className={classes.wrapper}>
            {!edit ? (
                <>
                    <div className={classes.text}>
                        {props.task.task.split(' ').map((elem, key) => {
                            if (elem.startsWith('#')) {
                                return <span key={key} className={classes.tag}>{elem + ' '}</span>
                            } else {
                                return elem + ' ';
                            }
                        })}
                    </div>
                </>
            ) : (
                <>
                    <input type="text" value={task} onChange={e => setTask(e.target.value)} />
                </>
            )}
            <div className={classes.buttons}>
                {!edit ? (
                    <>
                        <button className={classes.edit} onClick={() => setEdit(true)}>
                            <VscEdit />
                        </button>
                    </>
                ) : (
                    <>
                        <button className={classes.done} onClick={() => setEdit(false)}>
                            <MdDone />
                        </button>
                    </>
                )}
                <button className={classes.del} onClick={removeTask}>
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    )
}

export default Taks;