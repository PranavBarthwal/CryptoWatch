import React, { useState } from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function TabsComponent() {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <TabList 
            onChange={handleChange} 
            aria-label="lab API tabs example"
            variant="fullWidth"
            defaultView="grid"
        >
            <Tab label="Grid View" value="grid" style={{ color: 'white' }} />
            <Tab label="List View" value="list" style={{ color: 'white' }} />
        </TabList>
        <TabPanel value="grid" style={{ color: 'white' }}>Item One</TabPanel>
        <TabPanel value="list" style={{ color: 'white' }}>Item Two</TabPanel>
      </TabContext>
    </div>
  );
}