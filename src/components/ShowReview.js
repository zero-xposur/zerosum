import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import Rating from 'react-rating';
import { getTasteBuddies } from '../reducers';
import Circle from 'react-circle';
import { Link } from 'react-router-dom';

// eslint-disable-next-line complexity
const ShowReview = props => {
    const { review } = props;
    const {
        appearance,
        aroma,
        mouthfeel,
        taste,
        overall,
        user,
        createdAt,
        score,
        babeer,
    } = review;

    const time = new Date(createdAt).toDateString();

    const tags = [
        { category: appearance, label: 'Appearance' },
        { category: aroma, label: 'Aroma' },
        { category: mouthfeel, label: 'Mouthfeel' },
        { category: taste, label: 'Taste' },
        { category: overall, label: 'Overall' },
    ];

    let tasteBuddy = {};
    if (props.tasteBuddies && user) {
        tasteBuddy = props.tasteBuddies.find(
            tasteBud => tasteBud.userId === user.id
        );
    }
    return (
        <Container>
            <Paper
                style={{
                    width: '100%',
                    padding: '0 1% 0 1%',
                    marginBottom: '2vh',
                }}
            >
                <Grid container spacing={1} padding={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="span">
                            {user ? (user.name ? user.name : user.email) : null}{' '}
                            on {time}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{ textAlign: 'center' }}
                    >
                        <Typography
                            variant="h5"
                            align="center"
                            // this will break the single beer page... idk why
                            // component={Link}
                            // to={`/beer/${babeer.id}`}
                        >
                            {babeer ? babeer.name : null}
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            {babeer ? babeer.brewery : null}
                        </Typography>
                        <Rating
                            initialRating={score}
                            emptySymbol={
                                <StarBorder
                                    fontSize="large"
                                    style={{
                                        color: 'gold',
                                    }}
                                />
                            }
                            fullSymbol={
                                <Star
                                    fontSize="large"
                                    style={{
                                        color: 'gold',
                                    }}
                                />
                            }
                            readonly={true}
                        />
                    </Grid>
                    <Grid item xs={7} sm={7} md={4} lg={4} xl={4}>
                        {tags.map(tag => (
                            <Typography
                                key={tag.label}
                                variant="subtitle2"
                                align="center"
                            >
                                {tag.label}: {tag.category}
                            </Typography>
                        ))}
                    </Grid>
                    {tasteBuddy ? (
                        tasteBuddy.correlation ? (
                            <Grid item xs={5} sm={5} md={4} lg={4} xl={4}>
                                <Typography align="center">
                                    User Correlation:{' '}
                                </Typography>
                                <Typography align="center">
                                    <Circle
                                        progress={(tasteBuddy
                                            ? tasteBuddy.correlation * 100
                                            : 0
                                        ).toFixed(2)}
                                        size={75}
                                    />
                                </Typography>
                            </Grid>
                        ) : null
                    ) : null}
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Typography variant="body1" style={{ padding: '1vw' }}>
                            {review.review}
                        </Typography>
                    </Grid>
                    <div />
                </Grid>
            </Paper>
        </Container>
    );
};

const mapStateToProps = state => {
    return { tasteBuddies: state.tasteBuddies, user: state.user };
};

export default connect(mapStateToProps)(ShowReview);
