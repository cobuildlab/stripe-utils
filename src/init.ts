import Stripe from 'stripe';

let _client: Stripe | null = null;

type OmitFirstArg<F> = F extends (x: any, ...args: infer P) => infer R ? (...args: P) => R : never;

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
 * Passes the stripe object into a function
 * 
 * @param {Function} func - The function to decorate
 * 
 * @returns {Function} The decorated function
 */
export function withStripe <T extends (stipe: Stripe, ...args: any[]) => any> (func: T): (...funcArgs: Parameters<OmitFirstArg<T>>) => ReturnType<T> {
  return (...args: Parameters<OmitFirstArg<T>>): ReturnType<T> => {
    if (!_client) {
      throw new Error(
        'Stripe instance not initialized, please execute "init" function first'
      );
    }

    return func(_client, ...args);
  }
};
