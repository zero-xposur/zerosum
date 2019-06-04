import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Typography,
    Paper,
} from '@material-ui/core';

const BeerList = props => {
    const [beers, setBeers] = React.useState([]);
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('ratings');

    useEffect(() => {
        setBeers(props.beers);
    });

    const labels = [
        { id: 'name', label: 'Beer' },
        { id: 'brewery', label: 'Brewery' },
        { id: 'style', label: 'Style' },
        { id: 'abv', label: 'ABV(%)' },
        { id: 'score', label: 'Rating' },
        { id: 'ratings', label: '# ratings' },
        { id: 'yourRating', label: 'Your Rating' },
    ];

    const desc = (a, b) => {
        const first = a[orderBy] ? a[orderBy].toString() : '0';
        const second = b[orderBy] ? b[orderBy].toString() : '0';
        if (order === 'desc') {
            return first.localeCompare(second, undefined, {
                numeric: true,
                sensitivity: 'base',
            });
        }
        return -first.localeCompare(second, undefined, {
            numeric: true,
            sensitivity: 'base',
        });
    };

    const handleSort = column => {
        console.log(beers, orderBy);
        if (column === orderBy) {
            setOrder(order === 'desc' ? 'asc' : 'desc');
        }
        setOrderBy(column);
    };

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        {labels.map(label => (
                            <TableCell key={label.id}>
                                <TableSortLabel
                                    active={orderBy === label.id}
                                    direction={order}
                                    onClick={() => handleSort(label.id)}
                                >
                                    {label.label}
                                </TableSortLabel>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.beers
                        ? props.beers.sort(desc).map(beer => {
                              return (
                                  <TableRow key={beer.id}>
                                      <TableCell
                                          component={Link}
                                          to={`beer/${beer.id}`}
                                      >
                                          {beer.name}
                                      </TableCell>
                                      <TableCell>{beer.brewery}</TableCell>
                                      <TableCell>{beer.style}</TableCell>
                                      <TableCell>
                                          {beer.abv === 'NaN'
                                              ? '?'
                                              : parseFloat(beer.abv).toFixed(1)}
                                      </TableCell>
                                      <TableCell>
                                          {parseFloat(beer.score).toFixed(2)}
                                      </TableCell>
                                      <TableCell>{beer.ratings}</TableCell>
                                      <TableCell> --- </TableCell>
                                  </TableRow>
                              );
                          })
                        : null}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default BeerList;
