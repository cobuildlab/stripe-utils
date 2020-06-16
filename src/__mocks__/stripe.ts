import { jest } from '@jest/globals';
import Stripe from 'stripe';
import {
  customer,
  subscription
} from '../data';

type StripeMock = {
  customers: {
    create: () => any
  },
  subscriptions: {
    create: () => any
  },
  _api: {
    auth: string
  }
}

export const mockCreateCustomer: any = jest.fn(() => customer);

export const mockCreateSubscription: any = jest.fn(() => subscription);

const mock: any = jest.fn<
  StripeMock, 
  Parameters<(k: string, c?: Stripe.StripeConfig) => void>
>().mockImplementation((secretKey) => {
  return {
    customers: {
      create: mockCreateCustomer
    },
    subscriptions: {
      create: mockCreateSubscription
    },
    _api: {
      auth: `Bearer ${secretKey}`
    }
  }
});

export default mock;