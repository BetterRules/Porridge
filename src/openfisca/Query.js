import axios from 'axios';
import config from './config';

const queryOF = (person, handleEligibility) => {

  let { firstName, lastName, ...queryPerson } = person;
  let qurryPerson = {}
  Object.keys(queryPerson).map(variable => {
    let queriableVar = {}
    queryPerson[variable].map(([date, value]) => {
      queriableVar[date] = value
    })
    qurryPerson[variable] = queriableVar
  })


  let query = {
    persons: {
      [firstName]: qurryPerson
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
