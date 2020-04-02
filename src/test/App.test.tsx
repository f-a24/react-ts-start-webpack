import React from 'react';
import App from "../app/App";
import { shallow } from "enzyme";

describe("App", () => {
  test("<App />", () => {
    const app = shallow(<App title="Welcome to React" />);
    expect(app.find("h1").children().text()).toBe("Welcome to React");
  });
});
