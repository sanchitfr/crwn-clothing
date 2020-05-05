import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password :''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        
        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name] : value})
    }

    render(){
        const { googleSignInStart } = this.props;
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name='email'
                    label="Email"
                    handleChange = {this.handleChange}
                    value={this.state.email}
                    required/>

                    <FormInput 
                    type="password" 
                    name='password' 
                    label='Password'
                    handleChange = {this.handleChange}
                    value={this.state.password}
                    required/>
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton isGoogleSignIn={true} type='button' onClick={googleSignInStart} >Sign in with Google </CustomButton>
                    </div>
                </form>
            </div> 
        );
    }   
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password})) 
})

export default connect(null,mapDispatchToProps)(SignIn);