import Stripe from 'stripe';
import { withStripe } from './init';

export const createCustomer = withStripe(async (stripe: Stripe, paymentMethodId: string, companyName: string, email: string) => {
  const customerData: Stripe.CustomerCreateParams = { 
    email,
    address: { line1: companyName }
  };

  if (paymentMethodId) {
    customerData.payment_method = paymentMethodId;
    customerData.invoice_settings = { default_payment_method: paymentMethodId };
  }


  let customer: Stripe.Customer;

  try {
    customer = await stripe.customers.create(customerData);
  } catch (e) {
    console.error('Create customer error', e);

    throw e;
  }

  return customer;
});