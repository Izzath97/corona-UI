import React,{useState,useEffect} from "react";
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';
import { async } from 'q';


const Chart = () =>{
    const [dailyData,setDailyData]=useState({});

    useEffect(async()=>{
            const fetchAPI =async()=>{
              setDailyData(await fetchDailyData());
            }

            console.log(dailyData);

            fetchAPI();
    });

        const lineChart=(
            dailyData[0]?<Line
            data={{
                labels:'',
                datasets:[{},{}],
            }}
            />:null
        );

    return(
        <div>
            <h1>Chart</h1>
            </div>
    )
}

export default Chart;