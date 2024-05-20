import React from 'react'
import './styles.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Tooltip from '@mui/material/Tooltip';
import { convertNumber } from '../../../functions/convertNumbers';

function ListCard({coins}) {
    return (
        <tr className='list-row'>
            
            <Tooltip title="Coin Logo">
                <td className="td-img">
        
                    <div className="coin-info-flex ">
                        <img src={coins.image} className='coin-image'/>
                    </div>
                </td>
            </Tooltip>
            

            <td>    
                <div className="coin-name-flex">
                <Tooltip title="Coin Symbol">
                    <p className='coin-symbol'>{coins.symbol}</p>
                </Tooltip>    
                <Tooltip title="Coin Name">    
                    <p className='coin-name'>{coins.name}</p>
                </Tooltip>    
                </div>

            </td> 


            {coins.price_change_percentage_24h > 0 ? (
                
                <Tooltip title="Price Change Percentage in 24hrs">
                <td className="chip-flex td-info">
                    <div className="price-chip">{coins.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="trending-icon td-chip-icon"><TrendingUpIcon /></div>
                </td>
                </Tooltip>
                
                   
                

            ) : (
                
                <Tooltip title="Price Change Percentage in 24hrs">
                <td className="chip-flex td-info">
                    <div className="price-chip red">{coins.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="trending-icon red td-chip-icon"><TrendingDownIcon /></div>
                </td>
                </Tooltip>

            )  }

            <Tooltip title="Current Price">
            <td>
                <h3 className='coin-price td-current-price' style={{color: coins.price_change_percentage_24h>0 ? "var(--green)" : "var(--red)"}}>${coins.current_price.toLocaleString()}</h3>
            </td>
            </Tooltip>
            
        
            <td className='info-div td-totalVolume'>
                <p className='info-div info-chip'>Total Volume : {coins.total_volume.toLocaleString()} </p>
            </td>    

            <td className='info-div td-marketCap'>    
                <p className='info-div info-chip desk-mkt'>Market Cap : $ {coins.market_cap.toLocaleString()}</p>
                <p className='info-div info-chip mobile'>Market Cap : $ {convertNumber(coins.market_cap)}</p>
            </td>

        </tr>
        
    )
}

export default ListCard
