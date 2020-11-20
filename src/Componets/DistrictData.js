import React from 'react'
import axios from 'axios'

export default class DistrictData extends React.Component {
    constructor() {
        super()
        this.state = {
            totalData: [],
            todayData: []
        }
    }

    async UNSAFE_componentWillMount() {
        let total = []
        await axios.get("https://api.covid19india.org/v4/data.json").then((response) => {
            let tData = response.data.KL.districts
            for(let x in tData){
                let da = {
                    district:null,
                    confirmed: 0,
                    deceased : 0,
                    recovered : 0,
                }
                da["district"]=x
                da.confirmed=tData[x].total.confirmed
                da.deceased=tData[x].total.deceased
                da.recovered=tData[x].total.recovered
                total.push(da)
            }
        })
        axios.get("https://api.covid19india.org/state_district_wise.json").then((response) => {
            let totalData = response.data.Kerala.districtData
            for (let x in totalData) {
                total.map((item,key)=>{
                    if(item.district===x){
                        item.active=totalData[x].active
                    }
                    return 0
                })
            }
            this.setState({ totalData: total })
        })
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered table-striped" >
                            <tbody>
                                {
                                    this.state.totalData.map((item, key) => {
                                        return (
                                            <tr>
                                                <th>
                                                    {item.district}
                                                    <div className="row float-right">
                                                        <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Confirmed:{item.confirmed}</span>
                                                        <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Active:{item.active}</span>
                                                        <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Recovered:{item.recovered}</span>
                                                        <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Deaths:{item.deceased}</span>
                                                    </div>
                                                </th>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
} 