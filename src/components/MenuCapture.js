import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Webcam from 'react-webcam';
import { getMenu } from '../reducers';
import { connect } from 'react-redux';

class MenuCapture extends Component {
    constructor() {
        super();
        this.state = {
            image: {},
        };
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const img = this.webcam.getScreenshot();

        const regex = new RegExp(/^data:image\/(\w+);.*/);
        const extension = regex.exec(img)[1];
        const buffer = Buffer.from(
            img.replace(/^data:image\/\w+;base64,/, ''),
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
            <Container>
                <Webcam
                    videoConstraints={videoConstraints}
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={350}
                />
                <button onClick={this.capture}>photo</button>
            </Container>
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
