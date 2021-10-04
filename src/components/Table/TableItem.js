import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'left',
        marginBottom: "20px",
    },
    media: {
        height: 20,
    },
    tableCellPrimary: {
      maxWidth: 100,
    },
    tableCellSecondary: {
    },
});

export default function MediaCard(props) {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const availability = (props.active === 1) ? '✔': 'X';

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell  className={classes.tableCellPrimary}>
                                        <Typography gutterBottom variant="h7" component="h2">
                                            {props.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Availability
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Beer Type
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            ABV
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Rating
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableCell align="inherit">
                                    <Typography variant="body2" color="textSecondary" component="p">

                                    </Typography>
                                </TableCell>
                                <TableCell align="left" className={classes.tableCellSecondary}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {availability}
                                    </Typography>
                                </TableCell>
                                    <TableCell align="inherit">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {props.type}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="inherit">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {props.abv}%
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {props.rating}/20
                                        </Typography>
                                    </TableCell>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


/*
*  <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography gutterBottom variant="h7" component="h2">
                                            {props.name} {availability}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="inherit">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Beer Type
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="inherit">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            ABV
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="inherit">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Rating
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableCell align="inherit">
                                    <Typography variant="body2" color="textSecondary" component="p">

                                    </Typography>
                                </TableCell>
                                    <TableCell align="inherit">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {props.type}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="inherit">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {props.abv}%
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="inherit">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {props.rating}/20
                                        </Typography>
                                    </TableCell>
                            </TableBody>
* */