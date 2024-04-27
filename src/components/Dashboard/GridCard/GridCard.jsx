import React from 'react'
import "./styles.css"

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

            {coins.price_change_percentage_24h > 0 ? (

                <div className="chip-flex">
                    <div className="price-chip">{coins.price_change_percentage_24h.toFixed(2)}%</div>
                </div>

            ) : (

                <div className="chip-flex">
                    <div className="price-chip red">{coins.price_change_percentage_24h.toFixed(2)}%</div>
                </div>

            )  }
            

        </div>  

       </div> 
    )
}

export default GridCard
