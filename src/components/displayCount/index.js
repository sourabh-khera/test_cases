import React, {Component} from 'react';
import Button from '../button';
import './style.css';

class DisplayCount extends Component {
 
  constructor(props){
    super();
    this.state = {
      count: 0,
      name: '',
    };
  }

  incrementCount = () => {
   let { count } = this.state;
   this.setState({count: count+=1});
  }
 
  handleChange = (e) => {
    this.setState({name: e.target.value});
  }
  render(){
    const { count, name } = this.state;
    return(
      <div className='count-container' data-test='countComponent'>
        <div className='display-count'>{count}</div>
        <div className='button-wrapper'>{<Button handleClick={this.incrementCount}/>}</div>
        <input className='name-input' type='text' value={name} name='name' onChange={this.handleChange}/>
      </div>
    )
  }
}

export default DisplayCount;