import Stripe from 'stripe';

let _client: Stripe | null = null;

/**
 * Initializes the stripe object
 * 
 * @param {string} apiToken - The stripe secret api token
 * @param {Stripe.StripeConfig} config -Stripe config object
 * 
 * @returns {void}
 */
export const init = (apiToken: string, config?: Stripe.StripeConfig): void => {
  const settings: Stripe.StripeConfig = config || {
    apiVersion: '2020-03-02',
  };
  _client = new Stripe(apiToken, settings);
};

/**
 * Injects the stripe object into a function
 * 
 * @param {Function} func - The function to decorate
 * 
 * @returns {Function} The decorated function
 */
export function withStripe <T extends (...args: any[]) => (arg: Stripe) => any> (func: T): (...funcArgs: Parameters<T>) => ReturnType<(arg: Stripe) => any> {
  return  (...args: Parameters<T>): ReturnType<T> => {
    if (!_client) {
      throw new Error(
        'Stripe instance not initialized, please execute "init" function first'
      );
    }

    return func(...args)(_client);
  }
};
