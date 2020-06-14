import { jest } from '@jest/globals';
import Stripe from 'stripe';
import {
  customer
} from '../data';

type StripeMock = {
  customers: {
    create: () => any
  },
  _api: {
    auth: string
  }
}

export const mockCreateCustomer: any = jest.fn(() => customer);

const mock: any = jest.fn<
  StripeMock, 
  Parameters<(k: string, c?: Stripe.StripeConfig) => void>
>().mockImplementation((secretKey) => {
  return {
    customers: {
      create: mockCreateCustomer
    },
    _api: {
      auth: `Bearer ${secretKey}`
    }
  }
});

export default mock;