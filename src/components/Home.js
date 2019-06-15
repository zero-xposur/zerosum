import React from 'react';
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    TextField,
    Paper,
    Button,
    CssBaseline,
} from '@material-ui/core';

export default function Home(){
    
    return(
        <Container>
            <a href='/#/login' ><Button>Login to rate the beer you are holding</Button></a>  
            <h3> OR </h3>
            <h3>Search for any beer or brewery </h3>
            <h3>by scanning the beer menu in front of you </h3>
            <h3>or scanning the beer you are holding</h3>
            <h3>or just explore the top rated beers and breweries </h3>
        </Container>

    )
}