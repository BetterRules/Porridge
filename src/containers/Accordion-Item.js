import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Profile from '../components/Profile';
import Inputs from '../components/Inputs';
import Eligibility from '../components/Eligibility';

const AccordionItem = (props) => {
  const { person, inputs } = props
  const [expanded, expandedPanel] = useState('');

  const handleChange = panel => (e, expanded) => {
      expanded ? expandedPanel(panel) : expandedPanel(false)
  };

  return (
    <ExpansionPanel expanded={expanded === person.firstName} onChange={handleChange(person.firstName)}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <p>{person.firstName} {person.lastName}</p>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails className='Flex-Column'>
        <Profile person={person}/>
        <Inputs person={person} inputs={inputs}/>
        <Eligibility status={true} />
        <Eligibility status={false} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default AccordionItem;