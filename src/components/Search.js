import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AppButton from '../shared/ui/AppButton';

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: theme.spacing(3)
  }
}));

export default function Search() {
  const classes = useStyles();

  return (
    <div>
      <TextField
        fullWidth
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Keyskills, Designation, Companies"
      />
      <TextField
        fullWidth
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Location"
      />
      <AppButton
        fullWidth
        className={classes.margin}
        label="Search"
        color="primary"
      />
    </div>
  );
}
