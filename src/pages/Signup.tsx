import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input, { Label } from '../components/Input';
import Button from '../components/Button';
import { AuthPageWrapper } from '../components/AuthPageWrapper';
import {
  FormWrapper,
  FormTitle,
  FormControl,
  FormButtonControl,
  FormFooter,
} from '../components/FormElements';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (value: string) => {
    setFullName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSignup = () => {
    console.log('Form submitted');
  };

  return (
    <AuthPageWrapper>
      <FormWrapper>
        <FormTitle>Sign-Up</FormTitle>
        <FormControl>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            isError={false}
            disabled={false}
            placeholder="John Doe"
            onChange={handleFullNameChange}
            value={fullName}
          />
        </FormControl>
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
        <FormButtonControl>
          <Button disabled={false} onClick={handleSignup}>
            Sign-Up
          </Button>
        </FormButtonControl>
      </FormWrapper>
      <FormFooter align="start">
        <span>Already registered?</span>
        <Link to="/signin">Sign-in</Link>
      </FormFooter>
    </AuthPageWrapper>
  );
};

export default Signup;
