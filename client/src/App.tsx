import React from 'react';
import HistoryTable from './components/HistoryTable';
import Layout from './components/Layout';
import LineChart from './components/LineChart';
import WeightEntry from './components/WeightEntry';


const App = () => {
    return(
        <Layout>
            <>
            <WeightEntry />
            <div className="">
                <HistoryTable />
                <LineChart />
            </div>
            </>
            
        </Layout>
    )
}

export default App;