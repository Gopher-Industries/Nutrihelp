import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/user.context";
import './CreateAccountPopUp.css'
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/general_components/Input/Input";
import { Button, Icon } from 'semantic-ui-react';
import { auth, signInWithGooglePopup, createUserDocFromAuth, signInAutUserWithEmailAndPassword, firestore } from "../../utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
    multiFactor,
    PhoneAuthProvider,
    PhoneMultiFactorGenerator,
    RecaptchaVerifier,
    sendEmailVerification
} from "firebase/auth";
import '../../App.css'
import './SignUp.css'

function LoginPopUp(props) {

    const navigate = useNavigate(); // Define navigation
    const { setCurrentUser } = useContext(UserContext); // Extract context methods

    // State management for user credentials and MFA flow
    const [contact, setContact] = useState({ email: '', password: '' });


    // Define what happens when change is made into the email/username inputs
    const handleChange = (event) => {
        const { name, value } = event.target;

        // Handle form input changes
        setContact(prevValue => ({ ...prevValue, [name]: value }));
    };

    const { email, password } = contact;

    const handleSignIn = async (e) => {
        e.preventDefault();

        const { email, password } = contact;

        try {
            // Attempt email/password sign-in
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // // Check for email verification before allowing login
            // if (!user.emailVerified) {
            //     alert('Please verify your email before logging in.');
            //     return;
            // }

            setCurrentUser(userCredential.user);  // Update context with new user
            console.log(user.displayName)
            navigate('/'); // Navigate to Landing Page

            alert("Successfully signed in with Email and Password. \nEmail: " + email)
        } catch (error) {

            alert("Failed to sign in: " + error.message);

        }
    };

    // Log in as Google user
    const logGoogleUser = async () => {
        // Similar to your previous implementation
        try {
            // Sign in with Google and navigate upon success
            const { user } = await signInWithGooglePopup();
            const userDocRef = await createUserDocFromAuth(user);
            setCurrentUser(user);
            if (userDocRef) alert("Successfully signed in with Google account. \nDisplay name: " + user.displayName);
            if (userDocRef) navigate('/');
        } catch (error) {
            console.error('Error signing in with Google', error.message);
        }
    };

    const handleForgotPasswordClick = () => {
        navigate("/forgotPassword"); // Navigate to forgot password page
    }

  return (props.trigger) ? (
    <div className="createpopup">
      <div className="createpopup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}
        >❌</button>
        <div className="login-style">

            <h3 style={{ paddingTop: '20px' }}>Login</h3>

            <br></br>
            <Input
                label="Email"
                name="email"
                type='text'
                placeholder="Email"
                onChange={handleChange}
                value={contact.email}
            />

            <br></br>

            <Input
                label="Password"
                name='password'
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={contact.password}
            />

            <br></br>

            <Button style={{ width: '300px' }}
                positive onClick={handleSignIn}>
                Sign In
            </Button>

            <br></br>

            <Button style={{ width: '300px' }} 
                onClick={logGoogleUser}
                color='blue'>
                <Icon
                    name='google'
                />
                Sign In With Google
            </Button>

            <br></br>

            <p className="forgot-password"
                onClick={handleForgotPasswordClick}>
                Forgot Password? 
            </p>

            {/* <Link className="link-div" to='/signup'>Create Account</Link> */}

            <br></br>

            </div>
                  { props.children }
                </div>
              </div>
              
            ) : "";
          }

export default LoginPopUp


