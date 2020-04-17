import React from 'react';
import { shallow } from 'enzyme';

import SVG from '..';

describe('SVG component', () => {
  let wrapper;
  let renderProps;

  beforeEach(() => {
    renderProps = {
      children: 'svg',
    };
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render a svg', () => {
    wrapper = shallow(<SVG {...renderProps} />);
    expect(wrapper.find('svg').props()).toMatchObject({
      fill: 'currentColor',
      width: '100%',
      height: '100%',
      preserveAspectRatio: 'xMidYMid',
      style: {
        display: 'flex',
        margin: 'auto',
        fill: 'currentColor',
        height: '100%',
        stroke: 'none',
        verticalAlign: 'middle',
        width: '100%',
      },
    });
  });

  it('should set the style on the svg', () => {
    renderProps.stroke = 'green';
    renderProps.width = '40px';
    renderProps.height = '20px';
    wrapper = shallow(<SVG {...renderProps} />);
    expect(wrapper.find('svg').props()).toMatchObject({
      fill: 'currentColor',
      width: renderProps.width,
      height: renderProps.height,
      preserveAspectRatio: 'xMidYMid',
      style: {
        display: 'flex',
        margin: 'auto',
        fill: 'currentColor',
        width: renderProps.width,
        height: renderProps.height,
        stroke: renderProps.stroke,
        verticalAlign: 'middle',
      },
    });
  });

  it('should set size ratio to be 1:1 width:height on svg if size is passed as prop', () => {
    renderProps.size = '80px';
    wrapper = shallow(<SVG {...renderProps} />);
    expect(wrapper.find('svg').props()).toMatchObject({
      fill: 'currentColor',
      width: renderProps.size,
      height: renderProps.size,
      preserveAspectRatio: 'xMidYMid',
      style: {
        display: 'flex',
        margin: 'auto',
        fill: 'currentColor',
        height: renderProps.size,
        stroke: 'none',
        verticalAlign: 'middle',
        width: renderProps.size,
      },
    });
  });

  it('should append the given className prop', () => {
    renderProps.className = 'some-class';
    wrapper = shallow(<SVG {...renderProps} />);
    expect(wrapper.prop('className')).toContain(renderProps.className);
  });
});
