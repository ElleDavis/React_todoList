import React from 'react'

class StatusUpdate extends React.Component{

    state = {
        status: 'Make a Plan '
    };
    componentDidUpdate =()=> {
        console.log('Component Did Update');
    }
  updateStatus = ()=> {
      this.setState({status: 'Plan Made'});
    };
    
    render() {
        console.log('will this work');
        return(
            <div>
                <h1> Getting Things Done ✅</h1>
                <p>Status: {this.state.status} </p>
                <button onClick={this.updateStatus}> change status</button>
            </div>
        );
    }
}


export default StatusUpdate
