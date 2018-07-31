import React, { Component } from 'react';
import data from '@groceristar/groceristar-fetch/chickenKyiv';

class RecipeTest extends Component {
	constructor(props) {
	    super(props);
	    console.log(data.getRecipe())
    }

    render() {
        return(
            <div>
            
            </div>
        );
    }
}

export { RecipeTest }