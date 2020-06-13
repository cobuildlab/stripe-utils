import Stripe from 'stripe';

let _client: Stripe | null = null;

export const init = (apiToken: string, config?: Stripe.StripeConfig): void => {
  const settings: Stripe.StripeConfig = config || {
    apiVersion: '2020-03-02',
  };
  _client = new Stripe(apiToken, settings);
};

export const withStripe = (fn: Function) => {
  if (!_client) {
    throw Error(
      'Stripe instance not initialized, please execute "init" function first',
    );
  }
  return fn(_client);
};
