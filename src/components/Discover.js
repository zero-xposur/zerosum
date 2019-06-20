import React from 'react';
import { Link } from 'react-router-dom';
import {
    GridList,
    GridListTile,
    GridListTileBar,
    Typography,
    Container,
} from '@material-ui/core';
import { styles } from './utils';

const Discover = () => {
    console.log(styles);

    return (
        <Container>
            <GridList cellHeight="auto">
                {Object.keys(styles).map(style => (
                    <GridListTile
                        key={style}
                        component={Link}
                        to={`/discover/${style}`}
                    >
                        <img
                            style={{ width: '100%', height: 'auto' }}
                            src="https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1527783007/beer-trends-2018-FT-BLOG0518.jpg?itok=bL0VB6KW"
                        />
                        <GridListTileBar
                            title={
                                <Typography
                                    variant="h5"
                                    style={{ textAlign: 'center' }}
                                >
                                    {style}
                                </Typography>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </Container>
    );
};

export default Discover;
