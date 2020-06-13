import Stripe from 'stripe';
import {  withStripe } from './init';


const createCustomer = (stripe: Stripe) => {
  return (customerId: string) => {
    // do something
  };
};


export default withStripe(createCustomer);