import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Input, { Label } from './components/Input';
import Button from './components/Button';

function App() {
  return (
    <>
      <GlobalStyle />
      <Label inputId="hello">Label</Label>
      <Input
        type={'email'}
        isError={true}
        isDisabled={false}
        placeholder={'email'}
        value={'hello'}
        onChange={(value) => console.log(value)}
        id="hello"
      />
      <h1>hello</h1>
      <Button onClick={() => console.log('clicked')} disabled={false}>
        Sign-in
      </Button>
    </>
  );
}

export default App;
