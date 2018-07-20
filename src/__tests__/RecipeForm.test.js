import React from 'react';
import ReactDOM from 'react-dom';
import { Recipe } from '../component/Recipe/RecipeForm';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
    shallow(<Recipe/>);
});