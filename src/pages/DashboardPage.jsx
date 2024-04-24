import React from 'react'
import Header from '../components/Common/Header/Header'
import Footer from '../components/Common/Footer/Footer'
import TabsComponent from '../components/Dashboard/Tabs/Tabs'

function DashboardPage() {
    return (
        <>
            <Header />
            <TabsComponent />
            <Footer />
        </>
    )
}

export default DashboardPage
