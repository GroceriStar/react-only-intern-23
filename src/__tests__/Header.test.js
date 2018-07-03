import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../component/Header/Header';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
    shallow(<Header/>);
});