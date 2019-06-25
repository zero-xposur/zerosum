import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography, Paper, Grid, CssBaseline } from '@material-ui/core';

import { Star, StarBorder } from '@material-ui/icons';
import Rating from 'react-rating';
import SingleRating from './SingleRating';

const BeerList = props => {
    const [beers, setBeers] = React.useState([]);
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState(
        props.match.path.includes('discover') ? 'score' : 'ratings'
    );

    useEffect(() => {
        setBeers(props.beers);
        return () => {
            setBeers([]);
        };
    }, []);

    const sortFunc = (a, b) => {
        const first = a ? (a[orderBy] ? a[orderBy].toString() : '0') : '0';
        const second = b ? (b[orderBy] ? b[orderBy].toString() : '0') : '0';
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

    return (
        <Fragment>
            <CssBaseline />
            {props.beers
                ? props.beers.sort(sortFunc).map(beer => {
                      return !beer ? null : (
                          <Paper key={beer.id} style={{ marginBottom: '2vh' }}>
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
                                      </Typography>
                                      <Typography>
                                          ({beer.ratings} ratings)
                                      </Typography>
                                  </Grid>
                                  <Grid item xs={12} md={6} lg={2} xl={2}>
                                      <SingleRating
                                          beer={beer}
                                          userBeerRatings={
                                              props.userBeerRatings
                                          }
                                          user={props.user}
                                      />
                                  </Grid>
                              </Grid>
                          </Paper>
                      );
                  })
                : null}
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        userBeerRatings: state.userBeerRatings,
    };
};

export default withRouter(connect(mapStateToProps)(BeerList));
