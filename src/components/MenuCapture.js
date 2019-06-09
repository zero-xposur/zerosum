import React, { Component, Fragment } from 'react';
import Webcam from 'react-webcam';
import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    CssBaseline,
} from '@material-ui/core';
import { Camera } from '@material-ui/icons';
import { getMenu } from '../reducers';
import { connect } from 'react-redux';

class MenuCapture extends Component {
    setRef = webcam => {
        this.webcam = webcam;
    };

    takePhoto = () => {
        let imgUri = this.webcam.getScreenshot();
        const buffer = Buffer.from(
            imgUri.replace(/^data:image\/\w+;base64,/, ''),
            'base64'
        ).toString('base64');
        console.log(buffer);
        this.props.searchMenu(buffer).then(response => {
            console.log(response);
        });
    };

    render() {
        const videoConstraints = {
            facingMode: 'environment',
        };

        return (
            <Fragment>
                <Container>
                    <Webcam
                        videoConstraints={videoConstraints}
                        audio={false}
                        height={'80%'}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                        width={'100%'}
                    />
                </Container>

                <AppBar
                    position="fixed"
                    color="primary"
                    style={{ top: 'auto' }}
                >
                    <Toolbar>
                        <IconButton
                            style={{ margin: 'auto' }}
                            onClick={this.takePhoto}
                        >
                            <Camera fontSize="large" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    searchMenu: image => dispatch(getMenu(image)),
});

export default connect(
    null,
    mapDispatchToProps
)(MenuCapture);
