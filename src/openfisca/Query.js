import axios from 'axios';
import DATA from './Data';
import config from './config';

const queryOF = () => {
  return axios
    .post(config.api_url, DATA[config.name])
    .then(results =>
      results.status && results.status === 200
        ? this.setState({
            [`${config.name
              .toLowerCase()
              .replace(' ', '_')}_results`]: results,
          })
        : {},
    )
    .catch(err => err)
}

export default queryOF;
