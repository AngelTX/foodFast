import React from 'react';
import TextField from 'material-ui/TextField';
import { Col, Button, Row, } from 'react-bootstrap';
import logo from './logo.png';


const Input = () => (
  <div>
    <TextField
      defaultValue="Default Value"
      floatingLabelText="Floating Label Text"
    />
  </div>
);

export default Input;
