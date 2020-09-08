import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtrr } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    const wraper = findByTestAtrr(component, "headerComponent");
    expect(wraper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = findByTestAtrr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
