# stripe-payment-request-button

<!-- Auto Generated Below -->


## Properties

| Property                      | Attribute          | Description                                                                         | Type                                                                           | Default                 |
| ----------------------------- | ------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------- |
| `applicationName`             | `application-name` | Overwrite the application name that registered For wrapper library (like Capacitor) | `string`                                                                       | `'stripe-pwa-elements'` |
| `paymentMethodEventHandler`   | --                 | Set handler of the `paymentRequest.on('paymentmethod'` event.                       | `(event: PaymentRequestPaymentMethodEvent, stripe: Stripe) => Promise<void>`   | `undefined`             |
| `publishableKey`              | `publishable-key`  | Your Stripe publishable API key.                                                    | `string`                                                                       | `undefined`             |
| `shippingAddressEventHandler` | --                 | Set handler of the `paymentRequest.on('shippingaddresschange')` event               | `(event: PaymentRequestShippingAddressEvent, stripe: Stripe) => Promise<void>` | `undefined`             |
| `shippingOptionEventHandler`  | --                 | Set handler of the `paymentRequest.on('shippingoptionchange')` event                | `(event: PaymentRequestShippingOptionEvent, stripe: Stripe) => Promise<void>`  | `undefined`             |
| `stripeAccount`               | `stripe-account`   | Optional. Making API calls for connected accounts                                   | `string`                                                                       | `undefined`             |
| `stripeDidLoaded`             | --                 | Stripe.js class loaded handler                                                      | `(event: StripeLoadedEvent) => Promise<void>`                                  | `undefined`             |


## Events

| Event          | Description                | Type                               |
| -------------- | -------------------------- | ---------------------------------- |
| `stripeLoaded` | Stripe Client loaded event | `CustomEvent<{ stripe: Stripe; }>` |


## Methods

### `initStripe(publishableKey: string, options?: { showButton?: boolean; stripeAccount?: string; }) => Promise<void>`

Get Stripe.js, and initialize elements

#### Returns

Type: `Promise<void>`



### `isAvailable(type: 'applePay' | 'googlePay') => Promise<void>`

Check isAvailable ApplePay or GooglePay.
If you run this method, you should run before initStripe.

#### Returns

Type: `Promise<void>`



### `setPaymentMethodEventHandler(handler: PaymentRequestPaymentMethodEventHandler) => Promise<void>`

Register event handler for `paymentRequest.on('paymentmethod'` event.

#### Returns

Type: `Promise<void>`



### `setPaymentRequestOption(option: PaymentRequestOptions) => Promise<this>`



#### Returns

Type: `Promise<this>`



### `setPaymentRequestShippingAddressEventHandler(handler: PaymentRequestShippingAddressEventHandler) => Promise<void>`

Register event handler for `paymentRequest.on('shippingaddresschange'` event.

#### Returns

Type: `Promise<void>`



### `setPaymentRequestShippingOptionEventHandler(handler: PaymentRequestShippingOptionEventHandler) => Promise<void>`

Register event handler for `paymentRequest.on('shippingoptionchange'` event.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [stripe-payment](../stripe-payment-sheet)

### Graph
```mermaid
graph TD;
  stripe-payment --> stripe-payment-request-button
  style stripe-payment-request-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
