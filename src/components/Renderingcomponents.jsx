import React, { Component } from 'react'

export class RenderingComponent extends Component {

  constructor (props){
    super(props)

    //intially the text is condition and the button show is true ie present
    this.state={
      text : "hi, i am gonna hide now",
      show :true,
    }
  }

  changeShow(){
    this.setState({
      show: !this.state.show,
      text: "you found me boo"
    })
  }
  render() {
    return (

      <>
        <br></br>
        {this.state.show && this.state.text}
        <button onClick={() => this.changeShow()} >{this.state.show  ? 'Hide': 'show'}</button>
      </>
      

      
    )
  }
}

export default RenderingComponent