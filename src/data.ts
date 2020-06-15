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

export const subscription = {
  id: "sub_HShuBFk4JUlAxB",
  object: "subscription",
  application_fee_percent: null,
  billing_cycle_anchor: 1592105228,
  billing_thresholds: null,
  cancel_at: null,
  cancel_at_period_end: false,
  canceled_at: null,
  collection_method: "charge_automatically",
  created: 1592105228,
  current_period_end: 1594697228,
  current_period_start: 1592105228,
  customer: "cus_HSjXVoIShZACUg",
  days_until_due: null,
  default_payment_method: null,
  default_source: null,
  default_tax_rates: [],
}