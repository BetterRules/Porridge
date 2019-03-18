import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Profile = () => {
  return (
    <Fragment>
      <Paper>
        <Avatar alt="a person" src="https://d3iw72m71ie81c.cloudfront.net/mlin.png" />
        <Typography variant="h4" gutterBottom>
          Persons name
        </Typography>
      </Paper>
    </Fragment>
  );
}

export default Profile;
