import React from 'react';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component{

    state={
        data:{},
        country:'',
    }

    async componentDidMount(){
         const fetchedData=await fetchData();
       
        this.setState({data:fetchedData})
     
    }

    handleCountryChange = async (country)=>{
      
        const fetchedData=await fetchData(country);
      //  console.log(fetchData);
       this.setState({data:fetchedData });
     
       console.log(this.state.data);
    }
    render(){
        const {data} =this.state;
        return(
            <div className={styles.container}>
                <h1>COVID-19</h1>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart/>
                </div>
        )

    }
}

export default App;