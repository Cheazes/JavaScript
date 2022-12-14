

import React from 'react'


class Form extends React.Component {
constructor(props) {
  super(props)

  this.state = {
     city: ''
  }
}
  /*constructor (props){
    super(props);
    this.state = {
      city:'My city',
      temp:0
    

    }
  }
  */

 handleClick = () =>{
   
   this.props.getWeather(this.state.city);
   this.setState({city:'' });
  }
  handleChange = e =>{
    this.setState({city: e.target.value})
  }
   
  
    render() {
      return (
        <div> 
            <input onChange ={this.handleChange} 
            type='text'
            placeholder='City' 
            value ={this.state.city}/>
            <button onClick={this.handleClick} >Get weather</button>
            </div>
    )
    }
  
}

export default Form;