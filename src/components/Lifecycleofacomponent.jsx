import React, { Component } from 'react'
export default class LifeCycle extends Component {

    //crreating a state
    constructor(props){
        console.log("Constructor called.")
        super(props)
        this.state = { name: "" }
    }

    //assigning the value to the state
    static getDerivedStateFromProps(props,state){
        console.log("State is updated with props")
        return{ name: props.name }
        return null
    }   
    componentDidMount(){ console.log("Mounted") }
    shouldComponentUpdate(){
        console.log("Component should update.")
        return true;
    }
    // summa having the log of the previous states
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Previous state and props")
        console.log(prevProps,prevState)
        return null
    }
    componentDidUpdate(){
        console.log("Component updated.")
    }
    clickEvent(){
        console.log("Click event")
        this.setState({
            name: "Update Lifecycle"
        })
    }
    render() {
    console.log("Render is updated.")
    return (
      <>
      <div>LifeCycle: {this.state.name}</div>
      <button onClick={() => this.clickEvent()}>update</button>
      </>
    )
    }
}