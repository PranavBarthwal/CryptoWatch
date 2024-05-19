import React from 'react'
import './styles.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

function ListCard({coins}) {
    return (
        <tr className='list-row'>
            
            <td className="td-img">
        
                <div className="coin-info-flex ">
                    <img src={coins.image} className='coin-image'/>
                </div>
            </td>

            <td>    
                <div className="coin-name-flex">
                    <p className='coin-symbol'>{coins.symbol}</p>
                    <p className='coin-name'>{coins.name}</p>
                </div>

            </td> 


            {coins.price_change_percentage_24h > 0 ? (

                <td className="chip-flex">
                    <div className="price-chip">{coins.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="trending-icon"><TrendingUpIcon /></div>
                </td>
                
                   
                

            ) : (

                <td className="chip-flex">
                    <div className="price-chip red">{coins.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="trending-icon red"><TrendingDownIcon /></div>
                </td>

            )  }

            <td>
                <h3 className='coin-price td-current-price' style={{color: coins.price_change_percentage_24h>0 ? "var(--green)" : "var(--red)"}}>${coins.current_price.toLocaleString()}</h3>
            </td>
            
        
            <td className='info-div td-totalVolume'>
                <p className='info-div info-chip'>Total Volume : {coins.total_volume.toLocaleString()} </p>
            </td>    

            <td className='info-div td-marketCap'>    
                <p className='info-div info-chip'>Market Cap : $ {coins.market_cap.toLocaleString()}</p>
            </td>

        </tr>
        
    )
}

export default ListCard
