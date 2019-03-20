import axios from 'axios';
import config from './config';

const queryOF = (person, handleEligibility) => {
  let { firstName, lastName, ...queryPerson } = person
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
  
  console.log('in da place', config.api_url, query)

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
