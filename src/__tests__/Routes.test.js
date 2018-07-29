import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AppRoute } from '../component/Route/Routes';

Enzyme.configure({ adapter: new Adapter() });

describe('<AppRoute />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AppRoute />, div);
    });
});