import { test, expect, describe } from '@jest/globals';
import mockStripe, { mockCreateCustomer } from '../__mocks__/stripe';
import { customer } from '../data';
import * as stripe from '../index';

// Fake api secret key
const secretKey = 'sk_test_s982HH7vmGNQ5i4Fbtx5kOom00LBGWlBs0';

describe('Customer functions', () => {
  test('createCustomer', async () => {
    stripe.init(secretKey);

    expect(mockStripe).toHaveBeenCalledTimes(1);

    const result = await stripe.createCustomer('paymentMethodId', 'companyName', 'email');

    expect(mockCreateCustomer).toHaveBeenCalledTimes(1);

    expect(result).toEqual(customer);
  });
})