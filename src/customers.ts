import Stripe from 'stripe';
import { withStripe } from './init';
const { log, error } = require('@cobuildlab/pure-logger');

export const createCustomer = withStripe((paymentMethodId: string, companyName: string, email: string) => {
  return async (stripe: Stripe) => {
    const customerData: Stripe.CustomerCreateParams = { 
      email,
      address: { line1: companyName }
    };
  
    if (paymentMethodId) {
      customerData.payment_method = paymentMethodId;
      customerData.invoice_settings = { default_payment_method: paymentMethodId };
    }
  
    log('createCustomer data', customerData);
  
    let customer: Stripe.Customer;
  
    try {
      customer = await stripe.customers.create(customerData);
    } catch (e) {
      error('Create customer error', e);
  
      throw e;
    }
  
    log('createCustomer success', customer);
  
    return customer;
  }
})