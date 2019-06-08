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
        this.onLogin = this.onLogin.bind(this);
    }
    onLogin(){

        this.props.login()
        .catch((error)=>console.log(error))
    }
    render(){
    
        return(
            <div>
                <a href='/api/auth/facebook' onClick={this.onLogin}>Login with Facebook</a>
                {/* <button onClick={this.onLogin} type='submit' className={'btn btn-primary'}><a href='/api/auth/facebook'>Login with Facebook</a></button> */}
            </div>
        )     
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
    }
}

export default connect(null, mapDispatchToProps)(Login);