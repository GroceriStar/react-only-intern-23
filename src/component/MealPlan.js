import React, { Component } from 'react';

let styling = {
    padding: '40px'
}

class MealPlan extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            meal: '',
            meals: [],
            imgURL: '',
            images: []
        };
        this.renderMeals = this.renderMeals.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }
    
    renderMeals() {
        return (this.state.meals.map((meal, index) => {return <li style={styling} key={index}>{meal}<img style={styling} key={index} src={this.state.images[index]} alt="Didn't Load" /></li>}));
    }
    
    changeHandle(event) {
                this.setState({
                meal: event.target.value
                });                
    }
    
    handleClick() {
        this.setState({
            meals: [...this.state.meals, this.state.meal],
            images: [...this.state.images, this.state.imgURL]
        });
    }
    
    handleImage(event) {
        this.setState({
            imgURL: event.target.value
        });
    }
    
    render() {
        return(
        <div>
            <h2>Today you should eat this</h2>
            <input onChange={this.changeHandle} value={this.state.meal} type='text' placeholder='Meal name here' />
           
            <button onClick={this.handleClick}>Add meal</button>
             <input type='text' onChange={this.handleImage} placeholder='Image URL here' />
            <ul>
                {this.renderMeals()}
            </ul>
        </div>
        );
    }
}

export { MealPlan }