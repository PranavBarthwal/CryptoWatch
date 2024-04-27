import React from 'react'
import "./styles.css"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

function GridCard({coins}) {
    return (
       <div className='grid-container'>
        <div className="info-flex">
        
            <div className="coin-info-flex">
                <img src={coins.image} className='coin-image'/>
            </div>

            <div className="coin-name-flex">
                <p className='coin-symbol'>{coins.symbol}</p>
                <p className='coin-name'>{coins.name}</p>
            </div>

        </div> 


        {coins.price_change_percentage_24h > 0 ? (

                <div className="chip-flex">
                    <div className="price-chip">{coins.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="trending-icon"><TrendingUpIcon /></div>
                </div>
                
                   
                

            ) : (

                <div className="chip-flex">
                    <div className="price-chip red">{coins.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="trending-icon red"><TrendingDownIcon /></div>
                </div>

            )  }


            <h3 className='coin-price' style={{color: coins.price_change_percentage_24h>0 ? "var(--green)" : "var(--red)"}}>${coins.current_price.toLocaleString()}</h3>
        
            <div className='info-div'>
                <p className='info-div info-chip'> Low : ${coins.low_24h.toLocaleString()}</p>
                <p className='info-div info-chip'> High : ${coins.high_24h.toLocaleString()}</p>
                <p className='info-div info-chip'>Market Cap Rank: {coins.market_cap_rank}</p>
                <p className='info-div info-chip'>Total Volume : {coins.total_volume.toLocaleString()} </p>
                <p className='info-div info-chip'>Market Cap : $ {coins.market_cap.toLocaleString()}</p>
                <p className='info-div info-chip'>Total Supply : $ {coins.total_supply}</p>
            </div>
            
             

       </div> 
    )
}

export default GridCard
