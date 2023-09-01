import React, { Component } from 'react'

export class DesignComponents extends Component {
  constructor(props){
    super(props)
    this.state={
        btnStyle:{
            width:'200px',
            height:'25px',
            border:" 2px solid green",
            borderRadius:"5px",
            fontsize:'12px'
        }
    }

  }
  render() {
    return (
        <>
            <button>without css</button>
            <button style={this.state.style}>with css</button>
            <button>with css</button>
        </>
      
    )
  }
}

export default DesignComponents