import React, { useState, useEffect } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import QueryOF from '../openfisca/Query'
import Inputs from '../components/Inputs'
import Eligibility from '../components/Eligibility'

const AccordionItem = (props) => {
  const { person } = props
  const [expanded, expandedPanel] = useState('');
  const [currentPerson, updatePerson] = useState(person)
  const [eligible, setIsEligible] = useState(null);
  const handleChange = name => event => {
    const propToUpdate = event.target.type === "checkbox"
    ? "checked"
    : "value"
    updatePerson({...currentPerson, [name]: event.target[propToUpdate] })
  };

  useEffect(() => {
    function handleEligibility(res) {
      setIsEligible(res.acc_sched_1__lope_eligible)
    }
    QueryOF(currentPerson, handleEligibility)
  }, [currentPerson]);
  
  const handleAccordionChange = panel => (e, expanded) => {
      expanded ? expandedPanel(panel) : expandedPanel(false)
  };

  return (
    <ExpansionPanel expanded={expanded === currentPerson.firstName} onChange={handleAccordionChange(currentPerson.firstName)}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <p>{currentPerson.firstName} {currentPerson.lastName}</p>
      <Eligibility eligible={eligible} />
    </ExpansionPanelSummary>
    <ExpansionPanelDetails className='Flex-Column'>
        <Inputs
        person={currentPerson}
        handleChange={handleChange}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default AccordionItem;
