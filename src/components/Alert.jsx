import React from 'react';
import { useContext } from 'react';
import AlertContext from '../context/alert/AlertContext';

function Alert() {
  const { alert } = useContext(AlertContext);

  return <strong>{alert?.msg}</strong>;
}

export default Alert;
