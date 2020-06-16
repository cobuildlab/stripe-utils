import { test, expect, describe } from '@jest/globals';
import Stripe from 'stripe';
import * as stripe from '../init';

describe('Initialization', () => {
  test('Throws error with not initialization', () => {
    const func = stripe.withStripe((stripe: Stripe) => stripe);


    expect(func).toThrowError('Stripe instance not initialized, please execute "init" function first');
  });

  test('Injects stripe object', async () => {
    // this api key is not real
    const testKey = 'sk_test_s982HH7vmGNQ5i4Fbtx5kOom00LBGWlBs0';

    stripe.init(testKey);

    const func = stripe.withStripe((stripe: Stripe) => stripe);

    expect(func()).toHaveProperty(
      '_api.auth',
      `Bearer ${testKey}`,
    );
  });
});
