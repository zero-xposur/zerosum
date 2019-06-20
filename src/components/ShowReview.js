import React, { useEffect } from 'react';
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
    console.log(props);

    useEffect(() => {
        props.fetchTasteBuddies(props.user.id);
    }, []);

    const tags = [
        { category: appearance, label: 'Appearance' },
        { category: aroma, label: 'Aroma' },
        { category: mouthfeel, label: 'Mouthfeel' },
        { category: taste, label: 'Taste' },
        { category: overall, label: 'Overall' },
    ];
    // console.log('review props', props.tastebuddies);
    let tasteBuddy = {};
    if (props.tasteBuddies && user) {
        //     console.log(props.tasteBuddies, user);
        tasteBuddy = props.tasteBuddies.find(
            tasteBud => tasteBud.userId === user.id
        );
    }
    return (
        <Container>
            <Paper style={{ width: '100%', padding: '0 1% 0 1%' }}>
                <Grid container spacing={1} padding={2}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{ alignContent: 'justified' }}
                    >
                        <Typography component="span">
                            {user ? (user.name ? user.name : user.email) : null}{' '}
                            on {time}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
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
                    </Grid>
                    {/* <Grid>
                        <Typography align="right">
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
                            ({score})
                        </Typography>
                    </Grid> */}
                    <Grid item xs={7} sm={7} md={4} lg={4} xl={4}>
                        <Typography align="center">
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
                            {/* ({score}) */}
                        </Typography>
                        {tags.map(tag => (
                            <Typography
                                key={tag.label}
                                variant="subtitle2"
                                align="center"
                            >
                                {tag.label}:
                                <Rating
                                    initialRating={tag.category}
                                    emptySymbol={
                                        <StarBorder
                                            fontSize="small"
                                            style={{
                                                color: 'red',
                                            }}
                                        />
                                    }
                                    fullSymbol={
                                        <Star
                                            fontSize="small"
                                            style={{
                                                color: 'red',
                                            }}
                                        />
                                    }
                                    readonly={true}
                                />
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

const mapDispatchToProps = dispatch => ({
    fetchTasteBuddies: id => {
        return dispatch(getTasteBuddies(id));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowReview);
