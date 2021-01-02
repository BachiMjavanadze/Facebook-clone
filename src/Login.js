import React from 'react';
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase';
import WarningIcon from '@material-ui/icons/Warning';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

  const [state, dispatch] = useStateValue();

  let temp = '';
  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
        console.log(result.user);
      }).
      catch(error => console.log(error.message));
  };

  return (
    <div className='login'>
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/720px-Facebook_f_Logo_%28with_gradient%29.svg.png" alt="" />

        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />

      </div>
      <div className='login__warning'>
        <div className='login__warning_sub'>
          <WarningIcon className='login__warningIcon' />
        &nbsp;
        &nbsp;
        <p className='login__warningHeader'>Worning</p>
        </div>
        <p className='login__warningText'>This is a facebook clone. <br/> You need a google account for authorization.</p>
      </div>
      <Button type='submit' onClick={signIn} >Signe In</Button>
    </div>
  );
}

export default Login;
