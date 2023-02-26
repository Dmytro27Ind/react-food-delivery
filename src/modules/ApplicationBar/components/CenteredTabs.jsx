import React, { useState } from 'react'
import { Tabs, Tab } from '@mui/material'

const tabsStyles = {
  tabs: {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' }
  }
}

export default function CenteredTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary" centered sx={tabsStyles.tabs}>
      {['Home', 'About Us', 'Contacts'].map((label, ind) =>
        <Tab key={ind} label={label} />
      )}
    </Tabs>
  )
}
