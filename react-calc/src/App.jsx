import React, { Component } from 'react';
// import propTypes from 'prop-types';

class App extends Component {

    state = {
        operationType: 'addition',
        leftOperand: '',
        rightOperand: '',
        result: ''
    }

    handleLeftOperand = (evt) => {
        this.setState({
            leftOperand: evt.target.value
        })
    }

    handleRightOperand = (evt) => {
        this.setState({
            rightOperand: evt.target.value
        })
    }

    handleChangeOperations = (evt) => {
        this.setState({
            operationType: evt.target.value
        })
    }

    ToCosoleResult = () => {
        if (this.state.operationType === 'addition') {
            this.setState({
                result: parseInt(this.state.leftOperand) + parseInt(this.state.rightOperand)
            })
        } else if (this.state.operationType === 'subtraction') {
            this.setState({
                result: parseInt(this.state.leftOperand) - parseInt(this.state.rightOperand)
            })
        } else if (this.state.operationType === 'multiply') {
            this.setState({
                result: parseInt(this.state.leftOperand) * parseInt(this.state.rightOperand)
            })
        } else {
            this.setState({
                result: parseInt(this.state.leftOperand) / parseInt(this.state.rightOperand)
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="inputs__values">
                    <input type="text" onChange={this.handleLeftOperand} required placeholder="left operand"/>
                    <select placeholder="operation" onChange={this.handleChangeOperations}>
                        <option value="addition">+</option>
                        <option value="subtraction">-</option>
                        <option value="multiply">*</option>
                        <option value="division">/</option>
                    </select>
                    <input type="text" onChange={this.handleRightOperand} placeholder="right operand"/>
                    <span><button onClick={this.ToCosoleResult}>=</button></span>
                    <input type="text" value={this.state.result} placeholder="result"/>
                </div>
            </div>
        )
    }
}

// App.propTypes = {
//     leftOperand: propTypes.number.isRequired,
//     rightOperand: propTypes.number.isRequired
// }

export default App;