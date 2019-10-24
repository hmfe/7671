import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LoadingSpinner from '../components/LoadingSpinner';


Enzyme.configure({adapter: new Adapter()});
// simple test
// in production should be more tests that cover all components,
// more functionality, mock apis, button clicks, etc..
// For TDD most of the tests should be ready before component development

const setup = (propOverrides) => {
  const props = Object.assign({
    loading: true,
  }, propOverrides);

  const wrapper = mount(<LoadingSpinner {...props} />);
  return {
    props,
    wrapper,
  };
};


describe('<LoadingSpinner />', () => {
  test('<LoadingSpinner> displayed when loading prop equals true', () => {
    const {wrapper} = setup();
    expect(wrapper.html()).toBeTruthy();
  });

  it('<LoadingSpinner> not displayed when loading prop equals false', () => {
    const {wrapper} = setup({loading: false});
    expect(wrapper.html()).toBeNull();
  });

  it('<LoadingSpinner> mathced with the once that were passed', () => {
    const {wrapper, props} = setup();
    expect(wrapper.props()).toEqual(props);
  });
});

