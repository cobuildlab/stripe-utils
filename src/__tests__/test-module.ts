import { test, expect, describe } from '@jest/globals';
import * as stripe from '../init';

describe('Stripe test', () => {
  test('init test', () => {
    // this api key is not real
    const testKey = 'sk_test_s982HH7vmGNQ5i4Fbtx5kOom00LBGWlBs0';

    stripe.init(testKey);

    expect(stripe.withStripe((e: any) => e)).toHaveProperty(
      '_api.auth',
      `Bearer ${testKey}`,
    );
  });
});
