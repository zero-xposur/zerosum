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
        // this.video = React.createRef();
    }
    // componentDidMount() {
    //     if (
    //         'mediaDevices' in navigator &&
    //         'getUserMedia' in navigator.mediaDevices
    //     ) {
    //         navigator.mediaDevices
    //             .getUserMedia({
    //                 video: {
    //                     width: {
    //                         min: 1280,
    //                         ideal: 1920,
    //                         max: 2560,
    //                     },
    //                     height: {
    //                         min: 720,
    //                         ideal: 1080,
    //                         max: 1440,
    //                     },
    //                 },
    //             })
    //             .then(stream => {
    //                 console.log(this.stream);
    //                 return this.setState({ stream });
    //             })
    //             .catch(err => console.error(err));
    //     }
    // }
    // componentWillUnmount() {
    //     navigator.getUserMedia(
    //         { audio: false, video: true },
    //         function(stream) {
    //             // can also use getAudioTracks() or getVideoTracks()
    //             var track = stream.getTracks()[0]; // if only one media track
    //             // ...
    //             track.stop();
    //         },
    //         function(error) {
    //             console.log('getUserMedia() error', error);
    //         }
    //     );
    // }
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const img = this.webcam.getScreenshot();
        console.log(img);
        this.props.searchMenu(img).then(response => {
            console.log(response);
        });
    };

    render() {
        const videoConstraints = {
            facingMode: 'environment',
        };
        return (
            <Container>
                {/* <h1>Snap Menu</h1>
                {this.state.stream.active ? (
                    <video
                        autoPlay
                        ref={video => {
                            video.srcObject = this.state.stream;
                        }}
                    />
                ) : null} */}
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
