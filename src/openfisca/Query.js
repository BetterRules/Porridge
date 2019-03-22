import axios from 'axios';
import config from './config';

const queryOF = (person, handleEligibility) => {

  let { firstName, ...queryPerson } = person;

  let query = {
    persons: {
      [firstName]: queryPerson
    },
    titled_properties: {
      house: {
        others: [firstName],
      },
    },
    families: {
      family: {
        others: [firstName],
      },
    }
  }


  return axios
    .post(config.api_url, query)
    .then(results =>
      results.status && results.status === 200
        ? handleEligibility(results.data.persons[firstName])
        : handleEligibility({})
    )
    .catch(err => console.log(err))
}

export default queryOF;
