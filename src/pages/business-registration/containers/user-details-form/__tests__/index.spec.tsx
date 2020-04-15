import React from 'react';
import { Formik } from 'formik';
import { mount } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useStore } from '@store';
import UserDetailsForm from '..';

jest.mock('@store', () => ({
  useStore: jest.fn(),
}));

describe('UserDetailsForm container', () => {
  let wrapper;
  let renderProps;
  let trade;
  const mockedUseStore = mocked(useStore);

  beforeEach(() => {
    renderProps = {
      goToNextStep: jest.fn(),
    };
    trade = {
      register: {
        userDetails: {
          firstName: 'John',
          lastName: 'Smith',
          role: 'owner',
          phone: '07545673466',
        },
      },
    };
    mockedUseStore.mockClear();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a UserDetailsForm component', () => {
      mockedUseStore.mockReturnValue({ trade });
      wrapper = mount(<UserDetailsForm {...renderProps} />);
      expect(wrapper.find('UserDetailsForm').length).toEqual(1);
    });
  });

  describe('form', () => {
    describe('initial values', () => {
      it('should set the initial values from the store', () => {
        mockedUseStore.mockReturnValue({ trade });
        wrapper = mount(<UserDetailsForm {...renderProps} />);
        const props = wrapper.find(Formik).props() as any;
        expect(props.initialValues).toMatchObject({
          firstName: trade.register.userDetails.firstName,
          lastName: trade.register.userDetails.lastName,
          role: trade.register.userDetails.role,
          phone: trade.register.userDetails.phone,
        });
      });
    });

    describe('submit', () => {
      it('should set store register user details props and call goToNextStep prop', () => {
        mockedUseStore.mockReturnValue({ trade });
        wrapper = mount(<UserDetailsForm {...renderProps} />);
        const props = wrapper.find(Formik).props() as any;
        const values = {
          firstName: 'Joe',
          lastName: 'Doe',
          role: 'manager',
          phone: '07456773478',
        };
        props.onSubmit(values);
        expect(trade.register.userDetails).toMatchObject(values);
        expect(renderProps.goToNextStep).toHaveBeenCalled();
      });
    });
  });
});
