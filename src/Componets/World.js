//import {} from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default class World extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    UNSAFE_componentWillMount() {
        axios.get("https://corona.lmao.ninja/v2/countries").then((response) => {
            this.setState({ data: response.data })
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Total Cases</th>
                                <th>Active Cases</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item, key) => {
                                    return (
                                        <tr>
                                            <td><img src={item.countryInfo.flag} className="mr-1" style={{width:"1.5rem"}}/>
                                                {item.country}</td>
                                            <td>{item.cases}</td>
                                            <td>{item.active}</td>
                                            <td>{item.recovered}</td>
                                            <td>{item.deaths}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}