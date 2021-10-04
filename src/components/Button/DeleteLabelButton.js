import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        fontSize: '12px',
    },
}));

export default function DeleteLabelButton() {
    const classes = useStyles();


    return(
        <div>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon/>}
            >
                Delete
            </Button>
        </div>
    )
}

