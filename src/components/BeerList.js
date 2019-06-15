import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router';
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
    Grid,
    Container,
    CssBaseline,
} from '@material-ui/core';

import { Star, StarBorder } from '@material-ui/icons';
import Rating from 'react-rating';
import { getBeerListRating } from '../reducers/index';
import SingleRating from './SingleRating';

const BeerList = props => {
    const [beers, setBeers] = React.useState([]);
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState(
        props.match.path.includes('discover') ? 'score' : 'ratings'
    );

    useEffect(() => {
        // console.log('beerlist', props);
        setBeers(props.beers);
        // fetchBeerListRating()

        // if (props.user.user) {
        //     props.beers.map(beer => {
        //         props.fetchBeerListRating(props.user.user.id, beer.id);
        //     });
        // }
        // console.log('userprops', props);
    }, [props.beers]);

    // useEffect(() => {
    //     console.log('beerListRating:', props);
    // }, [props.user.user]);
    // if (props.user.user) {
    //     console.log('user:', props.user.user.id);
    //     props.fetchBeerListRating(
    //         props.user.user.id,
    //         beer.id
    //     );
    //     console.log('props', props);
    // }
    // user stuff for ratings
    // if (props.user.user) {
    //     console.log(props.user.user);

    //     // userLinks[0].label = `Hello, ${props.user.user.displayName}`;
    // } else {
    //     console.log('no user');
    //     userId = 0;
    //     // userLinks[0].label = 'Login';
    // }

    const labels = [
        { id: 'name', label: 'Beer' },
        { id: 'brewery', label: 'Brewery' },
        { id: 'style', label: 'Style' },
        { id: 'abv', label: 'ABV(%)' },
        { id: 'score', label: 'Rating' },
        { id: 'ratings', label: '# ratings' },
        { id: 'yourRating', label: 'Your Rating' },
    ];

    const sortFunc = (a, b) => {
        const first = a[orderBy] ? a[orderBy].toString() : '0';
        const second = b[orderBy] ? b[orderBy].toString() : '0';
        if (order === 'desc') {
            return -first.localeCompare(second, undefined, {
                numeric: true,
                sensitivity: 'base',
            });
        }
        return first.localeCompare(second, undefined, {
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

    // // ratings
    // const setRating = newRating => {
    //     console.log(newRating);
    //     console.log(props);
    //     // if (props.user) {
    //     //     console.log('setuser');
    //     // } else {
    //     //     console.log('do nothing');
    //     // }
    // };

    return (
        <Fragment>
            {/* <CssBaseline /> */}
            {props.beers
                ? props.beers.sort(sortFunc).map(beer => {
                      //   let rating = undefined;
                      //   console.log(props.beerListRating);
                      //   if (Array.isArray(props.beerListRating)) {
                      //       console.log(
                      //           'ARRAY'
                      //           //   props.beerListRating.find(element => element)
                      //       );
                      //   }

                      // {
                      //     props.length
                      //     //   props.beerListRating.find(
                      //     //       ele =>
                      //     //           ele.babeerid === beer.id
                      //     //   ).score
                      // }
                      return (
                          <Paper key={beer.id}>
                              <Grid
                                  container
                                  style={{
                                      textAlign: 'center',
                                      textDecoration: 'inherit',
                                      color: 'inherit',
                                  }}
                                  component={Link}
                                  to={`/beer/${beer.id}`}
                              >
                                  <Grid item xs={12} md={6} lg={2} xl={2}>
                                      <Typography variant="h6">
                                          {beer.name}
                                      </Typography>
                                      <Typography variant="subtitle2">
                                          {beer.brewery}
                                      </Typography>
                                  </Grid>
                                  <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={2}
                                      xl={2}
                                      style={{ margin: '1vh' }}
                                  >
                                      <Typography>{beer.style}</Typography>
                                  </Grid>
                                  <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={2}
                                      xl={2}
                                      style={{ margin: '1vh' }}
                                  >
                                      <Typography>
                                          ABV:{' '}
                                          {beer.abv === 'NaN'
                                              ? '?'
                                              : parseFloat(beer.abv).toFixed(1)}
                                      </Typography>
                                  </Grid>
                                  <Grid item xs={12} md={6} lg={2} xl={2}>
                                      <Typography>
                                          <Rating
                                              initialRating={parseFloat(
                                                  beer.score
                                              )}
                                              emptySymbol={
                                                  <StarBorder
                                                      style={{
                                                          color: 'gold',
                                                      }}
                                                  />
                                              }
                                              fullSymbol={
                                                  <Star
                                                      style={{
                                                          color: 'gold',
                                                      }}
                                                  />
                                              }
                                              readonly={true}
                                          />
                                          {/* {parseFloat(beer.score).toFixed(2)} */}
                                      </Typography>
                                      <Typography>
                                          ({beer.ratings} ratings)
                                      </Typography>
                                  </Grid>
                                  <Grid item xs={12} md={6} lg={2} xl={2}>
                                      <SingleRating beer={beer} />
                                      {/* <Typography>
                                          <Rating
                                              initialRating={parseFloat(
                                                  beer.score
                                              )}
                                              emptySymbol={
                                                  <StarBorder
                                                      style={{
                                                          color: 'gold',
                                                      }}
                                                  />
                                              }
                                              fullSymbol={
                                                  <Star
                                                      style={{
                                                          color: 'gold',
                                                      }}
                                                  />
                                              }
                                              //   onClick={setRating}
                                              readonly={true}
                                          />
                                      </Typography>
                                      <Typography>Your Rating</Typography> */}
                                  </Grid>
                              </Grid>
                          </Paper>
                          //   <TableRow key={beer.id}>
                          //       <TableCell
                          //           component={Link}
                          //           to={`beer/${beer.id}`}
                          //       >
                          //           {beer.name}
                          //       </TableCell>
                          //       <TableCell>{beer.brewery}</TableCell>
                          //       <TableCell>{beer.style}</TableCell>
                          //       <TableCell>
                          //           {beer.abv === 'NaN'
                          //               ? '?'
                          //               : parseFloat(beer.abv).toFixed(1)}
                          //       </TableCell>
                          //       <TableCell>
                          //           {parseFloat(beer.score).toFixed(2)}
                          //       </TableCell>
                          //       <TableCell>{beer.ratings}</TableCell>
                          //       <TableCell> --- </TableCell>
                          //   </TableRow>
                      );
                  })
                : null}
        </Fragment>
        // <Paper>
        //     <Table>
        //         <TableHead>
        //             <TableRow>
        //                 {labels.map(label => (
        //                     <TableCell key={label.id}>
        //                         <TableSortLabel
        //                             active={orderBy === label.id}
        //                             direction={order}
        //                             onClick={() => handleSort(label.id)}
        //                         >
        //                             {label.label}
        //                         </TableSortLabel>
        //                     </TableCell>
        //                 ))}
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {props.beers
        //                 ? props.beers.sort(desc).map(beer => {
        //                       return (
        //                           <TableRow key={beer.id}>
        //                               <TableCell
        //                                   component={Link}
        //                                   to={`beer/${beer.id}`}
        //                               >
        //                                   {beer.name}
        //                               </TableCell>
        //                               <TableCell>{beer.brewery}</TableCell>
        //                               <TableCell>{beer.style}</TableCell>
        //                               <TableCell>
        //                                   {beer.abv === 'NaN'
        //                                       ? '?'
        //                                       : parseFloat(beer.abv).toFixed(1)}
        //                               </TableCell>
        //                               <TableCell>
        //                                   {parseFloat(beer.score).toFixed(2)}
        //                               </TableCell>
        //                               <TableCell>{beer.ratings}</TableCell>
        //                               <TableCell> --- </TableCell>
        //                           </TableRow>
        //                       );
        //                   })
        //                 : null}
        //         </TableBody>
        //     </Table>
        // </Paper>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        beerRating: state.beerListRating,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBeerListRating: (fbId, beerId) => {
        return dispatch(getBeerListRating(fbId, beerId));
    },
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(BeerList)
);
