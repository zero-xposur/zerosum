import React, {Component} from 'react';
import {connect} from 'react-redux';

import { login } from '../reducers/user';

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: '',
            facebookId: ''
        }
    }
    onLogin(){
        this.props.login();
        //this.props.history.push('/search');
        console.log('state is', this.state)
    }
    render(){
    
        return(
            <div>
                <a href='/api/auth/facebook' onClick={()=>this.onLogin()}>Login with Facebook</a>
            </div>
        )     
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);