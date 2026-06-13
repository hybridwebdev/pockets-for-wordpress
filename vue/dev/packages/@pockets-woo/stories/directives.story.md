---
route: 'pockets-woo/directives/Form Handlers'
title: 'Form Handlers'
---

## Pockets Woo Directives

Pockets woo comes with directives that make modifying or enhancing woocommerce functionality.

### ```v-pockets-woo-form-handler```

This directive can be used to turn any woo form into an ajax form with automatic
success and error handling. It will seamlessly interact with things like pockets woo cart api.

```html
<some-el
    v-pockets-woo-form-handler="{
        action: "anAction",
        success: "A success message",
        error: "An error message"
    }"
>
</some-el>
```

The directive expects an object containing: 

- action: ```"cart.addItem" | "cart.removeItem"```
- success: ```string | function | bool```
- error: ```string | function | bool```

Error and success can be either a string a function or a boolean. 
- If it's a string, a toast will show when the form submits. 
- If it's a function, the function will be called when the form submits.
- if it's a boolean, nothing will happen when the form submits.

### ```v-pockets-woo-cart-form-init```

Can be attached to woos cart form to apply initiation logic when the form
is mounted.
 
```html
<some-el
    v-pockets-woo-cart-form-init="{
    }"
>
</some-el>
```

### ```v-pockets-woo-checkout-form-init```

Can be attached to woos checkout form to apply initiation logic when the form
is mounted.

```html
<some-el
    v-pockets-woo-checkout-form-init="{
    }"
>
</some-el>
```

### ```v-pockets-woo-variation-form-init```

Can be attached to woos variation form to apply initiation logic when the form
is mounted.

```html
<some-el
    v-pockets-woo-variation-form-init="{
    }"
>
</some-el>
```

When this directive is applied, it attaches logic that tracks when a variation is selected in the form. It will set ```$pockets.woo.variation_form.selected``` to the selected variation. This state is reactive.

This state is populated by woocommerce for each variation. A variety of information such as the variations price is added by default in woocommerce.

To modify data available on a selected variation:

```php
add_filter( 'woocommerce_available_variation', function( $variation_data, $product, $variation ) {

    $variation_data['some_data'] = 'foo';

    return $variation_data;

}, 10, 3 );
```

You can use this data anywhere in a vue template:


```html
<div v-if='$pockets.woo.variation_form.selected'>
    {{ $pockets.woo.variation_form.selected.some_data }}
</div>
```
