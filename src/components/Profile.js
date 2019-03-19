import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Profile = () => {
  return (
    <Fragment>
        <Grid container spacing={16} direction="row">
          <Grid item>
            <Avatar alt="a person" src="https://d3iw72m71ie81c.cloudfront.net/mlin.png" />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="subtitle1">
                Persons Name
            </Typography>
            <Typography gutterBottom>Persons Details</Typography>
          </Grid>
        </Grid>
    </Fragment>
  );
}

export default Profile;
