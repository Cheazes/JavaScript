
import React from 'react';
import './App.css';
import Content from './components/Content';

const colors =['red','green','blue','yellow']
class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       largeColor: ''
    }
  }

  changeColor = color => {
    this.setState({largeColor : color});
  }
render () {
  if(this.state.largeColor) {
    return(
    <div className='wrapper large'>
      <Content changeColor = {this.changeColor} size='large'/>
    </div>
);
}else{
  return (
    <div className='wrapper large'>
      {colors.map(c=><Content changeColor = {this.changeColor} key={c} color={c} size='small'/>)}
      
    </div>
  );
}
}
}
export default App;
