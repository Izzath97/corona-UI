import axios from 'axios';
import { CountryPicker } from '../components';
import { async } from 'rxjs/internal/scheduler/async';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    let changeableUrl =url;

    if(country){
        changeableUrl=`${url}/countries/${country}`;
        console.log(changeableUrl);
    }
  
try{
    const {data:{confirmed,deaths,lastUpdate,recovered}}= await axios.get(changeableUrl);

    console.log({confirmed,deaths,lastUpdate,recovered});
    return {confirmed,deaths,lastUpdate,recovered};
    
}
catch(error){
console.log(error);
}
}

export const fetchDailyData= async()=>{
    try{
        const {data}=await axios.get(`${url}/daily`);

        const modifiedData=data.map((dailyData)=>({
confirmed:dailyData.confirmed.total,
deaths:dailyData.deaths.total,
date:dailyData.reportDate,

        }));
        return modifiedData;
        console.log(data);
    }
    catch(error){


    }

}

export const countries= async()=>{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);

        return countries.map((country)=>country.name);
     
    }
        catch(error){
            console.log(error);
        }
}