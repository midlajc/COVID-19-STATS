import { Card } from 'react-bootstrap'
import React from 'react'
import StateData from './StateData'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default class India extends React.Component {
    constructor() {
        super()
        this.state = {
            indiaData: {}
        }
    }

    UNSAFE_componentWillMount() {
        axios.get("https://corona.lmao.ninja/v2/countries/india").then((response) => {
            this.setState({ indiaData: response.data })
        })
    }

    render() {
        return (
            <div className="row m-3">
                <div className="col-md-12">
                    <h3 className="text-center"><img src="https://www.countryflags.io/IN/shiny/64.png" alt=""/><br></br>INDIA</h3>
                </div>
                <div className="col-md-12">
                    <div className="row text-center">
                        <div className="col-md-4 col-sm-6 col-xl-3 p-2">
                            <Card className="badge badge-info" style={{ width: '15.23rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>{this.state.indiaData.cases}</h3>
                                    <Card.Text>
                                        [Today:{this.state.indiaData.todayCases}]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xl-3 p-2">
                            <Card className="badge badge-danger" style={{ width: '15.23rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <h3>{this.state.indiaData.active}</h3>
                                    <Card.Text>
                                    <br></br>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xl-3 p-2">
                            <Card className="badge badge-success" style={{ width: '15.23rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>{this.state.indiaData.recovered}</h3>
                                    <Card.Text>
                                        [Today:{this.state.indiaData.todayRecovered}]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xl-3 p-2">
                            <Card className="badge badge-dark" style={{ width: '15.23rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <h3>{this.state.indiaData.deaths}</h3>
                                    <Card.Text>
                                        [Today:{this.state.indiaData.todayDeaths}]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <StateData />
                </div>
            </div>
        )
    }
}