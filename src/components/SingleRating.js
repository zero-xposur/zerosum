import React, { useEffect, Fragment, Component } from 'react';
import { Typography } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import Rating from 'react-rating';
import { connect } from 'react-redux';
import { getBeerListRating } from '../reducers/index';
import axios from 'axios';

// const SingleRating = props => {
class SingleRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: {},
            userId: {},
            rating: 0,
        };
        // this.onLogin = this.onLogin.bind(this);
    }
    componentDidMount() {
        this.setState({
            beer: this.props.beer,
            userId: this.props.user.id,
        });
    }
    // onLogin() {
    //     this.props.login().catch(error => console.log(error));
    // }
    render() {
        return (
            <Fragment>
                <Typography>
                    <Rating
                        initialRating={parseFloat(this.state.rating)}
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
                <Typography>Your Rating{this.state.rating}</Typography>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        beerRating: state.beerListRating,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBeerListRating: (fbId, beerId) => {
        return dispatch(getBeerListRating(fbId, beerId));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleRating);
