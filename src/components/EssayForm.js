import React, { Component } from 'react'

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Search'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clearData = this.clearData.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert(this.state.value + ' not found');
      event.preventDefault();
    }

    clearData() {
      this.setState({value: ''})
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Search" />
            

          </form>
          <button onClick={this.clearData}>Clear</button>
        </div>
        
        
      );
    }
  }

export default EssayForm
