import React , {Component} from 'react';

class Stateful extends Component {
    state = {
        count: 0
    }

    actualizarEstado=()=> {
        this.setState({
            count: this.state.count +1
        })
    }
    render(){
        return (
        <div>
            <h1>{this.state.count}</h1>
            <button type="button" onClick={this.actualizarEstado}>Click</button>
        </div>
        )
    }
}

export default Stateful;