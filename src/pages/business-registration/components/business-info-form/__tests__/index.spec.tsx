import React from 'react';
import { FormikProps } from 'formik';
import { Button } from '@material-ui/core';
import { shallow } from 'enzyme';

import BusinessInfoForm, { Values } from '..';

describe('BusinessInfoForm component', () => {
  const renderProps = {};
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a name text field', () => {
      wrapper = shallow(<BusinessInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(0).props()).toMatchObject({
        name: 'name',
        type: 'text',
      });
    });

    it('should render a postcode text field', () => {
      wrapper = shallow(<BusinessInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(1).props()).toMatchObject({
        name: 'postcode',
        type: 'text',
      });
    });

    it('should render offerType checkbox group field', () => {
      wrapper = shallow(<BusinessInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(2).props()).toMatchObject({
        name: 'offerType',
        type: 'checkboxGroup',
        options: [
          { label: 'Takeaway', value: 'takeaway' },
          { label: 'Delivery', value: 'delivery' },
          { label: 'Pantry', value: 'pantry' },
        ],
      });
    });

    it('should render cuisineType checkbox group field', () => {
      wrapper = shallow(<BusinessInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(3).props()).toMatchObject({
        name: 'cuisineType',
        type: 'checkboxGroup',
        options: [
          { label: 'African', value: 'african' },
          { label: 'American', value: 'american' },
          { label: 'Argentinian', value: 'argentinian' },
          { label: 'Asian', value: 'asian' },
          { label: 'Fusion', value: 'fusion' },
          { label: 'British', value: 'british' },
          { label: 'Caribbean', value: 'caribbean' },
          { label: 'Chinese', value: 'chinese' },
          { label: 'Ethiopian', value: 'ethiopian' },
          { label: 'European', value: 'european' },
          { label: 'French', value: 'french' },
          { label: 'Greek', value: 'greek' },
          { label: 'Indian', value: 'indian' },
          { label: 'International', value: 'international' },
          { label: 'Italian', value: 'italian' },
          { label: 'Jamaican', value: 'jamaican' },
          { label: 'Japanese', value: 'japanese' },
          { label: 'Korean', value: 'korean' },
          { label: 'Lebanese', value: 'lebanese' },
          { label: 'Malaysian', value: 'malaysian' },
          { label: 'Mediterranean', value: 'mediterranean' },
          { label: 'Mexican', value: 'mexican' },
          { label: 'Middle Eastern', value: 'middle-eastern' },
          { label: 'Pan Asian', value: 'pan-asian' },
          { label: 'Portuguese', value: 'portuguese' },
          { label: 'South American', value: 'south-american' },
          { label: 'Spanish', value: 'spanish' },
          { label: 'Taiwanese', value: 'taiwanese' },
          { label: 'Thai', value: 'thai' },
          { label: 'Turkish', value: 'turkish' },
          { label: 'Vietnamese', value: 'vietnamese' },
          { label: 'Western', value: 'western' },
          { label: 'Other', value: 'other' },
        ],
      });
    });

    it('should render a submit button', () => {
      wrapper = shallow(<BusinessInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find(Button).props()).toMatchObject({
        type: 'submit',
      });
    });
  });
});
