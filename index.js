import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());
const db = await sqlite.open({
    filename: './data_plan.db',
    driver: sqlite3.Database
});

// await db.exec(`PRAGMA foreign_keys = ON;`);
console.log('dataplan initialised'),
await db.migrate();

// Operational-Dataset
app.get('/api/operational_dataset', async function (req, res) {
    const operational_dataset = await db.all('select * from mytable');
    res.json({
        operational_dataset
    })
});

//Demand-Node 
app.get('/api/Demand_node_dataset', async function (req, res) {
    const Demand_node_dataset = await db.all(`SELECT 
    Demand_Node_1,Demand_Node_2,Demand_Node_3, Demand_Node_4,Demand_Node_5,Demand_Node_6, Demand_Node_7, Demand_Node_8,Demand_Node_9, Demand_Node_10, 
    Demand_Node_11, Demand_Node_12, Demand_Node_13, Demand_Node_14, Demand_Node_15, Demand_Node_16, Demand_Node_17, Demand_Node_18, Demand_Node_19, Demand_Node_20, 
    Demand_Node_21, Demand_Node_22, Demand_Node_23, Demand_Node_24, Demand_Node_25, Demand_Node_26, Demand_Node_27, Demand_Node_28, Demand_Node_29, Demand_Node_30,
    Demand_Node_31, Demand_Node_32
    FROM mytable`);
    res.json({
        Demand_node_dataset
    })
});

// Flow-Link Dataset
app.get('/api/Flow_link_dataset', async function (req, res) {
    const Flow_link_dataset = await db.all(`SELECT 
    Flow_Link_1, Flow_Link_2, Flow_Link_3, Flow_Link_4, Flow_Link_5,Flow_Link_6, Flow_Link_7, Flow_Link_8,Flow_Link_9, Flow_Link_10, 
    Flow_Link_11, Flow_Link_12, Flow_Link_13, Flow_Link_14, Flow_Link_15,Flow_Link_16, Flow_Link_17, Flow_Link_18,Flow_Link_19, Flow_Link_20,
    Flow_Link_21, Flow_Link_22, Flow_Link_23, Flow_Link_24, Flow_Link_25,Flow_Link_26, Flow_Link_27, Flow_Link_28,Flow_Link_29, Flow_Link_30,
    Flow_Link_31, Flow_Link_32
    FROM mytable`);
    res.json({
        Flow_link_dataset
    })
});

// Pressure_Node-Dataset
app.get('/api/Pressure_Node_dataset', async function (req, res) {
    const Pressure_Node_dataset = await db.all(`SELECT 
    Pressure_Node_1, Pressure_Node_2, Pressure_Node_3, Pressure_Node_4, Pressure_Node_5, Pressure_Node_6, Pressure_Node_7, Pressure_Node_8, Pressure_Node_9, Pressure_Node_10,
    Pressure_Node_11, Pressure_Node_12, Pressure_Node_13, Pressure_Node_14, Pressure_Node_15, Pressure_Node_16, Pressure_Node_17, Pressure_Node_18, Pressure_Node_19, Pressure_Node_20,
    Pressure_Node_21, Pressure_Node_22, Pressure_Node_23, Pressure_Node_24, Pressure_Node_25, Pressure_Node_26, Pressure_Node_27, Pressure_Node_28, Pressure_Node_29, Pressure_Node_30,
    Pressure_Node_31, Pressure_Node_32 
    FROM mytable`);
    res.json({
        Pressure_Node_dataset
    })
});

// Operational-Dataset with the timestamp
app.get('/api/ops_dataset', async function (req, res) {
const ops_dataset = await db.all(`SELECT ID, Demand_Node_1, Demand_Node_2, Demand_Node_3, Demand_Node_4, Demand_Node_5, Demand_Node_6, Demand_Node_7, Demand_Node_8, Demand_Node_9, Demand_Node_10, Demand_Node_11, Demand_Node_12, Demand_Node_13, Demand_Node_14, Demand_Node_15, Demand_Node_16, Demand_Node_17, Demand_Node_18, Demand_Node_19, Demand_Node_20, Demand_Node_21, Demand_Node_22, Demand_Node_23, Demand_Node_24, Demand_Node_25, Demand_Node_26, Demand_Node_27, Demand_Node_28, Demand_Node_29, Demand_Node_30, Demand_Node_31, Demand_Node_32, Flow_Link_1, Flow_Link_2, Flow_Link_3, Flow_Link_4, Flow_Link_5, Flow_Link_6, Flow_Link_7, Flow_Link_8, Flow_Link_9, Flow_Link_10, Flow_Link_11, Flow_Link_12, Flow_Link_13, Flow_Link_14, Flow_Link_15, Flow_Link_16, Flow_Link_17, Flow_Link_18, Flow_Link_19, Flow_Link_20, Flow_Link_21, Flow_Link_22, Flow_Link_23, Flow_Link_24, Flow_Link_25, Flow_Link_26, Flow_Link_27, Flow_Link_28, Flow_Link_29, Flow_Link_30, Flow_Link_31, Flow_Link_32, Pressure_Node_1, Pressure_Node_2, Pressure_Node_3, Pressure_Node_4, Pressure_Node_5, Pressure_Node_6, Pressure_Node_7, Pressure_Node_8, Pressure_Node_9, Pressure_Node_10, Pressure_Node_11, Pressure_Node_12, Pressure_Node_13, Pressure_Node_14, Pressure_Node_15, Pressure_Node_16, Pressure_Node_17, Pressure_Node_18, Pressure_Node_19, Pressure_Node_20, Pressure_Node_21, Pressure_Node_22, Pressure_Node_23, Pressure_Node_24, Pressure_Node_25, Pressure_Node_26, Pressure_Node_27, Pressure_Node_28, Pressure_Node_29, Pressure_Node_30, Pressure_Node_31, Pressure_Node_32, Timestamp
FROM operational`);
     res.json({
ops_dataset
})
});
console.log('done!');
const PORT = process.env.PORT || 6002;
app.listen(PORT, function () {
    console.log(`Operational Data Plan API started on port ${PORT}`)
});

