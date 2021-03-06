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
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered table-striped" >
                            <tbody>
                                {
                                    this.state.data.map((item, key) => {
                                        return (
                                            <tr>
                                                <th> 
                                                    <h3 className="text-center text-light"><img src={item.countryInfo.flag} className="m-1" style={{ width: "2.5rem" }}  alt=""/>
                                                    {item.country}</h3>
                                                    <div className="row float-right">
                                                        <span className="col-lg col-sm-12 col-md float-right btn btn-secondary m-2">Total:{item.cases}</span>
                                                        <span className="col-lg col-sm-12 col-md float-right btn btn-secondary m-2">Active:{item.active}</span>
                                                        <span className="col-lg col-sm-12 col-md float-right btn btn-secondary m-2">Recovered:{item.recovered}</span>
                                                        <span className="col-lg col-sm-12 col-md float-right btn btn-secondary m-2">Deaths:{item.deaths}</span>
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