import Stripe from 'stripe';

let _client: Stripe | null = null;


export const init = (apiToken: string, config: Stripe.StripeConfig) => {
  _client = new Stripe(apiToken, config);
};


export const withStripe = (fn: Function) => {
  if (!_client) {
    throw Error('Stripe instance not initialized, please execute "init" function first');
  }
  return fn(_client); 
};