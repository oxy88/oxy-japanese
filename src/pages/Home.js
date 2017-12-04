// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import BearImage from '../images/Bear.jpg'
import Hiragana from '../images/hiragana.png'
import Search from '../images/search.png'

const styles = {
  card: {
    maxWidth: 345,
    marginBottom: 10
  },
  media: {
    height: 100,
  },
};

function Home(props) {
  const { classes } = props;
  return (
    <div>
      <Link to="/hiragana/study">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Hiragana}
          title="히라가나 기초"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            히라가나 기초
          </Typography>
        </CardContent>
      </Card>
      </Link>
      <a href="http://twitch.tv/oxyoxy88">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={BearImage}
          title="이빨곰 트위치"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            이빨곰 트위치 채널
          </Typography>
        </CardContent>
      </Card>
      </a>
      <a href="https://drive.google.com/drive/folders/1fV06Ndy87KRn0o-zWVQLqyVSLNbTvtcV?usp=sharing">
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2">
            참고자료
          </Typography>
        </CardContent>
      </Card>
      </a>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
