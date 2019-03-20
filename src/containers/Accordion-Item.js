import React, { useState, useEffect } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components'

import QueryOF from '../openfisca/Query'
import Profile from '../components/Profile'
import Inputs from '../components/Inputs'
import Eligibility from '../components/Eligibility'

const AccordionItem = (props) => {
  const { person } = props
  const [expanded, expandedPanel] = useState('');
  const [currentPerson, updatePerson] = useState(person)
  const [eligible, setIsEligible] = useState(null);
  
  useEffect(() => {
    function handleEligibility(res) {
      setIsEligible(res.acc_sched_1__lope_eligible)
    }
    if(eligible == null) QueryOF(currentPerson, handleEligibility)
  });

  const handleAccordionChange = panel => (e, expanded) => {
      expanded ? expandedPanel(panel) : expandedPanel(false)
  };

  const Header = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  `;
  
  return (
    <ExpansionPanel expanded={expanded === person.firstName} onChange={handleAccordionChange(person.firstName)}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <p>{person.firstName} {person.lastName}</p>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails className='Flex-Column'>
        <Header>
          <Profile person={person}/>
          <Eligibility eligible={eligible} />
        </Header>
        <Inputs person={person}/>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default AccordionItem;
