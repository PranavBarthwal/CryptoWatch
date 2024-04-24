import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import {IconButton} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      
          <IconButton onClick={() => setOpen(true)}>
            <MenuRoundedIcon className='link'/>
          </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={() => setOpen(false)}
          >
            
            <div className="drawer-div">
            <a href="/">
             <p className="drawer-link link">Home</p>
            </a>
            <a href="/compare">
              <p className="drawer-link link">Compare</p>
            </a>
            <a href="/watchlist">
             <p className="drawer-link link">Watchlist</p>
            </a>
            <a href="/dashboard">
              <p className="drawer-link link">Dashboard</p>
            </a>
      </div>

          </Drawer>
       
    </div>
  );
}
