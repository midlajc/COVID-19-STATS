import React from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import DistrictData from './DistrictData'

export default class Kerala extends React.Component {
    constructor() {
        super()
        this.state = {
            totalData: {
                confirmed: 0,
                deceased: 0,
                active: 0,
                recovered: 0,
                tested: 0
            },
            active: 0,
            todayData: {
                confirmed: 0,
                deceased: 0,
                recovered: 0,
                tested: 0
            }
        }
    }

    async UNSAFE_componentWillMount() {
        let total = {
            confirmed: 0,
            deceased: 0,
            active: 0,
            recovered: 0,
            tested: 0
        }
        let stateData = []
        await axios.get("https://api.covid19india.org/state_district_wise.json").then((response) => {
            let totalData = response.data.Kerala.districtData
            for (let x in totalData) {
                stateData.push(totalData[x])
            }
            stateData.map((item, key) => {
                total.active += item.active
            })

        })
        axios.get("https://api.covid19india.org/v4/data.json").then((response) => {
            //console.log(response.data.KL);
            let tData = response.data.KL.total
            if (response.data.KL.delta) {
                this.setState({ todayData: response.data.KL.delta })
            }
            total.confirmed = tData.confirmed
            total.deceased = tData.deceased
            total.recovered = tData.recovered
            total.tested = tData.tested
            this.setState({ totalData: total })
        })
    }

    render() {
        return (
            <div className="row m-3">
                <div className="col-md-12">
                    <h3 className="text-center"><br></br>KERALA<br></br></h3>
                </div>
                <div className="col-md-12">
                    <div className="row text-center">
                        <div className="col-md-4 col-sm-6 col-xl-3 p-2 mx-auto">
                            <Card className="badge badge-primary" style={{ width: '15.23rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>{this.state.totalData.confirmed}</h3>
                                    <Card.Text>
                                        [Today:{this.state.todayData.confirmed}]
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xl-3 p-2 mx-auto">
                            <Card className="badge badge-info" style={{ width: '15.23rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <h3>{this.state.totalData.active}</h3>
                                    <Card.Text>
                                        <br></br>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xl-3 p-2 mx-auto">
                            <Card className="badge badge-success" style={{ width: '15.23rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>{this.state.totalData.recovered}</h3>
                                    <Card.Text>
                                        [Today:{this.state.todayData.recovered}]
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xl-3 p-2 mx-auto">
                            <Card className="badge badge-danger" style={{ width: '15.23rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <h3>{this.state.totalData.deceased}</h3>
                                    <Card.Text>
                                        [Today:{this.state.todayData.deceased}]
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xl-3 p-2 mx-auto">
                            <Card className="badge badge-dark" style={{ width: '15.23rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>TESTES</Card.Title>
                                    <h3>{this.state.totalData.tested}</h3>
                                    <Card.Text>
                                        [Today:{this.state.todayData.tested}]
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <DistrictData />
                </div>
            </div>
        )
    }
}