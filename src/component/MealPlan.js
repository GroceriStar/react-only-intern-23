import React, { Component } from 'react';

class MealPlan extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            meal: '',
            meals: []
        };
        this.renderMeals = this.renderMeals.bind(this);
    }
    
    renderMeals() {
        return (this.state.meals.map((meal, index) => <li key={index}>{meal}</li>));
    }
    render() {
        return(
        <div>
            <h2>Today you should eat this</h2>
            <input onChange={e => this.setState({meal: e.target.value})} value={this.state.meal} type='text'/>
            <button onClick={() => this.setState({meals: [...this.state.meals, this.state.meal]})}>Add meal</button>
            <ul>
                {this.renderMeals()}
            </ul>
        </div>
        );
    }
}

export { MealPlan }