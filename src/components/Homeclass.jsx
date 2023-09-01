
import React,{Component}from "react";

export class Homeclass extends Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.name,
            work:this.props.work
        }
    }

    clickevent(){
        this.setState({
            name:"shruthi",
            work:"student"
        })
       
        console.log('clicked')
    }
    render(){
        //this.state.name='shruthi'
        //this.state.work='college student'
        return(
            <div>
                <button onClick={() =>{this.clickevent();}} variant="contained">about me</button>  
                <br></br>
                <b>name:{this.state.name}</b>
                <br></br>
                <b>work:{this.state.work}</b>

            </div>
        )
    }
}

export default Homeclass