import React from 'react';
import { Formik } from 'formik';
import { mount } from 'enzyme';
import { useHistory } from 'react-router-dom';
import { mocked } from 'ts-jest/utils';
import { Action } from 'history';
import { Button } from '@material-ui/core';

import { useStore } from '@store';
import * as authServices from '@services/session';
import RegisterForm from '..';

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
}));

jest.mock('@store', () => ({
  useStore: jest.fn(),
}));

describe('RegisterForm container', () => {
  let trade;
  let session;
  const history = {
    push: jest.fn(),
    length: 2,
    action: 'PUSH' as Action,
    location: {
      pathname: '/path',
      search: '',
      hash: '#',
      state: {},
    },
    replace: jest.fn(),
    go: jest.fn(),
    goBack: jest.fn(),
    goForward: jest.fn(),
    block: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn(),
  };
  const mockedUseStore = mocked(useStore);
  const mockedUseHistory = mocked(useHistory);

  beforeEach(() => {
    trade = {
      register: {
        businessDetails: {
          name: 'PizzaHouse',
        },
      },
    };
    session = {
      token: 't123',
    };
    mockedUseStore.mockClear();
    mockedUseHistory.mockClear();
  });

  describe('render', () => {
    it('should render a RegisterForm component if session token value is truthy', () => {
      mockedUseStore.mockReturnValue({ trade, session });
      const wrapper = mount(<RegisterForm />);
      expect(wrapper.find('RegisterForm').length).toEqual(1);
    });

    it('should render a login button if session token value is falsy', () => {
      jest.spyOn(authServices, 'login').mockReturnValue(Promise.resolve());
      session.token = '';
      mockedUseStore.mockReturnValue({ trade, session });
      const wrapper = mount(<RegisterForm />);
      expect(wrapper.find('RegisterForm').length).toEqual(0);
      wrapper.find(Button).props().onClick({} as React.MouseEvent<HTMLButtonElement>);
      expect(authServices.login).toHaveBeenCalled();
    });
  });

  describe('form', () => {
    describe('initial values', () => {
      it('should set the initial values from the store', () => {
        mockedUseStore.mockReturnValue({ trade, session });
        const wrapper = mount(<RegisterForm />);
        const props = wrapper.find(Formik).props() as any;
        expect(props.initialValues).toMatchObject({
          businessName: trade.register.businessDetails.name,
        });
      });
    });

    describe('submit', () => {
      it('should set store name props and redirect to the registration path', () => {
        mockedUseHistory.mockReturnValue(history);
        mockedUseStore.mockReturnValue({ trade, session });
        const wrapper = mount(<RegisterForm />);
        const props = wrapper.find(Formik).props() as any;
        const values = { businessName: 'PizzaHouse' };
        props.onSubmit(values);
        expect(trade.register.businessDetails.name).toEqual(values.businessName);
        expect(history.push).toHaveBeenCalledWith('/register');
      });
    });
  });
});
