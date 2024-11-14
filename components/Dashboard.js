import {useEffect, useState} from "react";
import axios from "axios";
import Chart from "./Chart";

const Dashboard = () => {
  const url = 'https://charts.mongodb.com/charts-sa-hackathon-fy25q4-remot-zjbxnim';

  return <div className="App">
    <h1 className="title">MongoDB Charts</h1>
    <div className="charts">
      <Chart height={'600px'} width={'800px'} chartId={'b2cb3ae1-e9ea-4e93-a243-26d518a99b0d'}/>
    </div>
  </div>
};

export default Dashboard;