import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper, TableCell, TableRow, withStyles} from "@material-ui/core";
import beer_graphic from "../img/generic-beer-graphic.jpg"
import Table from "@material-ui/core/Table";
import MuiTableCell from "@material-ui/core/TableCell";

const useStyle = makeStyles((theme) => ({
    gridItem: {
        flex: 1,
        marginTop: 1,
        marginBottom: 10,
        maxWidth: "80%",
        maxHeight: "150px",
    },
    container: {
            flex: 1,
            shadowColor: 'black',
            shadowOpacity: 0.05,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 8,
            elevation: 5,
            width: '80%',
            height: 60,
            marginLeft: '10%',
            marginRight: '5%',
            marginHorizontal: 1,

        },
    infoContainer: {
            flexDirection: 'column',
            width: '100%',
            height: '100%',
        },
    touchable: {
            overflow: 'hidden',
            borderRadius: 20,
        },
    image: {
            justifyContent: 'flex-start',
            height:100,
            width:100,
            resizeMode: 'contain',
            marginTop: 15,
            marginLeft: 5,
        },
    title: {
            justifyContent: 'flex-start',
            fontFamily: 'helvetica',
            fontSize: 16,
            marginLeft: 10,
            fontWeight: 'bold',
            minWidth: '100px'
        },
        rowtitle: {
            justifyContent: 'flex-start',
            fontFamily: 'helvetica',
            fontSize: 13,
            marginLeft: 10,
            fontWeight: 'bold',
            minWidth: '100px'
        },
    textContainer: {
            width: '100%',
            height: '10%',
            alignItems: 'flex-start',
            marginLeft: '75%',
        },
    cell: {
        minWidth: "100px",
    }

})
)

export default function ListItem(props) {
const classes = useStyle();
    const TableCell = withStyles({
        root: {
            borderBottom: "none"
        }
    })(MuiTableCell);

    return(
        <>
            <Paper className={classes.gridItem}>
                <Grid container>
                        <Grid item xs={1}>
                            <img alt="" src= {beer_graphic} className={classes.image}/>
                        </Grid>
                        <Grid item xs={1}>
                            <Table className={classes.textContainer}>
                                <TableRow>
                                <TableCell className={classes.title}>
                                    {props.name}
                                </TableCell>
                                    <TableCell className={classes.rowtitle}>
                                        ABV
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell className={classes.rowtitle}>
                                        Type
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell className={classes.rowtitle}>
                                        Rating
                                    </TableCell>
                                </TableRow>
                                <TableRow style={{marginBottom: "50px"}}>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell className={classes.cell}>
                                        {props.abv}%
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell className={classes.cell}>
                                        {props.beerType}
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell className={classes.cell}>
                                        {props.rating}/20
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                </TableRow>
                            </Table>
                        </Grid>
                </Grid>
            </Paper>
        </>
    )
}
