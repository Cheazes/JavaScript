
import React from 'react';
import './App.css';
import {base_url} from './utils/constants';
class App extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      isLoading: true,
      name:''
    }
  }
  componentDidMount(){
 fetch(`${base_url}/v1/peoples/5`)
    .then(response => response.json())
    .then(data => this.setState({
      isLoading: false,
      name:data.name,
      imgUrl:`${base_url}/${data.image}`
    })) 
  }

  render(){
    if(this.state.isLoading){
      return(
      <div className=' spinner-border text-primary'></div>
      )
    }else {
  return (
    <div >
     <h1>Name:{this.state.name}</h1>
     <img src={this.state.imgUrl} alt={this.state.name}/>
    </div>
  );
}
}
}
export default App;
