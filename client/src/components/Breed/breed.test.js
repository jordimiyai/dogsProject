import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Breed from "./Breed";

configure({ adapter: new Adapter() });

describe("<Breed />", () => {
  let wrapper;
  let name;

  beforeEach(() => {
    name = "New Dog";
    wrapper = mount(<Breed name={name} />);
  });

  it('deberia renderizar un "div" que contenga el "title" que recibe por props', () => {
    expect(shallow((wrapper.contains(<h3>{name}</h3>)))).toEqual(true);
  });
});
