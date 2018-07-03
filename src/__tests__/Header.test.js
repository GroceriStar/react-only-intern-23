import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../component/Header/Header';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
    shallow(<Header/>);
});