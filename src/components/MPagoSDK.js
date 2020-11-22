import React from 'react'

export const MPagoSDK = () => {

    // Mercado Pago SDK
    const mercadopago = require('mercadopago');

    // Add Your credentials
    mercadopago.configure({
        access_token: 'PROD_ACCESS_TOKEN'
    });

    // Create a preference object
    let preference = {
        items: [
            {
                title: 'My Item',
                unit_price: 100,
                quantity: 1,
            }
        ]
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            // This value replaces the String "<%= global.id %>" in your HTML
            global.id = response.body.id;
        }).catch(function (error) {
            console.log(error);
    });

    return (
        <div>
            <script
                src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                data-preference-id='<%= global.id %>'>
            </script>
        </div>
    )
}
