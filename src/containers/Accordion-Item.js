import React, { useState, useEffect } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import QueryOF from '../openfisca/Query'
import Inputs from '../components/Inputs'
import Eligibility from '../components/Eligibility'
import WeeklyCompensation from '../components/WeeklyCompensation';

const AccordionItem = (props) => {
  const { person } = props
  const [expanded, expandedPanel] = useState('');
  const [currentPerson, updatePerson] = useState(person)
  const [eligible, setIsEligible] = useState(null);
  const [weeklyCompensation, setWeeklyCompensation] = useState(null);
  const backgroundColour = eligible && eligible && eligible[Object.keys(eligible)[0]] ? '#cfc': '#fcc'
  
  const handleChange = (name, date, value, dateIsValueToUpdate) => event => {
    const newDate = dateIsValueToUpdate
    ? event.target.value
    : date
      ? date
      : 'ETERNITY'

    const newValue = value
      ? value
      : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    const updatedData = [newDate, newValue]
  
    updatePerson({...currentPerson, [name]: [updatedData] })
  };

  useEffect(() => {
    function handleEligibility(res) {
      setIsEligible(res.acc_sched_1__lope_eligible)
      setWeeklyCompensation(res.acc_sched_1__lope_weekly_compensation)
    }
    QueryOF(currentPerson, handleEligibility)
  }, [currentPerson]);
  
  const handleAccordionChange = panel => (e, expanded) => {
      expanded ? expandedPanel(panel) : expandedPanel(false)
  };

  return (
    <ExpansionPanel style={{'backgroundColor': backgroundColour }} expanded={expanded === currentPerson.firstName} onChange={handleAccordionChange(currentPerson.firstName)}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <p>{currentPerson.firstName} {currentPerson.lastName}</p>
      <WeeklyCompensation weeklyCompensation={weeklyCompensation} />
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
