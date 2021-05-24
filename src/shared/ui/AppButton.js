import React from 'react';
import Button from '@material-ui/core/Button';

const AppButton = ({ label, ...rest }) => {
  return (
    <Button variant="contained" {...rest}>
      {label}
    </Button>
  );
};
export default AppButton;
