import React from 'react';
import {TextField} from "@material-ui/core";

export default function Input(props){

    const {required,name, label, value, maxLength, onChange} = props;

    return(
            <TextField
                variant = "outlined"
                inputProps={maxLength}
                required={required}
                label= {label}
                name ={name}
                value={value}
                onChange={onChange}
            />
    )
}