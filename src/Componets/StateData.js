import { Accordion, Card, Button } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default class StateData extends React.Component {
    constructor() {
        super()
        this.state = {
            stateData: {}
        }
    }

    UNSAFE_componentWillMount() {
        axios.get("https://api.covid19india.org/state_district_wise.json").then((response) => {
            this.setState({ stateData: response.data })
        })
    }

    render() {
        let keys = Object.keys(this.state.stateData)
        return (
            <div className="row">
                <div className="col-md-12">
                    <Accordion>
                        {
                            keys.map((item, key) => {
                                let districts = this.state.stateData[item].districtData
                                //let districtKey = Object.keys(districts)
                                let totalActive = 0
                                let totalConfirmed = 0
                                let totalRecovered = 0
                                let totalDeaths = 0
                                let districtList = []

                                for (let x in districts) {
                                    //x++
                                    totalActive += districts[x].active
                                    totalConfirmed += districts[x].confirmed
                                    totalDeaths += districts[x].deceased
                                    totalRecovered += districts[x].recovered
                                    let ob = districts[x]
                                    ob["districtName"] = x
                                    districtList.push(ob)
                                }
                                return (
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="" eventKey={key}>
                                                {item}
                                            </Accordion.Toggle>
                                            <div className="row float-right">
                                                <span className="col-lg col-md col-sm-12 float-right btn btn-dark m-2">Total:{totalConfirmed}</span>
                                                <span className="col-lg col-md col-sm-12 float-right btn btn-dark m-2">Active:{totalActive}</span>
                                                <span className="col-lg col-md col-sm-12 float-right btn btn-dark m-2">Recovered:{totalRecovered}</span>
                                                <span className="col-lg col-md col-sm-12 float-right btn btn-dark m-2">Deaths:{totalDeaths}</span>
                                            </div>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={key}>
                                            <Card.Body>
                                                <div className="table-responsive-md">
                                                    <table className="table table-bordered table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>District</th>
                                                                <th>Confirmed Cases</th>
                                                                <th>Active</th>
                                                                <th>Recovered</th>
                                                                <th>Deaths</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                districtList.map((item, key) => {
                                                                    return (
                                                                        <tr>
                                                                            <td>{item.districtName}</td>
                                                                            <td>{item.confirmed}</td>
                                                                            <td>{item.active}</td>
                                                                            <td>{item.recovered}</td>
                                                                            <td>{item.deceased}</td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        )
    }
}