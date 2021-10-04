import React, {useState} from 'react'
import {Grid, makeStyles, Paper} from "@material-ui/core";
import Input from "../components/Controls/Input";
import {Form} from "../components/Controls/useForm";
import Button from "../components/Controls/Button";
import PageHeader from "../components/PageHeader/PageHeader";
import axios from "../components/utils/axios";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root':{
            width: '80%',
            margin: theme.spacing(2),
        },
        marginLeft: "8%",
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    buttonContainer: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    successMessage: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    formControl: {
        margin: theme.spacing(3),
    },

}))

const initialFormValues = {
        beerId: "",
        beerName: "",
        abv: "",
        beerType: "",
        rating: "",
        active: false,
}

export default function AddBeer(){
    const classes = useStyles();
    const [values, setValues] = useState(initialFormValues);
    const [showSuccess, setSuccess] = useState(false);
    const [showError, setError] = useState(false);

    const resetForm = (() => {
        setValues(initialFormValues);
    })

    const handleInputChange = e => {
        e.preventDefault();
        setSuccess(null);
        setError(null);
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        const postData = {
            beerId: values.beerId,
            name: values.beerName,
            abv: values.abv,
            beerType: values.beerType,
            rating: values.rating,
            //active: values.active,
        }
        axios.post("/beers/"+values.beerId, postData,)
            .then((response) =>{
                if (response.data === 409){
                    setError(true);
                }else if (response.status === 200){
                    setSuccess(true);
                    resetForm()
                }else if (response.status === 400){
                    setError(true);
                }
            }).catch(error => {
                console.log(error)
        });
    }

    const displaySuccessMessage = () =><h4 style={{color: "#4CAF50"}}>Beer added successfully!</h4>
    const displayErrorMessage = () => <h4 style={{color: "#F44336"}}>An error has occurred. Beer ID may be in used.</h4>



    return(
        <>
        <PageHeader
          title = "Add Beer"/>
        <Paper className={classes.pageContent}>
        <Form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
          <Grid container>
            <Grid item xs={6}>
                <Input
                    required=" true"
                    name ="beerId"
                    label = "Beer Id"
                    value = {values.beerId}
                    onChange = {handleInputChange}/>
                <Input
                    required="true"
                    variant = "outlined"
                    label="Beer Name"
                    name = "beerName"
                    value={values.beerName}
                    onChange = {handleInputChange}/>
                <Input
                   // required="true"
                    variant = "outlined"
                    label="ABV"
                    name = "abv"
                    value={values.abv}
                    onChange = {handleInputChange}/>
            </Grid>
            <Grid item xs={6}>
                <Input
                    //required="true"
                    variant = "outlined"
                    label="Beer Type"
                    name = "beerType"
                    value={values.beerType}
                    onChange = {handleInputChange}/>
                <Input
                    required="true"
                    variant = "outlined"
                    label="Rating"
                    name = "rating"
                    value={values.rating}
                    onChange = {handleInputChange}/>

            </Grid>
              <div className={classes.buttonContainer}>
                  <Button
                   type ="submit"
                   text = "Submit"
                   />
                  <Button
                   text = "Reset"
                   color ="default"
                   onClick={resetForm}/>
              </div>
          </Grid>
        </Form>
        </Paper>
            <div className={classes.successMessage}>
                {showSuccess ? displaySuccessMessage() : null}
                {showError ? displayErrorMessage() : null}
            </div>
        </>
    )
}
