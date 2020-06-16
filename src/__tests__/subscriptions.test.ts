import { test, expect, describe } from '@jest/globals';
import mockStripe, { mockCreateSubscription, mockCreateCustomer } from '../__mocks__/stripe';
import { subscription } from '../data';
import * as stripe from '../index';

// Fake api secret key
const secretKey = 'sk_test_s982HH7vmGNQ5i4Fbtx5kOom00LBGWlBs0';

describe('Subscription functions', () => {
  test('createSubscription', async () => {
    stripe.init(secretKey);

    expect(mockStripe).toHaveBeenCalledTimes(1);

    const result = await stripe.createSubscription('paymentMethodId', 'companyName');

    expect(mockCreateSubscription).toHaveBeenCalledTimes(1);

    expect(result).toEqual(subscription);
  });
  
  test('createCustomerAndSubscription', async () => {
    const result = await stripe.createCustomerAndSubscription('paymentMethodId', 'stripePlanId', 'companyName', 'email');

    expect(mockCreateCustomer).toHaveBeenCalledTimes(1);
    expect(mockCreateSubscription).toHaveBeenCalledTimes(2);

    expect(result).toEqual(subscription);
  });
})