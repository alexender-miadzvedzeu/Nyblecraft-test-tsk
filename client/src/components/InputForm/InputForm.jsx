import React, { useState, useRef } from 'react';
import classes from './InputForm.module.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const InputForm = props => {
    const [value, setValue] = useState('');

    const sendTask = task => {
        value.length != 0 ? props.sendTask(value) : console.log('input has no value')
        setValue('');
    }
    
    return (
        <div className={classes.wrapper}>
            <form className={classes.formBox} noValidate autoComplete="off">
                <TextField value={value} onChange={e => setValue(e.target.value)} className={classes.input} id="outlined-basic" label="Task" variant="outlined" />
                <Button onClick={() => sendTask()} className={classes.button} variant="contained" color="primary">Add task</Button>
            </form>
        </div>
    )
}

export default InputForm;