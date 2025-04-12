import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }
    increamentCounter = () =>{
        this.setState({count : this.state.count + 1})
    }

    componentDidMount(){
            
    }
    render(){
        return <div>
            <p>Counter is : {this.state.count} </p>
            <button onClick={this.increamentCounter} >Increament</button>
        </div>
    }
}



export default Counter;