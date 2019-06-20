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
    } = review;
    console.log(review);
    const tags = [
        { category: appearance, label: 'Appearance' },
        { category: aroma, label: 'Aroma' },
        { category: mouthfeel, label: 'Mouthfeel' },
        { category: taste, label: 'Taste' },
        { category: overall, label: 'Overall' },
    ];
    return (
        <Container>
            <Paper style={{ width: '100%' }}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography>
                            {user ? (user.name ? user.name : user.email) : null}{' '}
                            on {createdAt}: Total Score: {score}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        {tags.map(tag => (
                            <Typography key={tag.label}>
                                {tag.label}:
                                <Rating
                                    initialRating={tag.category}
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
