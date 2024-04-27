import React, { useState } from 'react';
import './styles.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GridCard from '../GridCard/GridCard';

export default function TabsComponent({coins}) {
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
        <TabPanel value="grid" style={{ color: 'white' }}>
          <div className='grid-flex'>
            {coins.map((coins, i)=>{
                return (
                    <GridCard coins={coins} key={i} />
                )
            })}
          </div>
        </TabPanel>
        <TabPanel value="list" style={{ color: 'white' }}>
        <div>
            {coins.map((item, i)=>{
                return (
                    <p key={i}>
                        {i+1}. {<img src={item.image} />}
                    </p>
                )
            })}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
}