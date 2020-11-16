import React from 'react'
import axios from 'axios'

export default class Kerala extends React.Component{
    constructor(){
        super()
        this.state={
            keralaData:[]
        }
    }

    UNSAFE_componentWillMount(){
        axios.get("https://api.covid19india.org/misc.json").then((response)=>{
            let totalData=response.data.district_meta_data
            let stateData=[]
            totalData.map((item,key)=>{
                if(item.state==="Kerala"){
                    stateData.push(item)
                }
            })
            this.setState({keralaData:stateData})
            console.log(this.state.keralaData);
        })
    }

    render(){
        return(
            <div>
                hello
            </div>
        )
    }
}