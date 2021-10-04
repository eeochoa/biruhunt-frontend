import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import axios from '../utils/axios'
import Dropdown from "../Dropdown/Dropdown";
import ListItem from "../List/ListItem";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles(theme => ({
    table: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    tableItem: {

    },

    root: {
        '& .MuiFormControl-root':{
            margin: theme.spacing(2),
        },
        marginLeft: "10%",
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    centerText: {
        display: "flex",
        justifyContent: "center"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));



export default function BasicTable() {
    const classes = useStyles();
    const [beers, setBeers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [sortType, setSortType] = useState("abv");

    const dropMenuContent = {
        label: "Sort By",
        options: ["", "Most Popular"],
        values: ["rating", "abv"],
    }

    const sortedByMostPopular = [...beers].sort( (a, b) => {

        const rating = (sortType === "rating") ? 1 : -1;
        return rating * String(b.rating).localeCompare(String(a.rating));
    });


    const handleDropDownChange = ((e) => {
        setSortType(e.target.value);
    })

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('/beers')
            setLoading(false);
            setBeers(request.data);
            return request;
        }

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit"/>
            </Backdrop>
        )
    } else if (beers.length < 1) {
        return (
            <Paper className={classes.pageContent}>
                <h1 className={classes.centerText}>No data to display</h1>
            </Paper>
        )
        }
        else{
        return (
            <div>
                <div style={{paddingBottom: "100px"}}>
                        <Dropdown  dropDownItems={dropMenuContent} onChange={handleDropDownChange}/>
                </div>
                <Table className={classes.root} aria-label="simple table">
                    <TableBody>
                        {sortedByMostPopular.map((row) => (
                            <ListItem
                                key = {row.beerId}
                                name={row.name}
                                abv={row.abv}
                                beerType={row.beerType}
                                rating={row.rating}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}
