import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  test('<App />', () => {
    const app = shallow(<App title="Welcome to React" />);
    expect(app.find('h1').children().text()).toBe('Welcome to React');
  });
});
