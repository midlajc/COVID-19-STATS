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
            for (let x in tData) {
                let da = {
                    district: null,
                    total: {
                        confirmed: 0,
                        deceased: 0,
                        recovered: 0,
                    },
                    today: {
                        confirmed: 0,
                        deceased: 0,
                        recovered: 0,
                    }

                }
                da["district"] = x
                da.total.confirmed = tData[x].total.confirmed
                da.total.deceased = tData[x].total.deceased
                da.total.recovered = tData[x].total.recovered
                if (tData[x].delta) {
                    da.today.confirmed = tData[x].delta.confirmed
                    da.today.deceased = tData[x].delta.deceased
                    da.today.recovered = tData[x].delta.recovered
                }
                total.push(da)
            }
        })
        axios.get("https://api.covid19india.org/state_district_wise.json").then((response) => {
            let totalData = response.data.Kerala.districtData
            for (let x in totalData) {
                total.map((item, key) => {
                    if (item.district === x) {
                        item.total.active = totalData[x].active
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
                        <table className="table table-bordered table-striped table-dark" >
                            <tbody>
                                {
                                    this.state.totalData.map((item, key) => {
                                        return (
                                            <React.Fragment>
                                                <tr>
                                                    <h2 className="text-center">{item.district}</h2>
                                                    <tr className="row m-0">
                                                        <th className="text-center col-6">TOTAL
                                                            <div className="row">
                                                                <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Confirmed:{item.total.confirmed}</span>
                                                                <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Active:{item.total.active}</span>
                                                                <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Recovered:{item.total.recovered}</span>
                                                                <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Deaths:{item.total.deceased}</span>
                                                            </div>
                                                        </th>
                                                        <th className="text-center col-6">
                                                            TODAY
                                                            <div className="row">
                                                                <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Confirmed:{item.today.confirmed}</span>
                                                                {/* <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Active:{item.total.active}</span> */}
                                                                <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Recovered:{item.today.recovered}</span>
                                                                <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Deaths:{item.today.deceased}</span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </tr>
                                            </React.Fragment>
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