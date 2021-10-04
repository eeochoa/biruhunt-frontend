import React from 'react';
import {Button, Paper} from "@material-ui/core";
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import axios from '../components/utils/axios'
import DeleteIcon from '@material-ui/icons/Delete';
import Input from "../components/Controls/Input";
import PageHeader from "../components/PageHeader/PageHeader";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root':{
            margin: theme.spacing(1),
        },
        marginLeft: "10%",
    },
        container: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "25px",
            paddingBottom: "15px",
            maxWidth: "50%",
            marginLeft: "25%"
        },
    button: {
        margin: theme.spacing(1),
        fontSize: '12px',
    },
    successMessage: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    errorMessage: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    buttonContainer: {
        marginLeft: "auto",
        marginRight: "auto",
    },

    })
)

export default function DeleteBeer(){
    const classes = useStyles();

    const [value, setValue] = useState("");
    const [errors, setErrors] = useState(false);
    const [success, setSuccess] = useState(false);

    const beerDeletedSuccessfullyMessage = <h4 style={{color: "#4CAF50"}}>Beer deleted successfully!</h4>
    const beerDeletedErrorMessage = <h4 style={{color: "#F44336"}}>Beer not found</h4>

    const resetForm = (() => {
        setValue("");
    })

    const handleChange = e => {
        console.log(e.target.value)
        setValue(e.target.value)
        setSuccess(false)
        setErrors(false)
    }

    const handleClick = () => {
        axios.delete("/beers/"+value)
            .then(res => {
                console.log(res)
                if (res.data === 0){
                    setSuccess(true)
                    resetForm();
                }else{
                    setErrors(true)
                }
            })
    }

    return(
        <>
        <PageHeader
          title = "Delete Beer"/>
        <Paper className={classes.container}>
        <Input
        required = "true"
        value={value}
        label="Beer ID"
        color="secondary"
        inputProps={5}
        onChange={handleChange}
        />
            <div>
            <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick ={handleClick}
                startIcon={<DeleteIcon/>}>
                Delete Beer
            </Button>
            </div>
        </Paper>
            <div className={classes.successMessage}>
                {(success) ? beerDeletedSuccessfullyMessage : null}
            </div>
            <div className={classes.successMessage}>
                {(errors) ?  beerDeletedErrorMessage : null}
            </div>
        </>
    );
}
