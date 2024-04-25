import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header/Header'
import Footer from '../components/Common/Footer/Footer'
import TabsComponent from '../components/Dashboard/Tabs/Tabs'
import axios from 'axios';

function DashboardPage() {

    const [coins, setCoins] = useState([]);


    useEffect(() => {

        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1')
        .then((response)=>{
            console.log("RESPONSE : ",response);
            setCoins(response.data);
        })
        .catch((error)=>{
            console.log("ERROR : ",error);
        })

    }, [])


    return (
        <>
            <Header />
            <TabsComponent coins={coins}/>
            <Footer />
        </>
    )
}

export default DashboardPage
