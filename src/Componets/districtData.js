import React from 'react'
import axios from 'axios'

export default class DistrictData extends React.Component{
   constructor(){
      super()
      this.state={
         data:[]
      }
   }

   async UNSAFE_componentWillMount(){
      let total={}
      await axios.get("https://api.covid19india.org/state_district_wise.json").then((response)=>{
            let totalData=response.data.Kerala.districtData
            let stateData=[]
            for(let x in totalData){
                stateData.push(totalData[x])
            }
            stateData.map((item,key)=>{
                total.active+=item.active
            })
            
        })
        axios.get("https://api.covid19india.org/v4/data.json").then((response)=>{
            //console.log(response.data.KL);
            let tData=response.data.KL.total
            if(response.data.KL.delta){
                this.setState({todayData:response.data.KL.delta})
            }
            total.confirmed=tData.confirmed
            total.deceased=tData.deceased
            total.recovered=tData.recovered
            total.tested=tData.tested
            this.setState({totalData:total})
        })
   }

   render(){
      return(
         <div className="container">
         <div className="row">
             <div className="col-md-12">
                 <table className="table table-bordered table-striped" >
                     <tbody>
                         {
                             this.state.data.map((item, key) => {
                                 return (
                                     <tr>
                                         <th><img src={item.countryInfo.flag} className="mr-1" style={{ width: "1.5rem" }} />
                                             {item.country}
                                             <div className="row float-right">
                                                 <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Total:{item.cases}</span>
                                                 <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Active:{item.active}</span>
                                                 <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Recovered:{item.recovered}</span>
                                                 <span className="col-lg col-sm-12 col-md float-right btn btn-dark m-2">Deaths:{item.deaths}</span>
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