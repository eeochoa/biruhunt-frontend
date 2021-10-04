import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    })
)

export default function AddLabelButton() {
    const classes = useStyles();

    return(
        <div>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon="+"
            >
                Add Beer
            </Button>
        </div>
    )
}