import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
class Car extends React.Component{
  constructor(){
    super();
    this.state={color:"Yellow"};
  }
  render(){
    return <h2>I am a {this.state.color}Car!</h2>
  }
}
createRoot(document.getElementById('root')).render(
 <Car />
)