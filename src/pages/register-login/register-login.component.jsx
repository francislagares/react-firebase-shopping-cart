import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './register-login.styles.scss';

const RegisterLogin = () => (
  <div className='register-login'>
    <SignIn />
    <SignUp />
  </div>
);

export default RegisterLogin;
