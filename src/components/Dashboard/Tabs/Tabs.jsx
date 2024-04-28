import React, { useState } from 'react';
import './styles.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GridCard from '../GridCard/GridCard';
import ListCard from '../ListCard/ListCard';

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
        <table>
            {coins.map((coins, i)=>{
                return (
                    <ListCard coins={coins} key={i}/>
                )
            })}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}