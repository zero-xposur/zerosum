import React from 'react';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import Rating from 'react-rating';

const ShowReview = ({ review }) => {
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
    console.log(time);
    const tags = [
        { category: appearance, label: 'Appearance' },
        { category: aroma, label: 'Aroma' },
        { category: mouthfeel, label: 'Mouthfeel' },
        { category: taste, label: 'Taste' },
        { category: overall, label: 'Overall' },
    ];
    return (
        <Container>
            <Paper style={{ width: '100%', padding: '0 1% 0 1%' }}>
                <Grid container>
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
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h5" align="center">
                            {babeer ? babeer.name : null}
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            {babeer ? babeer.brewery : null}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
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
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="body1" style={{ padding: '1vw' }}>
                            {review.review}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default ShowReview;
