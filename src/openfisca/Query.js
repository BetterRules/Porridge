import axios from 'axios';
import config from './config';
// import _ from 'lodash';

const queryOF = (person, handleEligibility) => {

  let { firstName, lastName, ...queryPerson } = person;

  // console.log(queryPerson)
  let query = {
    persons: queryPerson,
    titled_properties: {
      house: {
        others: ['Luke', 'Sen', 'Fox', 'Mulder'],
      },
    },
    families: {
      family: {
        others: ['Luke', 'Sen', 'Fox', 'Mulder'],
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
