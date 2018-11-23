import React, { Component } from 'react';
import DateOutput from './DateOutput';
import TimeOutput from './TimeOutput';
import Switch from 'react-toggle-switch';


class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            time: '',
            date: '',
            switched: false
        }
    }
    componentWillMount(){
     
       setInterval(()=>{
        let newdate= new Date();
        this.setState({
            date: newdate.getDate()+'-'+(newdate.getMonth()+1)+'-'+newdate.getFullYear(),
            time: newdate.getHours()+':'+newdate.getMinutes()+':'+newdate.getSeconds(),
        }),1000
       })
       ;
        
       
    }
    toggleSwitch = ()=>{
        this.setState((previousState)=>{
            return {
              switched:  !previousState.switched,
            }
        });
    }
  render() {
    return (
      <div className="clock">
      
      <DateOutput date ={this.state.date}/>
      <TimeOutput time = {this.state.time}/>
      </div>
    );
  }
}

export default Clock;
