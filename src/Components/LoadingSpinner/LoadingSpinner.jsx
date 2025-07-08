import React from 'react';
import { FadeLoader } from 'react-spinners';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className={classes.spinner_container}>
      <FadeLoader color="#febd69" />
      <p className={classes.loading_message}>{message}</p>
    </div>
  );
};

export default LoadingSpinner;