import Stripe from 'stripe';
import { withStripe } from './init';
import { createCustomer } from './customers';
const { log, error } = require('@cobuildlab/pure-logger');

/**
 * Create a stripe subscription for a company.
 *
 * @param {Stripe} stripe - The stripe object
 * @param {string} customerId - The Customer id.
 * @param {string} planId - The Plan id.
 * 
 * @returns {Promise<Stripe.Subscription>} The created subsctription object.
 */
export const createSubscription = withStripe(async (stripe: Stripe, customerId: string, planId: string): Promise<Stripe.Subscription> => {
  const subscriptionData: Stripe.SubscriptionCreateParams = {
    customer: customerId,
    items: [{ plan: planId }],
  };

  log('createSubscription data', JSON.stringify(subscriptionData, null, 2));

  let subscription = null;

  try {
  
    subscription = await stripe.subscriptions.create(subscriptionData);
  
  } catch (e) {
  
    error('createSubscription Error: ', JSON.stringify(e, null, 2));

    throw e;
  }

  return subscription;
});

/**
 * Creates a stripe customer & subscription for a company.
 *
 * @param {string} stripePaymentMethodId - Stripe payment method id.
 * @param {string} stripePlanId - Stripe Plan id.
 * @param {string} companyName - The company name.
 * @param {string} email - User email.
 * 
 * @returns {Promise} The subscription. // Can throw and Error //.
 */
export const createCustomerAndSubscription = async (
  stripePaymentMethodId: string,
  stripePlanId: string,
  companyName: string,
  email: string,
) => {

  const { id: customerId } = await createCustomer(stripePaymentMethodId, companyName, email);

  const subscription = await createSubscription(customerId, stripePlanId);

  return subscription;
};
