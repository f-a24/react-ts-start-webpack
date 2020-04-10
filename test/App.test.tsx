import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';
import 'jest-styled-components';

describe('App', () => {
  test('<App />', () => {
    const app = shallow(<App title="Welcome to React" />);
    expect(app.text()).toBe('Welcome to React');
    expect(app).toHaveStyleRule('color', 'aqua');
  });
});
