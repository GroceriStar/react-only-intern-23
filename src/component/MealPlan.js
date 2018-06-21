import React, { Component } from 'react';

class MealPlan extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            meal: '',
            meals: []
        };
        this.renderMeals = this.renderMeals.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
    }
    
    renderMeals() {
        return (this.state.meals.map((meal, index) => <li key={index}>{meal}</li>));
    }
    
    changeHandle(event) {
                this.setState({
                meal: event.target.value
                });                
    }
    
    handleClick() {
        this.setState({
            meals: [...this.state.meals, this.state.meal]
        })
    }
    
    render() {
        return(
        <div>
            <h2>Today you should eat this</h2>
            <input onChange={this.changeHandle} value={this.state.meal} type='text'/>
            <button onClick={this.handleClick}>Add meal</button>
            <ul>
                {this.renderMeals()}
            </ul>
        </div>
        );
    }
}

export { MealPlan }