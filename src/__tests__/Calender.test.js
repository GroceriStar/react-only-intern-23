import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Calendar } from '../component/Calendar/Calendar';

Enzyme.configure({ adapter: new Adapter() });

describe('<Calendar />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Calendar />, div);
    });
});