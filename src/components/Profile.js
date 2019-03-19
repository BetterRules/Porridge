import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Profile = (props) => {
  const { person } = props
  return (
    <Fragment>
        <Grid container spacing={16} direction="row">
          <Grid item>
            <Avatar alt="a person" src="https://d3iw72m71ie81c.cloudfront.net/mlin.png" />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="subtitle1">
                {person.firstName} {person.lastName}
            </Typography>
            <Typography gutterBottom>Persons Details</Typography>
          </Grid>
        </Grid>
    </Fragment>
  );
}

export default Profile;
