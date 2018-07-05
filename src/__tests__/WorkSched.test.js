import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WorkSched } from '../component/WorkSchedule/WorkSched';

Enzyme.configure({ adapter: new Adapter() });

describe('<WorkSched />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WorkSched />, div);
    });
});