import React from 'react';
import {
    GridList,
    GridListTile,
    GridListTileBar,
    Typography,
    Container,
} from '@material-ui/core';

const Discover = () => {
    const styles = [
        'IPA',
        'Stout',
        'Wheat Beer',
        'Lager',
        'Pilsner',
        'Ale',
        'Porter',
    ];
    return (
        <Container>
            <GridList cellHeight="auto">
                {styles.map(style => (
                    <GridListTile key={style}>
                        <img
                            style={{ width: '100%', height: 'auto' }}
                            src="https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1527783007/beer-trends-2018-FT-BLOG0518.jpg?itok=bL0VB6KW"
                        />
                        <GridListTileBar
                            title={
                                <Typography
                                    variant="h4"
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