import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import Rating from 'react-rating';

const ShowReview = ({ review }) => {
    const { appearance, aroma, mouthfeel, taste, overall } = review;
    const tags = [
        { category: appearance, label: 'Appearance' },
        { category: aroma, label: 'Aroma' },
        { category: mouthfeel, label: 'Mouthfeel' },
        { category: taste, label: 'Taste' },
        { category: overall, label: 'Overall' },
    ];
    return (
        <Container>
            <Grid container>
                <Grid item sm={12} md={6} lg={6}>
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
            </Grid>
        </Container>
    );
};

export default ShowReview;
