import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Profile = (props) => {
  const { person } = props
  return (
    <Fragment>
      <Avatar alt="a person" src="https://d3iw72m71ie81c.cloudfront.net/mlin.png" />
      <Typography gutterBottom>Persons Details</Typography>
    </Fragment>
  );
}

export default Profile;
