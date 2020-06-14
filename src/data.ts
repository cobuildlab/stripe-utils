import Stripe from 'stripe';

export const customer = {
  id: "cus_HAwLCi6nxPYcsl",
  object: "customer",
  address: null,
  balance: 0,
  created: 1588007418,
  currency: "usd",
  default_source: null,
  delinquent: false,
  description: "My First Test Customer",
  discount: null,
  email: null,
  invoice_prefix: "2D409C0",
  invoice_settings: {
    custom_fields: null,
    default_payment_method: null,
    footer: null
  },
  livemode: false,
  metadata: {},
  name: null,
  next_invoice_sequence: 1,
  phone: null,
  preferred_locales: [],
  shipping: null,
  sources: {
    object: "list",
    data: [],
    has_more: false,
    url: "/v1/customers/cus_HAwLCi6nxPYcsl/sources"
  },
  subscriptions: {
    object: "list",
    data: [],
    has_more: false,
    url: "/v1/customers/cus_HAwLCi6nxPYcsl/subscriptions"
  },
  tax_exempt: "none",
  tax_ids: {
    object: "list",
    data: [],
    has_more: false,
    url: "/v1/customers/cus_HAwLCi6nxPYcsl/tax_ids"
  }
}