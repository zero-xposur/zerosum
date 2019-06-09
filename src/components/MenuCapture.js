import React, { Component, Fragment } from 'react';
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
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';

class MenuCapture extends Component {
    constructor() {
        super();
        this.cameraPhoto = null;
        this.videoRef = React.createRef();
        this.state = {
            imgUri: '',
            height: 0,
            width: 0,
        };
    }
    componentDidMount() {
        this.cameraPhoto = new CameraPhoto(this.videoRef.current);
        this.startCamera(FACING_MODES.ENVIRONMENT, {
            height: 1920,
            width: 1080,
        });
    }

    componentWillUnmount() {
        this.stopCamera();
    }

    startCamera(facing, res) {
        console.log(this);
        this.cameraPhoto
            .startCamera(facing, res)
            .then(() => {
                let cameraSettings = this.cameraPhoto.getCameraSettings();
                let { height, width } = cameraSettings;
                this.setState({ height, width });
            })
            .then(() => console.log('camera started'))
            .catch(error => console.error('Camera not started', error));
    }

    stopCamera() {
        this.cameraPhoto.stopCamera().then(() => console.log('camera stopped'));
    }

    takePhoto = () => {
        const config = {
            sizeFactor: 1,
        };
        console.log(this.state);
        let imgUri = this.cameraPhoto.getDataUri(config);
        const buffer = Buffer.from(
            imgUri.replace(/^data:image\/\w+;base64,/, ''),
            'base64'
        ).toString('base64');
        console.log(buffer);
        this.props.searchMenu(buffer).then(response => {
            console.log(response);
        });
        this.setState({ imgUri });
    };

    render() {
        return (
            <Fragment>
                <CssBaseline />
                <Container>
                    <video
                        ref={this.videoRef}
                        autoPlay={true}
                        style={{ width: '100%', height: 'auto' }}
                    />
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
                </Container>
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
