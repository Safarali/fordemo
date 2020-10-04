import React, { useState } from 'react';
import Input, { Label } from '../components/Input';
import Button from '../components/Button';
import { AuthPageWrapper } from '../components/PageWrappers';
import {
  FormWrapper,
  FormTitle,
  FormControl,
} from '../components/FormElements';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSignin = () => {
    console.log('Form submitted');
  };

  return (
    <AuthPageWrapper>
      <FormWrapper>
        <FormTitle>Sign-Up</FormTitle>
        <FormControl>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            isError={false}
            disabled={false}
            placeholder="user@email.com"
            onChange={handleEmailChange}
            value={email}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            isError={false}
            disabled={false}
            placeholder="**********"
            onChange={handlePasswordChange}
            value={password}
          />
        </FormControl>
        <Button disabled={false} onClick={handleSignin}>
          Sign-In
        </Button>
      </FormWrapper>
    </AuthPageWrapper>
  );
};

export default Signin;
