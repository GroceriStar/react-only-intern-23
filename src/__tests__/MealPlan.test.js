import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MealPlan } from '../component/MealPlanner/MealPlan';

Enzyme.configure({ adapter: new Adapter() });

describe('<MealPlan />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MealPlan />, div);
    });
});