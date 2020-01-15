import React, { Component } from 'react';

class ErrorBoundary extends Component{

  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error){
    return {
      hasError: true,
    }
  }

 componentDidCatch(error, errorInfo){
   this.setState({error, errorInfo}, ()=>{console.log(this.state.error.toString())});
 } 
  render(){ 
    const renderComponent = this.state.hasError ? (
      <div>Something went wrong !</div>
    ) : (
      this.props.children
    );

    return renderComponent;
  }
}

export default ErrorBoundary;