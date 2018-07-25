import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../Modals/AddMealModal';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddMealModal />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddMealModal />, div);
    });
});