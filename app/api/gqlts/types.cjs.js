module.exports = {
    "scalars": [
        8,
        19,
        20,
        24,
        31,
        50,
        91,
        109,
        110,
        117,
        120,
        123,
        125,
        142,
        150,
        151,
        154,
        155,
        158,
        161,
        162,
        168,
        170,
        178,
        181,
        184,
        187,
        188,
        190,
        196,
        205,
        207,
        210,
        214,
        217,
        225,
        239,
        242,
        243,
        247,
        252,
        255,
        256,
        258,
        263,
        267,
        268,
        271,
        272,
        276,
        279,
        284,
        285,
        286,
        287,
        297,
        319,
        323,
        331,
        332,
        333,
        335,
        336,
        337,
        338,
        346
    ],
    "types": {
        "ApiVersion": {
            "displayName": [
                319
            ],
            "handle": [
                319
            ],
            "supported": [
                20
            ],
            "__typename": [
                319
            ]
        },
        "ApplePayWalletContentInput": {
            "billingAddress": [
                200
            ],
            "data": [
                319
            ],
            "header": [
                2
            ],
            "lastDigits": [
                319
            ],
            "signature": [
                319
            ],
            "version": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "ApplePayWalletHeaderInput": {
            "applicationData": [
                319
            ],
            "ephemeralPublicKey": [
                319
            ],
            "publicKeyHash": [
                319
            ],
            "transactionId": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "AppliedGiftCard": {
            "amountUsed": [
                234
            ],
            "amountUsedV2": [
                234
            ],
            "balance": [
                234
            ],
            "balanceV2": [
                234
            ],
            "id": [
                181
            ],
            "lastCharacters": [
                319
            ],
            "presentmentAmountUsed": [
                234
            ],
            "__typename": [
                319
            ]
        },
        "Article": {
            "author": [
                5
            ],
            "authorV2": [
                5
            ],
            "blog": [
                16
            ],
            "comments": [
                113,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "content": [
                319,
                {
                    "truncateAt": [
                        187
                    ]
                }
            ],
            "contentHtml": [
                178
            ],
            "excerpt": [
                319,
                {
                    "truncateAt": [
                        187
                    ]
                }
            ],
            "excerptHtml": [
                178
            ],
            "handle": [
                319
            ],
            "id": [
                181
            ],
            "image": [
                182
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                333
            ],
            "publishedAt": [
                150
            ],
            "seo": [
                277
            ],
            "tags": [
                319
            ],
            "title": [
                319
            ],
            "trackingParameters": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "ArticleAuthor": {
            "bio": [
                319
            ],
            "email": [
                319
            ],
            "firstName": [
                319
            ],
            "lastName": [
                319
            ],
            "name": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "ArticleConnection": {
            "edges": [
                7
            ],
            "nodes": [
                4
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "ArticleEdge": {
            "cursor": [
                319
            ],
            "node": [
                4
            ],
            "__typename": [
                319
            ]
        },
        "ArticleSortKeys": {},
        "Attribute": {
            "key": [
                319
            ],
            "value": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "AttributeInput": {
            "key": [
                319
            ],
            "value": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "AutomaticDiscountApplication": {
            "allocationMethod": [
                158
            ],
            "targetSelection": [
                161
            ],
            "targetType": [
                162
            ],
            "title": [
                319
            ],
            "value": [
                261
            ],
            "__typename": [
                319
            ]
        },
        "AvailableShippingRates": {
            "ready": [
                20
            ],
            "shippingRates": [
                311
            ],
            "__typename": [
                319
            ]
        },
        "BaseCartLine": {
            "attribute": [
                9,
                {
                    "key": [
                        319,
                        "String!"
                    ]
                }
            ],
            "attributes": [
                9
            ],
            "cost": [
                56
            ],
            "discountAllocations": [
                47
            ],
            "estimatedCost": [
                57
            ],
            "id": [
                181
            ],
            "merchandise": [
                215
            ],
            "quantity": [
                187
            ],
            "sellingPlanAllocation": [
                291
            ],
            "on_CartLine": [
                55
            ],
            "on_ComponentizableCartLine": [
                118
            ],
            "__typename": [
                319
            ]
        },
        "BaseCartLineConnection": {
            "edges": [
                15
            ],
            "nodes": [
                13
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "BaseCartLineEdge": {
            "cursor": [
                319
            ],
            "node": [
                13
            ],
            "__typename": [
                319
            ]
        },
        "Blog": {
            "articleByHandle": [
                4,
                {
                    "handle": [
                        319,
                        "String!"
                    ]
                }
            ],
            "articles": [
                6,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        8
                    ],
                    "reverse": [
                        20
                    ],
                    "query": [
                        319
                    ]
                }
            ],
            "authors": [
                5
            ],
            "handle": [
                319
            ],
            "id": [
                181
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                333
            ],
            "seo": [
                277
            ],
            "title": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "BlogConnection": {
            "edges": [
                18
            ],
            "nodes": [
                16
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "BlogEdge": {
            "cursor": [
                319
            ],
            "node": [
                16
            ],
            "__typename": [
                319
            ]
        },
        "BlogSortKeys": {},
        "Boolean": {},
        "Brand": {
            "colors": [
                23
            ],
            "coverImage": [
                208
            ],
            "logo": [
                208
            ],
            "shortDescription": [
                319
            ],
            "slogan": [
                319
            ],
            "squareLogo": [
                208
            ],
            "__typename": [
                319
            ]
        },
        "BrandColorGroup": {
            "background": [
                110
            ],
            "foreground": [
                110
            ],
            "__typename": [
                319
            ]
        },
        "BrandColors": {
            "primary": [
                22
            ],
            "secondary": [
                22
            ],
            "__typename": [
                319
            ]
        },
        "CardBrand": {},
        "Cart": {
            "attribute": [
                9,
                {
                    "key": [
                        319,
                        "String!"
                    ]
                }
            ],
            "attributes": [
                9
            ],
            "buyerIdentity": [
                28
            ],
            "checkoutUrl": [
                333
            ],
            "cost": [
                39
            ],
            "createdAt": [
                150
            ],
            "deliveryGroups": [
                43,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "discountAllocations": [
                47
            ],
            "discountCodes": [
                48
            ],
            "estimatedCost": [
                51
            ],
            "id": [
                181
            ],
            "lines": [
                14,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "note": [
                319
            ],
            "totalQuantity": [
                187
            ],
            "updatedAt": [
                150
            ],
            "__typename": [
                319
            ]
        },
        "CartAttributesUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                319
            ]
        },
        "CartAutomaticDiscountAllocation": {
            "discountedAmount": [
                234
            ],
            "title": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartBuyerIdentity": {
            "countryCode": [
                120
            ],
            "customer": [
                126
            ],
            "deliveryAddressPreferences": [
                152
            ],
            "email": [
                319
            ],
            "phone": [
                319
            ],
            "walletPreferences": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartBuyerIdentityInput": {
            "countryCode": [
                120
            ],
            "customerAccessToken": [
                319
            ],
            "deliveryAddressPreferences": [
                153
            ],
            "email": [
                319
            ],
            "phone": [
                319
            ],
            "walletPreferences": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartBuyerIdentityUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                319
            ]
        },
        "CartCardSource": {},
        "CartCodeDiscountAllocation": {
            "code": [
                319
            ],
            "discountedAmount": [
                234
            ],
            "__typename": [
                319
            ]
        },
        "CartCompletionAction": {
            "on_CompletePaymentChallenge": [
                115
            ],
            "__typename": [
                319
            ]
        },
        "CartCompletionActionRequired": {
            "action": [
                33
            ],
            "id": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartCompletionAttemptResult": {
            "on_CartCompletionActionRequired": [
                34
            ],
            "on_CartCompletionFailed": [
                36
            ],
            "on_CartCompletionProcessing": [
                37
            ],
            "on_CartCompletionSuccess": [
                38
            ],
            "__typename": [
                319
            ]
        },
        "CartCompletionFailed": {
            "errors": [
                116
            ],
            "id": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartCompletionProcessing": {
            "id": [
                319
            ],
            "pollDelay": [
                187
            ],
            "__typename": [
                319
            ]
        },
        "CartCompletionSuccess": {
            "completedAt": [
                150
            ],
            "id": [
                319
            ],
            "orderId": [
                181
            ],
            "orderUrl": [
                333
            ],
            "__typename": [
                319
            ]
        },
        "CartCost": {
            "checkoutChargeAmount": [
                234
            ],
            "subtotalAmount": [
                234
            ],
            "subtotalAmountEstimated": [
                20
            ],
            "totalAmount": [
                234
            ],
            "totalAmountEstimated": [
                20
            ],
            "totalDutyAmount": [
                234
            ],
            "totalDutyAmountEstimated": [
                20
            ],
            "totalTaxAmount": [
                234
            ],
            "totalTaxAmountEstimated": [
                20
            ],
            "__typename": [
                319
            ]
        },
        "CartCreatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                319
            ]
        },
        "CartCustomDiscountAllocation": {
            "discountedAmount": [
                234
            ],
            "title": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartDeliveryGroup": {
            "cartLines": [
                14,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "deliveryAddress": [
                197
            ],
            "deliveryOptions": [
                45
            ],
            "id": [
                181
            ],
            "selectedDeliveryOption": [
                45
            ],
            "__typename": [
                319
            ]
        },
        "CartDeliveryGroupConnection": {
            "edges": [
                44
            ],
            "nodes": [
                42
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "CartDeliveryGroupEdge": {
            "cursor": [
                319
            ],
            "node": [
                42
            ],
            "__typename": [
                319
            ]
        },
        "CartDeliveryOption": {
            "code": [
                319
            ],
            "deliveryMethodType": [
                154
            ],
            "description": [
                319
            ],
            "estimatedCost": [
                234
            ],
            "handle": [
                319
            ],
            "title": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartDirectPaymentMethodInput": {
            "billingAddress": [
                200
            ],
            "sessionId": [
                319
            ],
            "cardSource": [
                31
            ],
            "__typename": [
                319
            ]
        },
        "CartDiscountAllocation": {
            "discountedAmount": [
                234
            ],
            "on_CartAutomaticDiscountAllocation": [
                27
            ],
            "on_CartCodeDiscountAllocation": [
                32
            ],
            "on_CartCustomDiscountAllocation": [
                41
            ],
            "__typename": [
                319
            ]
        },
        "CartDiscountCode": {
            "applicable": [
                20
            ],
            "code": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartDiscountCodesUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                319
            ]
        },
        "CartErrorCode": {},
        "CartEstimatedCost": {
            "checkoutChargeAmount": [
                234
            ],
            "subtotalAmount": [
                234
            ],
            "totalAmount": [
                234
            ],
            "totalDutyAmount": [
                234
            ],
            "totalTaxAmount": [
                234
            ],
            "__typename": [
                319
            ]
        },
        "CartFreePaymentMethodInput": {
            "billingAddress": [
                200
            ],
            "__typename": [
                319
            ]
        },
        "CartInput": {
            "attributes": [
                10
            ],
            "discountCodes": [
                319
            ],
            "lines": [
                58
            ],
            "note": [
                319
            ],
            "buyerIdentity": [
                29
            ],
            "metafields": [
                54
            ],
            "__typename": [
                319
            ]
        },
        "CartInputMetafieldInput": {
            "key": [
                319
            ],
            "type": [
                319
            ],
            "value": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartLine": {
            "attribute": [
                9,
                {
                    "key": [
                        319,
                        "String!"
                    ]
                }
            ],
            "attributes": [
                9
            ],
            "cost": [
                56
            ],
            "discountAllocations": [
                47
            ],
            "estimatedCost": [
                57
            ],
            "id": [
                181
            ],
            "merchandise": [
                215
            ],
            "quantity": [
                187
            ],
            "sellingPlanAllocation": [
                291
            ],
            "__typename": [
                319
            ]
        },
        "CartLineCost": {
            "amountPerQuantity": [
                234
            ],
            "compareAtAmountPerQuantity": [
                234
            ],
            "subtotalAmount": [
                234
            ],
            "totalAmount": [
                234
            ],
            "__typename": [
                319
            ]
        },
        "CartLineEstimatedCost": {
            "amount": [
                234
            ],
            "compareAtAmount": [
                234
            ],
            "subtotalAmount": [
                234
            ],
            "totalAmount": [
                234
            ],
            "__typename": [
                319
            ]
        },
        "CartLineInput": {
            "attributes": [
                10
            ],
            "quantity": [
                187
            ],
            "merchandiseId": [
                181
            ],
            "sellingPlanId": [
                181
            ],
            "__typename": [
                319
            ]
        },
        "CartLineUpdateInput": {
            "id": [
                181
            ],
            "merchandiseId": [
                181
            ],
            "quantity": [
                187
            ],
            "attributes": [
                10
            ],
            "sellingPlanId": [
                181
            ],
            "__typename": [
                319
            ]
        },
        "CartLinesAddPayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                319
            ]
        },
        "CartLinesRemovePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                319
            ]
        },
        "CartLinesUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                319
            ]
        },
        "CartMetafieldDeleteInput": {
            "ownerId": [
                181
            ],
            "key": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartMetafieldDeletePayload": {
            "deletedId": [
                181
            ],
            "userErrors": [
                218
            ],
            "__typename": [
                319
            ]
        },
        "CartMetafieldsSetInput": {
            "key": [
                319
            ],
            "ownerId": [
                181
            ],
            "type": [
                319
            ],
            "value": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartMetafieldsSetPayload": {
            "metafields": [
                216
            ],
            "userErrors": [
                224
            ],
            "__typename": [
                319
            ]
        },
        "CartNoteUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                319
            ]
        },
        "CartPaymentInput": {
            "amount": [
                233
            ],
            "sourceIdentifier": [
                319
            ],
            "freePaymentMethod": [
                52
            ],
            "directPaymentMethod": [
                46
            ],
            "walletPaymentMethod": [
                75
            ],
            "__typename": [
                319
            ]
        },
        "CartPaymentUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                319
            ]
        },
        "CartSelectedDeliveryOptionInput": {
            "deliveryGroupId": [
                181
            ],
            "deliveryOptionHandle": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartSelectedDeliveryOptionsUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                319
            ]
        },
        "CartSubmitForCompletionPayload": {
            "result": [
                73
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                319
            ]
        },
        "CartSubmitForCompletionResult": {
            "on_SubmitAlreadyAccepted": [
                324
            ],
            "on_SubmitFailed": [
                325
            ],
            "on_SubmitSuccess": [
                326
            ],
            "on_SubmitThrottled": [
                327
            ],
            "__typename": [
                319
            ]
        },
        "CartUserError": {
            "code": [
                50
            ],
            "field": [
                319
            ],
            "message": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CartWalletPaymentMethodInput": {
            "applePayWalletContent": [
                1
            ],
            "shopPayWalletContent": [
                313
            ],
            "__typename": [
                319
            ]
        },
        "Checkout": {
            "appliedGiftCards": [
                3
            ],
            "availableShippingRates": [
                12
            ],
            "buyerIdentity": [
                79
            ],
            "completedAt": [
                150
            ],
            "createdAt": [
                150
            ],
            "currencyCode": [
                125
            ],
            "customAttributes": [
                9
            ],
            "discountApplications": [
                159,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "email": [
                319
            ],
            "id": [
                181
            ],
            "lineItems": [
                95,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "lineItemsSubtotalPrice": [
                234
            ],
            "note": [
                319
            ],
            "order": [
                238
            ],
            "orderStatusUrl": [
                333
            ],
            "paymentDue": [
                234
            ],
            "paymentDueV2": [
                234
            ],
            "ready": [
                20
            ],
            "requiresShipping": [
                20
            ],
            "shippingAddress": [
                197
            ],
            "shippingDiscountAllocations": [
                156
            ],
            "shippingLine": [
                311
            ],
            "subtotalPrice": [
                234
            ],
            "subtotalPriceV2": [
                234
            ],
            "taxExempt": [
                20
            ],
            "taxesIncluded": [
                20
            ],
            "totalDuties": [
                234
            ],
            "totalPrice": [
                234
            ],
            "totalPriceV2": [
                234
            ],
            "totalTax": [
                234
            ],
            "totalTaxV2": [
                234
            ],
            "updatedAt": [
                150
            ],
            "webUrl": [
                333
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutAttributesUpdateV2Input": {
            "customAttributes": [
                10
            ],
            "note": [
                319
            ],
            "allowPartialAddresses": [
                20
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutAttributesUpdateV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutBuyerIdentity": {
            "countryCode": [
                120
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutBuyerIdentityInput": {
            "countryCode": [
                120
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutCompleteFreePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutCompleteWithCreditCardV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "payment": [
                253
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutCompleteWithTokenizedPaymentV3Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "payment": [
                253
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutCreateInput": {
            "allowPartialAddresses": [
                20
            ],
            "customAttributes": [
                10
            ],
            "email": [
                319
            ],
            "lineItems": [
                97
            ],
            "note": [
                319
            ],
            "buyerIdentity": [
                80
            ],
            "shippingAddress": [
                200
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutCreatePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "queueToken": [
                319
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutCustomerAssociateV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "customer": [
                126
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutCustomerDisassociateV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutDiscountCodeApplyV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutDiscountCodeRemovePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutEmailUpdateV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutErrorCode": {},
        "CheckoutGiftCardRemoveV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutGiftCardsAppendPayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutLineItem": {
            "customAttributes": [
                9
            ],
            "discountAllocations": [
                156
            ],
            "id": [
                181
            ],
            "quantity": [
                187
            ],
            "title": [
                319
            ],
            "unitPrice": [
                234
            ],
            "variant": [
                273
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutLineItemConnection": {
            "edges": [
                96
            ],
            "nodes": [
                94
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutLineItemEdge": {
            "cursor": [
                319
            ],
            "node": [
                94
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutLineItemInput": {
            "customAttributes": [
                10
            ],
            "quantity": [
                187
            ],
            "variantId": [
                181
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutLineItemUpdateInput": {
            "id": [
                181
            ],
            "customAttributes": [
                10
            ],
            "quantity": [
                187
            ],
            "variantId": [
                181
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutLineItemsAddPayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutLineItemsRemovePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutLineItemsReplacePayload": {
            "checkout": [
                76
            ],
            "userErrors": [
                105
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutLineItemsUpdatePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutShippingAddressUpdateV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutShippingLineUpdatePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CheckoutUserError": {
            "code": [
                91
            ],
            "field": [
                319
            ],
            "message": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "Collection": {
            "description": [
                319,
                {
                    "truncateAt": [
                        187
                    ]
                }
            ],
            "descriptionHtml": [
                178
            ],
            "handle": [
                319
            ],
            "id": [
                181
            ],
            "image": [
                182
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                333
            ],
            "products": [
                264,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        263
                    ],
                    "reverse": [
                        20
                    ],
                    "filters": [
                        266,
                        "[ProductFilter!]"
                    ]
                }
            ],
            "seo": [
                277
            ],
            "title": [
                319
            ],
            "trackingParameters": [
                319
            ],
            "updatedAt": [
                150
            ],
            "__typename": [
                319
            ]
        },
        "CollectionConnection": {
            "edges": [
                108
            ],
            "nodes": [
                106
            ],
            "pageInfo": [
                251
            ],
            "totalCount": [
                338
            ],
            "__typename": [
                319
            ]
        },
        "CollectionEdge": {
            "cursor": [
                319
            ],
            "node": [
                106
            ],
            "__typename": [
                319
            ]
        },
        "CollectionSortKeys": {},
        "Color": {},
        "Comment": {
            "author": [
                112
            ],
            "content": [
                319,
                {
                    "truncateAt": [
                        187
                    ]
                }
            ],
            "contentHtml": [
                178
            ],
            "id": [
                181
            ],
            "__typename": [
                319
            ]
        },
        "CommentAuthor": {
            "email": [
                319
            ],
            "name": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CommentConnection": {
            "edges": [
                114
            ],
            "nodes": [
                111
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "CommentEdge": {
            "cursor": [
                319
            ],
            "node": [
                111
            ],
            "__typename": [
                319
            ]
        },
        "CompletePaymentChallenge": {
            "redirectUrl": [
                333
            ],
            "__typename": [
                319
            ]
        },
        "CompletionError": {
            "code": [
                117
            ],
            "message": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CompletionErrorCode": {},
        "ComponentizableCartLine": {
            "attribute": [
                9,
                {
                    "key": [
                        319,
                        "String!"
                    ]
                }
            ],
            "attributes": [
                9
            ],
            "cost": [
                56
            ],
            "discountAllocations": [
                47
            ],
            "estimatedCost": [
                57
            ],
            "id": [
                181
            ],
            "lineComponents": [
                55
            ],
            "merchandise": [
                215
            ],
            "quantity": [
                187
            ],
            "sellingPlanAllocation": [
                291
            ],
            "__typename": [
                319
            ]
        },
        "Country": {
            "availableLanguages": [
                189
            ],
            "currency": [
                124
            ],
            "isoCode": [
                120
            ],
            "market": [
                202
            ],
            "name": [
                319
            ],
            "unitSystem": [
                337
            ],
            "__typename": [
                319
            ]
        },
        "CountryCode": {},
        "CreditCard": {
            "brand": [
                319
            ],
            "expiryMonth": [
                187
            ],
            "expiryYear": [
                187
            ],
            "firstDigits": [
                319
            ],
            "firstName": [
                319
            ],
            "lastDigits": [
                319
            ],
            "lastName": [
                319
            ],
            "maskedNumber": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CreditCardPaymentInputV2": {
            "billingAddress": [
                200
            ],
            "idempotencyKey": [
                319
            ],
            "paymentAmount": [
                233
            ],
            "test": [
                20
            ],
            "vaultId": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CropRegion": {},
        "Currency": {
            "isoCode": [
                125
            ],
            "name": [
                319
            ],
            "symbol": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CurrencyCode": {},
        "Customer": {
            "acceptsMarketing": [
                20
            ],
            "addresses": [
                198,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "createdAt": [
                150
            ],
            "defaultAddress": [
                197
            ],
            "displayName": [
                319
            ],
            "email": [
                319
            ],
            "firstName": [
                319
            ],
            "id": [
                181
            ],
            "lastIncompleteCheckout": [
                76
            ],
            "lastName": [
                319
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "numberOfOrders": [
                338
            ],
            "orders": [
                240,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        247
                    ],
                    "reverse": [
                        20
                    ],
                    "query": [
                        319
                    ]
                }
            ],
            "phone": [
                319
            ],
            "tags": [
                319
            ],
            "updatedAt": [
                150
            ],
            "__typename": [
                319
            ]
        },
        "CustomerAccessToken": {
            "accessToken": [
                319
            ],
            "expiresAt": [
                150
            ],
            "__typename": [
                319
            ]
        },
        "CustomerAccessTokenCreateInput": {
            "email": [
                319
            ],
            "password": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CustomerAccessTokenCreatePayload": {
            "customerAccessToken": [
                127
            ],
            "customerUserErrors": [
                149
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerAccessTokenCreateWithMultipassPayload": {
            "customerAccessToken": [
                127
            ],
            "customerUserErrors": [
                149
            ],
            "__typename": [
                319
            ]
        },
        "CustomerAccessTokenDeletePayload": {
            "deletedAccessToken": [
                319
            ],
            "deletedCustomerAccessTokenId": [
                319
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerAccessTokenRenewPayload": {
            "customerAccessToken": [
                127
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerActivateByUrlPayload": {
            "customer": [
                126
            ],
            "customerAccessToken": [
                127
            ],
            "customerUserErrors": [
                149
            ],
            "__typename": [
                319
            ]
        },
        "CustomerActivateInput": {
            "activationToken": [
                319
            ],
            "password": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CustomerActivatePayload": {
            "customer": [
                126
            ],
            "customerAccessToken": [
                127
            ],
            "customerUserErrors": [
                149
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerAddressCreatePayload": {
            "customerAddress": [
                197
            ],
            "customerUserErrors": [
                149
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerAddressDeletePayload": {
            "customerUserErrors": [
                149
            ],
            "deletedCustomerAddressId": [
                319
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerAddressUpdatePayload": {
            "customerAddress": [
                197
            ],
            "customerUserErrors": [
                149
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerCreateInput": {
            "email": [
                319
            ],
            "firstName": [
                319
            ],
            "lastName": [
                319
            ],
            "phone": [
                319
            ],
            "acceptsMarketing": [
                20
            ],
            "password": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CustomerCreatePayload": {
            "customer": [
                126
            ],
            "customerUserErrors": [
                149
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerDefaultAddressUpdatePayload": {
            "customer": [
                126
            ],
            "customerUserErrors": [
                149
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerErrorCode": {},
        "CustomerRecoverPayload": {
            "customerUserErrors": [
                149
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerResetByUrlPayload": {
            "customer": [
                126
            ],
            "customerAccessToken": [
                127
            ],
            "customerUserErrors": [
                149
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerResetInput": {
            "password": [
                319
            ],
            "resetToken": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "CustomerResetPayload": {
            "customer": [
                126
            ],
            "customerAccessToken": [
                127
            ],
            "customerUserErrors": [
                149
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerUpdateInput": {
            "email": [
                319
            ],
            "firstName": [
                319
            ],
            "lastName": [
                319
            ],
            "password": [
                319
            ],
            "phone": [
                319
            ],
            "acceptsMarketing": [
                20
            ],
            "__typename": [
                319
            ]
        },
        "CustomerUpdatePayload": {
            "customer": [
                126
            ],
            "customerAccessToken": [
                127
            ],
            "customerUserErrors": [
                149
            ],
            "userErrors": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "CustomerUserError": {
            "code": [
                142
            ],
            "field": [
                319
            ],
            "message": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "DateTime": {},
        "Decimal": {},
        "DeliveryAddress": {
            "on_MailingAddress": [
                197
            ],
            "on_Node": [
                236
            ],
            "__typename": [
                319
            ]
        },
        "DeliveryAddressInput": {
            "deliveryAddress": [
                200
            ],
            "customerAddressId": [
                181
            ],
            "__typename": [
                319
            ]
        },
        "DeliveryMethodType": {},
        "DigitalWallet": {},
        "DiscountAllocation": {
            "allocatedAmount": [
                234
            ],
            "discountApplication": [
                157
            ],
            "__typename": [
                319
            ]
        },
        "DiscountApplication": {
            "allocationMethod": [
                158
            ],
            "targetSelection": [
                161
            ],
            "targetType": [
                162
            ],
            "value": [
                261
            ],
            "on_AutomaticDiscountApplication": [
                11
            ],
            "on_DiscountCodeApplication": [
                163
            ],
            "on_ManualDiscountApplication": [
                201
            ],
            "on_ScriptDiscountApplication": [
                278
            ],
            "__typename": [
                319
            ]
        },
        "DiscountApplicationAllocationMethod": {},
        "DiscountApplicationConnection": {
            "edges": [
                160
            ],
            "nodes": [
                157
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "DiscountApplicationEdge": {
            "cursor": [
                319
            ],
            "node": [
                157
            ],
            "__typename": [
                319
            ]
        },
        "DiscountApplicationTargetSelection": {},
        "DiscountApplicationTargetType": {},
        "DiscountCodeApplication": {
            "allocationMethod": [
                158
            ],
            "applicable": [
                20
            ],
            "code": [
                319
            ],
            "targetSelection": [
                161
            ],
            "targetType": [
                162
            ],
            "value": [
                261
            ],
            "__typename": [
                319
            ]
        },
        "DisplayableError": {
            "field": [
                319
            ],
            "message": [
                319
            ],
            "on_CartUserError": [
                74
            ],
            "on_CheckoutUserError": [
                105
            ],
            "on_CustomerUserError": [
                149
            ],
            "on_MetafieldDeleteUserError": [
                218
            ],
            "on_MetafieldsSetUserError": [
                224
            ],
            "on_UserError": [
                342
            ],
            "__typename": [
                319
            ]
        },
        "Domain": {
            "host": [
                319
            ],
            "sslEnabled": [
                20
            ],
            "url": [
                333
            ],
            "__typename": [
                319
            ]
        },
        "ExternalVideo": {
            "alt": [
                319
            ],
            "embedUrl": [
                333
            ],
            "embeddedUrl": [
                333
            ],
            "host": [
                207
            ],
            "id": [
                181
            ],
            "mediaContentType": [
                205
            ],
            "originUrl": [
                333
            ],
            "presentation": [
                209
            ],
            "previewImage": [
                182
            ],
            "__typename": [
                319
            ]
        },
        "Filter": {
            "id": [
                319
            ],
            "label": [
                319
            ],
            "type": [
                168
            ],
            "values": [
                169
            ],
            "__typename": [
                319
            ]
        },
        "FilterType": {},
        "FilterValue": {
            "count": [
                187
            ],
            "id": [
                319
            ],
            "input": [
                188
            ],
            "label": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "Float": {},
        "Fulfillment": {
            "fulfillmentLineItems": [
                173,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "trackingCompany": [
                319
            ],
            "trackingInfo": [
                175,
                {
                    "first": [
                        187
                    ]
                }
            ],
            "__typename": [
                319
            ]
        },
        "FulfillmentLineItem": {
            "lineItem": [
                244
            ],
            "quantity": [
                187
            ],
            "__typename": [
                319
            ]
        },
        "FulfillmentLineItemConnection": {
            "edges": [
                174
            ],
            "nodes": [
                172
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "FulfillmentLineItemEdge": {
            "cursor": [
                319
            ],
            "node": [
                172
            ],
            "__typename": [
                319
            ]
        },
        "FulfillmentTrackingInfo": {
            "number": [
                319
            ],
            "url": [
                333
            ],
            "__typename": [
                319
            ]
        },
        "GenericFile": {
            "alt": [
                319
            ],
            "id": [
                181
            ],
            "mimeType": [
                319
            ],
            "originalFileSize": [
                187
            ],
            "previewImage": [
                182
            ],
            "url": [
                333
            ],
            "__typename": [
                319
            ]
        },
        "GeoCoordinateInput": {
            "latitude": [
                170
            ],
            "longitude": [
                170
            ],
            "__typename": [
                319
            ]
        },
        "HTML": {},
        "HasMetafields": {
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "on_Article": [
                4
            ],
            "on_Blog": [
                16
            ],
            "on_Cart": [
                25
            ],
            "on_Collection": [
                106
            ],
            "on_Customer": [
                126
            ],
            "on_Location": [
                192
            ],
            "on_Market": [
                202
            ],
            "on_Order": [
                238
            ],
            "on_Page": [
                248
            ],
            "on_Product": [
                262
            ],
            "on_ProductVariant": [
                273
            ],
            "on_Shop": [
                312
            ],
            "__typename": [
                319
            ]
        },
        "HasMetafieldsIdentifier": {
            "key": [
                319
            ],
            "namespace": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "ID": {},
        "Image": {
            "altText": [
                319
            ],
            "height": [
                187
            ],
            "id": [
                181
            ],
            "originalSrc": [
                333
            ],
            "src": [
                333
            ],
            "transformedSrc": [
                333,
                {
                    "crop": [
                        123
                    ],
                    "maxHeight": [
                        187
                    ],
                    "maxWidth": [
                        187
                    ],
                    "preferredContentType": [
                        184
                    ],
                    "scale": [
                        187
                    ]
                }
            ],
            "url": [
                333,
                {
                    "transform": [
                        186
                    ]
                }
            ],
            "width": [
                187
            ],
            "__typename": [
                319
            ]
        },
        "ImageConnection": {
            "edges": [
                185
            ],
            "nodes": [
                182
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "ImageContentType": {},
        "ImageEdge": {
            "cursor": [
                319
            ],
            "node": [
                182
            ],
            "__typename": [
                319
            ]
        },
        "ImageTransformInput": {
            "crop": [
                123
            ],
            "maxWidth": [
                187
            ],
            "maxHeight": [
                187
            ],
            "scale": [
                187
            ],
            "preferredContentType": [
                184
            ],
            "__typename": [
                319
            ]
        },
        "Int": {},
        "JSON": {},
        "Language": {
            "endonymName": [
                319
            ],
            "isoCode": [
                190
            ],
            "name": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "LanguageCode": {},
        "Localization": {
            "availableCountries": [
                119
            ],
            "availableLanguages": [
                189
            ],
            "country": [
                119
            ],
            "language": [
                189
            ],
            "market": [
                202
            ],
            "__typename": [
                319
            ]
        },
        "Location": {
            "address": [
                193
            ],
            "id": [
                181
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "name": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "LocationAddress": {
            "address1": [
                319
            ],
            "address2": [
                319
            ],
            "city": [
                319
            ],
            "country": [
                319
            ],
            "countryCode": [
                319
            ],
            "formatted": [
                319
            ],
            "latitude": [
                170
            ],
            "longitude": [
                170
            ],
            "phone": [
                319
            ],
            "province": [
                319
            ],
            "provinceCode": [
                319
            ],
            "zip": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "LocationConnection": {
            "edges": [
                195
            ],
            "nodes": [
                192
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "LocationEdge": {
            "cursor": [
                319
            ],
            "node": [
                192
            ],
            "__typename": [
                319
            ]
        },
        "LocationSortKeys": {},
        "MailingAddress": {
            "address1": [
                319
            ],
            "address2": [
                319
            ],
            "city": [
                319
            ],
            "company": [
                319
            ],
            "country": [
                319
            ],
            "countryCode": [
                319
            ],
            "countryCodeV2": [
                120
            ],
            "firstName": [
                319
            ],
            "formatted": [
                319,
                {
                    "withCompany": [
                        20
                    ],
                    "withName": [
                        20
                    ]
                }
            ],
            "formattedArea": [
                319
            ],
            "id": [
                181
            ],
            "lastName": [
                319
            ],
            "latitude": [
                170
            ],
            "longitude": [
                170
            ],
            "name": [
                319
            ],
            "phone": [
                319
            ],
            "province": [
                319
            ],
            "provinceCode": [
                319
            ],
            "zip": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "MailingAddressConnection": {
            "edges": [
                199
            ],
            "nodes": [
                197
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "MailingAddressEdge": {
            "cursor": [
                319
            ],
            "node": [
                197
            ],
            "__typename": [
                319
            ]
        },
        "MailingAddressInput": {
            "address1": [
                319
            ],
            "address2": [
                319
            ],
            "city": [
                319
            ],
            "company": [
                319
            ],
            "country": [
                319
            ],
            "firstName": [
                319
            ],
            "lastName": [
                319
            ],
            "phone": [
                319
            ],
            "province": [
                319
            ],
            "zip": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "ManualDiscountApplication": {
            "allocationMethod": [
                158
            ],
            "description": [
                319
            ],
            "targetSelection": [
                161
            ],
            "targetType": [
                162
            ],
            "title": [
                319
            ],
            "value": [
                261
            ],
            "__typename": [
                319
            ]
        },
        "Market": {
            "handle": [
                319
            ],
            "id": [
                181
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "__typename": [
                319
            ]
        },
        "Media": {
            "alt": [
                319
            ],
            "id": [
                181
            ],
            "mediaContentType": [
                205
            ],
            "presentation": [
                209
            ],
            "previewImage": [
                182
            ],
            "on_ExternalVideo": [
                166
            ],
            "on_MediaImage": [
                208
            ],
            "on_Model3d": [
                231
            ],
            "on_Video": [
                344
            ],
            "__typename": [
                319
            ]
        },
        "MediaConnection": {
            "edges": [
                206
            ],
            "nodes": [
                203
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "MediaContentType": {},
        "MediaEdge": {
            "cursor": [
                319
            ],
            "node": [
                203
            ],
            "__typename": [
                319
            ]
        },
        "MediaHost": {},
        "MediaImage": {
            "alt": [
                319
            ],
            "id": [
                181
            ],
            "image": [
                182
            ],
            "mediaContentType": [
                205
            ],
            "presentation": [
                209
            ],
            "previewImage": [
                182
            ],
            "__typename": [
                319
            ]
        },
        "MediaPresentation": {
            "asJson": [
                188,
                {
                    "format": [
                        210,
                        "MediaPresentationFormat!"
                    ]
                }
            ],
            "id": [
                181
            ],
            "__typename": [
                319
            ]
        },
        "MediaPresentationFormat": {},
        "Menu": {
            "handle": [
                319
            ],
            "id": [
                181
            ],
            "items": [
                212
            ],
            "itemsCount": [
                187
            ],
            "title": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "MenuItem": {
            "id": [
                181
            ],
            "items": [
                212
            ],
            "resource": [
                213
            ],
            "resourceId": [
                181
            ],
            "tags": [
                319
            ],
            "title": [
                319
            ],
            "type": [
                214
            ],
            "url": [
                333
            ],
            "__typename": [
                319
            ]
        },
        "MenuItemResource": {
            "on_Article": [
                4
            ],
            "on_Blog": [
                16
            ],
            "on_Collection": [
                106
            ],
            "on_Page": [
                248
            ],
            "on_Product": [
                262
            ],
            "on_ShopPolicy": [
                314
            ],
            "on_HasMetafields": [
                179
            ],
            "on_Node": [
                236
            ],
            "on_OnlineStorePublishable": [
                237
            ],
            "on_Trackable": [
                329
            ],
            "__typename": [
                319
            ]
        },
        "MenuItemType": {},
        "Merchandise": {
            "on_ProductVariant": [
                273
            ],
            "on_HasMetafields": [
                179
            ],
            "on_Node": [
                236
            ],
            "__typename": [
                319
            ]
        },
        "Metafield": {
            "createdAt": [
                150
            ],
            "description": [
                319
            ],
            "id": [
                181
            ],
            "key": [
                319
            ],
            "namespace": [
                319
            ],
            "parentResource": [
                220
            ],
            "reference": [
                221
            ],
            "references": [
                222,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ]
                }
            ],
            "type": [
                319
            ],
            "updatedAt": [
                150
            ],
            "value": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "MetafieldDeleteErrorCode": {},
        "MetafieldDeleteUserError": {
            "code": [
                217
            ],
            "field": [
                319
            ],
            "message": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "MetafieldFilter": {
            "key": [
                319
            ],
            "namespace": [
                319
            ],
            "value": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "MetafieldParentResource": {
            "on_Article": [
                4
            ],
            "on_Blog": [
                16
            ],
            "on_Cart": [
                25
            ],
            "on_Collection": [
                106
            ],
            "on_Customer": [
                126
            ],
            "on_Location": [
                192
            ],
            "on_Market": [
                202
            ],
            "on_Order": [
                238
            ],
            "on_Page": [
                248
            ],
            "on_Product": [
                262
            ],
            "on_ProductVariant": [
                273
            ],
            "on_Shop": [
                312
            ],
            "on_HasMetafields": [
                179
            ],
            "on_Node": [
                236
            ],
            "on_OnlineStorePublishable": [
                237
            ],
            "on_Trackable": [
                329
            ],
            "__typename": [
                319
            ]
        },
        "MetafieldReference": {
            "on_Collection": [
                106
            ],
            "on_GenericFile": [
                176
            ],
            "on_MediaImage": [
                208
            ],
            "on_Metaobject": [
                226
            ],
            "on_Page": [
                248
            ],
            "on_Product": [
                262
            ],
            "on_ProductVariant": [
                273
            ],
            "on_Video": [
                344
            ],
            "on_HasMetafields": [
                179
            ],
            "on_Node": [
                236
            ],
            "on_OnlineStorePublishable": [
                237
            ],
            "on_Trackable": [
                329
            ],
            "on_Media": [
                203
            ],
            "__typename": [
                319
            ]
        },
        "MetafieldReferenceConnection": {
            "edges": [
                223
            ],
            "nodes": [
                221
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "MetafieldReferenceEdge": {
            "cursor": [
                319
            ],
            "node": [
                221
            ],
            "__typename": [
                319
            ]
        },
        "MetafieldsSetUserError": {
            "code": [
                225
            ],
            "elementIndex": [
                187
            ],
            "field": [
                319
            ],
            "message": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "MetafieldsSetUserErrorCode": {},
        "Metaobject": {
            "field": [
                229,
                {
                    "key": [
                        319,
                        "String!"
                    ]
                }
            ],
            "fields": [
                229
            ],
            "handle": [
                319
            ],
            "id": [
                181
            ],
            "type": [
                319
            ],
            "updatedAt": [
                150
            ],
            "__typename": [
                319
            ]
        },
        "MetaobjectConnection": {
            "edges": [
                228
            ],
            "nodes": [
                226
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "MetaobjectEdge": {
            "cursor": [
                319
            ],
            "node": [
                226
            ],
            "__typename": [
                319
            ]
        },
        "MetaobjectField": {
            "key": [
                319
            ],
            "reference": [
                221
            ],
            "references": [
                222,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ]
                }
            ],
            "type": [
                319
            ],
            "value": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "MetaobjectHandleInput": {
            "handle": [
                319
            ],
            "type": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "Model3d": {
            "alt": [
                319
            ],
            "id": [
                181
            ],
            "mediaContentType": [
                205
            ],
            "presentation": [
                209
            ],
            "previewImage": [
                182
            ],
            "sources": [
                232
            ],
            "__typename": [
                319
            ]
        },
        "Model3dSource": {
            "filesize": [
                187
            ],
            "format": [
                319
            ],
            "mimeType": [
                319
            ],
            "url": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "MoneyInput": {
            "amount": [
                151
            ],
            "currencyCode": [
                125
            ],
            "__typename": [
                319
            ]
        },
        "MoneyV2": {
            "amount": [
                151
            ],
            "currencyCode": [
                125
            ],
            "__typename": [
                319
            ]
        },
        "Mutation": {
            "cartAttributesUpdate": [
                26,
                {
                    "attributes": [
                        10,
                        "[AttributeInput!]!"
                    ],
                    "cartId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "cartBuyerIdentityUpdate": [
                30,
                {
                    "cartId": [
                        181,
                        "ID!"
                    ],
                    "buyerIdentity": [
                        29,
                        "CartBuyerIdentityInput!"
                    ]
                }
            ],
            "cartCreate": [
                40,
                {
                    "input": [
                        53
                    ]
                }
            ],
            "cartDiscountCodesUpdate": [
                49,
                {
                    "cartId": [
                        181,
                        "ID!"
                    ],
                    "discountCodes": [
                        319,
                        "[String!]"
                    ]
                }
            ],
            "cartLinesAdd": [
                60,
                {
                    "lines": [
                        58,
                        "[CartLineInput!]!"
                    ],
                    "cartId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "cartLinesRemove": [
                61,
                {
                    "cartId": [
                        181,
                        "ID!"
                    ],
                    "lineIds": [
                        181,
                        "[ID!]!"
                    ]
                }
            ],
            "cartLinesUpdate": [
                62,
                {
                    "cartId": [
                        181,
                        "ID!"
                    ],
                    "lines": [
                        59,
                        "[CartLineUpdateInput!]!"
                    ]
                }
            ],
            "cartMetafieldDelete": [
                64,
                {
                    "input": [
                        63,
                        "CartMetafieldDeleteInput!"
                    ]
                }
            ],
            "cartMetafieldsSet": [
                66,
                {
                    "metafields": [
                        65,
                        "[CartMetafieldsSetInput!]!"
                    ]
                }
            ],
            "cartNoteUpdate": [
                67,
                {
                    "cartId": [
                        181,
                        "ID!"
                    ],
                    "note": [
                        319
                    ]
                }
            ],
            "cartPaymentUpdate": [
                69,
                {
                    "cartId": [
                        181,
                        "ID!"
                    ],
                    "payment": [
                        68,
                        "CartPaymentInput!"
                    ]
                }
            ],
            "cartSelectedDeliveryOptionsUpdate": [
                71,
                {
                    "cartId": [
                        181,
                        "ID!"
                    ],
                    "selectedDeliveryOptions": [
                        70,
                        "[CartSelectedDeliveryOptionInput!]!"
                    ]
                }
            ],
            "cartSubmitForCompletion": [
                72,
                {
                    "cartId": [
                        181,
                        "ID!"
                    ],
                    "attemptToken": [
                        319,
                        "String!"
                    ]
                }
            ],
            "checkoutAttributesUpdateV2": [
                78,
                {
                    "checkoutId": [
                        181,
                        "ID!"
                    ],
                    "input": [
                        77,
                        "CheckoutAttributesUpdateV2Input!"
                    ]
                }
            ],
            "checkoutCompleteFree": [
                81,
                {
                    "checkoutId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "checkoutCompleteWithCreditCardV2": [
                82,
                {
                    "checkoutId": [
                        181,
                        "ID!"
                    ],
                    "payment": [
                        122,
                        "CreditCardPaymentInputV2!"
                    ]
                }
            ],
            "checkoutCompleteWithTokenizedPaymentV3": [
                83,
                {
                    "checkoutId": [
                        181,
                        "ID!"
                    ],
                    "payment": [
                        328,
                        "TokenizedPaymentInputV3!"
                    ]
                }
            ],
            "checkoutCreate": [
                85,
                {
                    "input": [
                        84,
                        "CheckoutCreateInput!"
                    ],
                    "queueToken": [
                        319
                    ]
                }
            ],
            "checkoutCustomerAssociateV2": [
                86,
                {
                    "checkoutId": [
                        181,
                        "ID!"
                    ],
                    "customerAccessToken": [
                        319,
                        "String!"
                    ]
                }
            ],
            "checkoutCustomerDisassociateV2": [
                87,
                {
                    "checkoutId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "checkoutDiscountCodeApplyV2": [
                88,
                {
                    "discountCode": [
                        319,
                        "String!"
                    ],
                    "checkoutId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "checkoutDiscountCodeRemove": [
                89,
                {
                    "checkoutId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "checkoutEmailUpdateV2": [
                90,
                {
                    "checkoutId": [
                        181,
                        "ID!"
                    ],
                    "email": [
                        319,
                        "String!"
                    ]
                }
            ],
            "checkoutGiftCardRemoveV2": [
                92,
                {
                    "appliedGiftCardId": [
                        181,
                        "ID!"
                    ],
                    "checkoutId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "checkoutGiftCardsAppend": [
                93,
                {
                    "giftCardCodes": [
                        319,
                        "[String!]!"
                    ],
                    "checkoutId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "checkoutLineItemsAdd": [
                99,
                {
                    "lineItems": [
                        97,
                        "[CheckoutLineItemInput!]!"
                    ],
                    "checkoutId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "checkoutLineItemsRemove": [
                100,
                {
                    "checkoutId": [
                        181,
                        "ID!"
                    ],
                    "lineItemIds": [
                        181,
                        "[ID!]!"
                    ]
                }
            ],
            "checkoutLineItemsReplace": [
                101,
                {
                    "lineItems": [
                        97,
                        "[CheckoutLineItemInput!]!"
                    ],
                    "checkoutId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "checkoutLineItemsUpdate": [
                102,
                {
                    "lineItems": [
                        98,
                        "[CheckoutLineItemUpdateInput!]!"
                    ],
                    "checkoutId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "checkoutShippingAddressUpdateV2": [
                103,
                {
                    "shippingAddress": [
                        200,
                        "MailingAddressInput!"
                    ],
                    "checkoutId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "checkoutShippingLineUpdate": [
                104,
                {
                    "checkoutId": [
                        181,
                        "ID!"
                    ],
                    "shippingRateHandle": [
                        319,
                        "String!"
                    ]
                }
            ],
            "customerAccessTokenCreate": [
                129,
                {
                    "input": [
                        128,
                        "CustomerAccessTokenCreateInput!"
                    ]
                }
            ],
            "customerAccessTokenCreateWithMultipass": [
                130,
                {
                    "multipassToken": [
                        319,
                        "String!"
                    ]
                }
            ],
            "customerAccessTokenDelete": [
                131,
                {
                    "customerAccessToken": [
                        319,
                        "String!"
                    ]
                }
            ],
            "customerAccessTokenRenew": [
                132,
                {
                    "customerAccessToken": [
                        319,
                        "String!"
                    ]
                }
            ],
            "customerActivate": [
                135,
                {
                    "id": [
                        181,
                        "ID!"
                    ],
                    "input": [
                        134,
                        "CustomerActivateInput!"
                    ]
                }
            ],
            "customerActivateByUrl": [
                133,
                {
                    "activationUrl": [
                        333,
                        "URL!"
                    ],
                    "password": [
                        319,
                        "String!"
                    ]
                }
            ],
            "customerAddressCreate": [
                136,
                {
                    "customerAccessToken": [
                        319,
                        "String!"
                    ],
                    "address": [
                        200,
                        "MailingAddressInput!"
                    ]
                }
            ],
            "customerAddressDelete": [
                137,
                {
                    "id": [
                        181,
                        "ID!"
                    ],
                    "customerAccessToken": [
                        319,
                        "String!"
                    ]
                }
            ],
            "customerAddressUpdate": [
                138,
                {
                    "customerAccessToken": [
                        319,
                        "String!"
                    ],
                    "id": [
                        181,
                        "ID!"
                    ],
                    "address": [
                        200,
                        "MailingAddressInput!"
                    ]
                }
            ],
            "customerCreate": [
                140,
                {
                    "input": [
                        139,
                        "CustomerCreateInput!"
                    ]
                }
            ],
            "customerDefaultAddressUpdate": [
                141,
                {
                    "customerAccessToken": [
                        319,
                        "String!"
                    ],
                    "addressId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "customerRecover": [
                143,
                {
                    "email": [
                        319,
                        "String!"
                    ]
                }
            ],
            "customerReset": [
                146,
                {
                    "id": [
                        181,
                        "ID!"
                    ],
                    "input": [
                        145,
                        "CustomerResetInput!"
                    ]
                }
            ],
            "customerResetByUrl": [
                144,
                {
                    "resetUrl": [
                        333,
                        "URL!"
                    ],
                    "password": [
                        319,
                        "String!"
                    ]
                }
            ],
            "customerUpdate": [
                148,
                {
                    "customerAccessToken": [
                        319,
                        "String!"
                    ],
                    "customer": [
                        147,
                        "CustomerUpdateInput!"
                    ]
                }
            ],
            "__typename": [
                319
            ]
        },
        "Node": {
            "id": [
                181
            ],
            "on_AppliedGiftCard": [
                3
            ],
            "on_Article": [
                4
            ],
            "on_Blog": [
                16
            ],
            "on_Cart": [
                25
            ],
            "on_CartLine": [
                55
            ],
            "on_Checkout": [
                76
            ],
            "on_CheckoutLineItem": [
                94
            ],
            "on_Collection": [
                106
            ],
            "on_Comment": [
                111
            ],
            "on_ComponentizableCartLine": [
                118
            ],
            "on_ExternalVideo": [
                166
            ],
            "on_GenericFile": [
                176
            ],
            "on_Location": [
                192
            ],
            "on_MailingAddress": [
                197
            ],
            "on_Market": [
                202
            ],
            "on_MediaImage": [
                208
            ],
            "on_MediaPresentation": [
                209
            ],
            "on_Menu": [
                211
            ],
            "on_MenuItem": [
                212
            ],
            "on_Metafield": [
                216
            ],
            "on_Metaobject": [
                226
            ],
            "on_Model3d": [
                231
            ],
            "on_Order": [
                238
            ],
            "on_Page": [
                248
            ],
            "on_Payment": [
                253
            ],
            "on_Product": [
                262
            ],
            "on_ProductOption": [
                269
            ],
            "on_ProductVariant": [
                273
            ],
            "on_Shop": [
                312
            ],
            "on_ShopPolicy": [
                314
            ],
            "on_UrlRedirect": [
                339
            ],
            "on_Video": [
                344
            ],
            "__typename": [
                319
            ]
        },
        "OnlineStorePublishable": {
            "onlineStoreUrl": [
                333
            ],
            "on_Article": [
                4
            ],
            "on_Blog": [
                16
            ],
            "on_Collection": [
                106
            ],
            "on_Page": [
                248
            ],
            "on_Product": [
                262
            ],
            "__typename": [
                319
            ]
        },
        "Order": {
            "billingAddress": [
                197
            ],
            "cancelReason": [
                239
            ],
            "canceledAt": [
                150
            ],
            "currencyCode": [
                125
            ],
            "currentSubtotalPrice": [
                234
            ],
            "currentTotalDuties": [
                234
            ],
            "currentTotalPrice": [
                234
            ],
            "currentTotalTax": [
                234
            ],
            "customAttributes": [
                9
            ],
            "customerLocale": [
                319
            ],
            "customerUrl": [
                333
            ],
            "discountApplications": [
                159,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "edited": [
                20
            ],
            "email": [
                319
            ],
            "financialStatus": [
                242
            ],
            "fulfillmentStatus": [
                243
            ],
            "id": [
                181
            ],
            "lineItems": [
                245,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "name": [
                319
            ],
            "orderNumber": [
                187
            ],
            "originalTotalDuties": [
                234
            ],
            "originalTotalPrice": [
                234
            ],
            "phone": [
                319
            ],
            "processedAt": [
                150
            ],
            "shippingAddress": [
                197
            ],
            "shippingDiscountAllocations": [
                156
            ],
            "statusUrl": [
                333
            ],
            "subtotalPrice": [
                234
            ],
            "subtotalPriceV2": [
                234
            ],
            "successfulFulfillments": [
                171,
                {
                    "first": [
                        187
                    ]
                }
            ],
            "totalPrice": [
                234
            ],
            "totalPriceV2": [
                234
            ],
            "totalRefunded": [
                234
            ],
            "totalRefundedV2": [
                234
            ],
            "totalShippingPrice": [
                234
            ],
            "totalShippingPriceV2": [
                234
            ],
            "totalTax": [
                234
            ],
            "totalTaxV2": [
                234
            ],
            "__typename": [
                319
            ]
        },
        "OrderCancelReason": {},
        "OrderConnection": {
            "edges": [
                241
            ],
            "nodes": [
                238
            ],
            "pageInfo": [
                251
            ],
            "totalCount": [
                338
            ],
            "__typename": [
                319
            ]
        },
        "OrderEdge": {
            "cursor": [
                319
            ],
            "node": [
                238
            ],
            "__typename": [
                319
            ]
        },
        "OrderFinancialStatus": {},
        "OrderFulfillmentStatus": {},
        "OrderLineItem": {
            "currentQuantity": [
                187
            ],
            "customAttributes": [
                9
            ],
            "discountAllocations": [
                156
            ],
            "discountedTotalPrice": [
                234
            ],
            "originalTotalPrice": [
                234
            ],
            "quantity": [
                187
            ],
            "title": [
                319
            ],
            "variant": [
                273
            ],
            "__typename": [
                319
            ]
        },
        "OrderLineItemConnection": {
            "edges": [
                246
            ],
            "nodes": [
                244
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "OrderLineItemEdge": {
            "cursor": [
                319
            ],
            "node": [
                244
            ],
            "__typename": [
                319
            ]
        },
        "OrderSortKeys": {},
        "Page": {
            "body": [
                178
            ],
            "bodySummary": [
                319
            ],
            "createdAt": [
                150
            ],
            "handle": [
                319
            ],
            "id": [
                181
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                333
            ],
            "seo": [
                277
            ],
            "title": [
                319
            ],
            "trackingParameters": [
                319
            ],
            "updatedAt": [
                150
            ],
            "__typename": [
                319
            ]
        },
        "PageConnection": {
            "edges": [
                250
            ],
            "nodes": [
                248
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "PageEdge": {
            "cursor": [
                319
            ],
            "node": [
                248
            ],
            "__typename": [
                319
            ]
        },
        "PageInfo": {
            "endCursor": [
                319
            ],
            "hasNextPage": [
                20
            ],
            "hasPreviousPage": [
                20
            ],
            "startCursor": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "PageSortKeys": {},
        "Payment": {
            "amount": [
                234
            ],
            "amountV2": [
                234
            ],
            "billingAddress": [
                197
            ],
            "checkout": [
                76
            ],
            "creditCard": [
                121
            ],
            "errorMessage": [
                319
            ],
            "id": [
                181
            ],
            "idempotencyKey": [
                319
            ],
            "nextActionUrl": [
                333
            ],
            "ready": [
                20
            ],
            "test": [
                20
            ],
            "transaction": [
                330
            ],
            "__typename": [
                319
            ]
        },
        "PaymentSettings": {
            "acceptedCardBrands": [
                24
            ],
            "cardVaultUrl": [
                333
            ],
            "countryCode": [
                120
            ],
            "currencyCode": [
                125
            ],
            "enabledPresentmentCurrencies": [
                125
            ],
            "shopifyPaymentsAccountId": [
                319
            ],
            "supportedDigitalWallets": [
                155
            ],
            "__typename": [
                319
            ]
        },
        "PaymentTokenType": {},
        "PredictiveSearchLimitScope": {},
        "PredictiveSearchResult": {
            "articles": [
                4
            ],
            "collections": [
                106
            ],
            "pages": [
                248
            ],
            "products": [
                262
            ],
            "queries": [
                280
            ],
            "__typename": [
                319
            ]
        },
        "PredictiveSearchType": {},
        "PriceRangeFilter": {
            "max": [
                170
            ],
            "min": [
                170
            ],
            "__typename": [
                319
            ]
        },
        "PricingPercentageValue": {
            "percentage": [
                170
            ],
            "__typename": [
                319
            ]
        },
        "PricingValue": {
            "on_MoneyV2": [
                234
            ],
            "on_PricingPercentageValue": [
                260
            ],
            "__typename": [
                319
            ]
        },
        "Product": {
            "availableForSale": [
                20
            ],
            "collections": [
                107,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "compareAtPriceRange": [
                270
            ],
            "createdAt": [
                150
            ],
            "description": [
                319,
                {
                    "truncateAt": [
                        187
                    ]
                }
            ],
            "descriptionHtml": [
                178
            ],
            "featuredImage": [
                182
            ],
            "handle": [
                319
            ],
            "id": [
                181
            ],
            "images": [
                183,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        267
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "isGiftCard": [
                20
            ],
            "media": [
                204,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        268
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                333
            ],
            "options": [
                269,
                {
                    "first": [
                        187
                    ]
                }
            ],
            "priceRange": [
                270
            ],
            "productType": [
                319
            ],
            "publishedAt": [
                150
            ],
            "requiresSellingPlan": [
                20
            ],
            "sellingPlanGroups": [
                304,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "seo": [
                277
            ],
            "tags": [
                319
            ],
            "title": [
                319
            ],
            "totalInventory": [
                187
            ],
            "trackingParameters": [
                319
            ],
            "updatedAt": [
                150
            ],
            "variantBySelectedOptions": [
                273,
                {
                    "selectedOptions": [
                        289,
                        "[SelectedOptionInput!]!"
                    ]
                }
            ],
            "variants": [
                274,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        276
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "vendor": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "ProductCollectionSortKeys": {},
        "ProductConnection": {
            "edges": [
                265
            ],
            "filters": [
                167
            ],
            "nodes": [
                262
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "ProductEdge": {
            "cursor": [
                319
            ],
            "node": [
                262
            ],
            "__typename": [
                319
            ]
        },
        "ProductFilter": {
            "available": [
                20
            ],
            "price": [
                259
            ],
            "productMetafield": [
                219
            ],
            "productType": [
                319
            ],
            "productVendor": [
                319
            ],
            "tag": [
                319
            ],
            "variantMetafield": [
                219
            ],
            "variantOption": [
                343
            ],
            "__typename": [
                319
            ]
        },
        "ProductImageSortKeys": {},
        "ProductMediaSortKeys": {},
        "ProductOption": {
            "id": [
                181
            ],
            "name": [
                319
            ],
            "values": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "ProductPriceRange": {
            "maxVariantPrice": [
                234
            ],
            "minVariantPrice": [
                234
            ],
            "__typename": [
                319
            ]
        },
        "ProductRecommendationIntent": {},
        "ProductSortKeys": {},
        "ProductVariant": {
            "availableForSale": [
                20
            ],
            "barcode": [
                319
            ],
            "compareAtPrice": [
                234
            ],
            "compareAtPriceV2": [
                234
            ],
            "currentlyNotInStock": [
                20
            ],
            "id": [
                181
            ],
            "image": [
                182
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "price": [
                234
            ],
            "priceV2": [
                234
            ],
            "product": [
                262
            ],
            "quantityAvailable": [
                187
            ],
            "requiresShipping": [
                20
            ],
            "selectedOptions": [
                288
            ],
            "sellingPlanAllocations": [
                292,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "sku": [
                319
            ],
            "storeAvailability": [
                317,
                {
                    "near": [
                        177
                    ],
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "title": [
                319
            ],
            "unitPrice": [
                234
            ],
            "unitPriceMeasurement": [
                334
            ],
            "weight": [
                170
            ],
            "weightUnit": [
                346
            ],
            "__typename": [
                319
            ]
        },
        "ProductVariantConnection": {
            "edges": [
                275
            ],
            "nodes": [
                273
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "ProductVariantEdge": {
            "cursor": [
                319
            ],
            "node": [
                273
            ],
            "__typename": [
                319
            ]
        },
        "ProductVariantSortKeys": {},
        "SEO": {
            "description": [
                319
            ],
            "title": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "ScriptDiscountApplication": {
            "allocationMethod": [
                158
            ],
            "targetSelection": [
                161
            ],
            "targetType": [
                162
            ],
            "title": [
                319
            ],
            "value": [
                261
            ],
            "__typename": [
                319
            ]
        },
        "SearchPrefixQueryType": {},
        "SearchQuerySuggestion": {
            "styledText": [
                319
            ],
            "text": [
                319
            ],
            "trackingParameters": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "SearchResultItem": {
            "on_Article": [
                4
            ],
            "on_Page": [
                248
            ],
            "on_Product": [
                262
            ],
            "on_HasMetafields": [
                179
            ],
            "on_Node": [
                236
            ],
            "on_OnlineStorePublishable": [
                237
            ],
            "on_Trackable": [
                329
            ],
            "__typename": [
                319
            ]
        },
        "SearchResultItemConnection": {
            "edges": [
                283
            ],
            "nodes": [
                281
            ],
            "pageInfo": [
                251
            ],
            "productFilters": [
                167
            ],
            "totalCount": [
                187
            ],
            "__typename": [
                319
            ]
        },
        "SearchResultItemEdge": {
            "cursor": [
                319
            ],
            "node": [
                281
            ],
            "__typename": [
                319
            ]
        },
        "SearchSortKeys": {},
        "SearchType": {},
        "SearchUnavailableProductsType": {},
        "SearchableField": {},
        "SelectedOption": {
            "name": [
                319
            ],
            "value": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "SelectedOptionInput": {
            "name": [
                319
            ],
            "value": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlan": {
            "checkoutCharge": [
                295
            ],
            "description": [
                319
            ],
            "id": [
                181
            ],
            "name": [
                319
            ],
            "options": [
                307
            ],
            "priceAdjustments": [
                309
            ],
            "recurringDeliveries": [
                20
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanAllocation": {
            "checkoutChargeAmount": [
                234
            ],
            "priceAdjustments": [
                294
            ],
            "remainingBalanceChargeAmount": [
                234
            ],
            "sellingPlan": [
                290
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanAllocationConnection": {
            "edges": [
                293
            ],
            "nodes": [
                291
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanAllocationEdge": {
            "cursor": [
                319
            ],
            "node": [
                291
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanAllocationPriceAdjustment": {
            "compareAtPrice": [
                234
            ],
            "perDeliveryPrice": [
                234
            ],
            "price": [
                234
            ],
            "unitPrice": [
                234
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanCheckoutCharge": {
            "type": [
                297
            ],
            "value": [
                298
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanCheckoutChargePercentageValue": {
            "percentage": [
                170
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanCheckoutChargeType": {},
        "SellingPlanCheckoutChargeValue": {
            "on_MoneyV2": [
                234
            ],
            "on_SellingPlanCheckoutChargePercentageValue": [
                296
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanConnection": {
            "edges": [
                300
            ],
            "nodes": [
                290
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanEdge": {
            "cursor": [
                319
            ],
            "node": [
                290
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanFixedAmountPriceAdjustment": {
            "adjustmentAmount": [
                234
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanFixedPriceAdjustment": {
            "price": [
                234
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanGroup": {
            "appName": [
                319
            ],
            "name": [
                319
            ],
            "options": [
                306
            ],
            "sellingPlans": [
                299,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanGroupConnection": {
            "edges": [
                305
            ],
            "nodes": [
                303
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanGroupEdge": {
            "cursor": [
                319
            ],
            "node": [
                303
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanGroupOption": {
            "name": [
                319
            ],
            "values": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanOption": {
            "name": [
                319
            ],
            "value": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanPercentagePriceAdjustment": {
            "adjustmentPercentage": [
                187
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanPriceAdjustment": {
            "adjustmentValue": [
                310
            ],
            "orderCount": [
                187
            ],
            "__typename": [
                319
            ]
        },
        "SellingPlanPriceAdjustmentValue": {
            "on_SellingPlanFixedAmountPriceAdjustment": [
                301
            ],
            "on_SellingPlanFixedPriceAdjustment": [
                302
            ],
            "on_SellingPlanPercentagePriceAdjustment": [
                308
            ],
            "__typename": [
                319
            ]
        },
        "ShippingRate": {
            "handle": [
                319
            ],
            "price": [
                234
            ],
            "priceV2": [
                234
            ],
            "title": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "Shop": {
            "brand": [
                21
            ],
            "description": [
                319
            ],
            "id": [
                181
            ],
            "metafield": [
                216,
                {
                    "key": [
                        319,
                        "String!"
                    ],
                    "namespace": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                216,
                {
                    "identifiers": [
                        180,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "moneyFormat": [
                319
            ],
            "name": [
                319
            ],
            "paymentSettings": [
                254
            ],
            "primaryDomain": [
                165
            ],
            "privacyPolicy": [
                314
            ],
            "refundPolicy": [
                314
            ],
            "shippingPolicy": [
                314
            ],
            "shipsToCountries": [
                120
            ],
            "subscriptionPolicy": [
                315
            ],
            "termsOfService": [
                314
            ],
            "__typename": [
                319
            ]
        },
        "ShopPayWalletContentInput": {
            "billingAddress": [
                200
            ],
            "sessionToken": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "ShopPolicy": {
            "body": [
                319
            ],
            "handle": [
                319
            ],
            "id": [
                181
            ],
            "title": [
                319
            ],
            "url": [
                333
            ],
            "__typename": [
                319
            ]
        },
        "ShopPolicyWithDefault": {
            "body": [
                319
            ],
            "handle": [
                319
            ],
            "id": [
                181
            ],
            "title": [
                319
            ],
            "url": [
                333
            ],
            "__typename": [
                319
            ]
        },
        "StoreAvailability": {
            "available": [
                20
            ],
            "location": [
                192
            ],
            "pickUpTime": [
                319
            ],
            "quantityAvailable": [
                187
            ],
            "__typename": [
                319
            ]
        },
        "StoreAvailabilityConnection": {
            "edges": [
                318
            ],
            "nodes": [
                316
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "StoreAvailabilityEdge": {
            "cursor": [
                319
            ],
            "node": [
                316
            ],
            "__typename": [
                319
            ]
        },
        "String": {},
        "StringConnection": {
            "edges": [
                321
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "StringEdge": {
            "cursor": [
                319
            ],
            "node": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "SubmissionError": {
            "code": [
                323
            ],
            "message": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "SubmissionErrorCode": {},
        "SubmitAlreadyAccepted": {
            "attemptId": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "SubmitFailed": {
            "checkoutUrl": [
                333
            ],
            "errors": [
                322
            ],
            "__typename": [
                319
            ]
        },
        "SubmitSuccess": {
            "attemptId": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "SubmitThrottled": {
            "pollAfter": [
                150
            ],
            "__typename": [
                319
            ]
        },
        "TokenizedPaymentInputV3": {
            "type": [
                255
            ],
            "paymentAmount": [
                233
            ],
            "idempotencyKey": [
                319
            ],
            "billingAddress": [
                200
            ],
            "paymentData": [
                319
            ],
            "test": [
                20
            ],
            "identifier": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "Trackable": {
            "trackingParameters": [
                319
            ],
            "on_Article": [
                4
            ],
            "on_Collection": [
                106
            ],
            "on_Page": [
                248
            ],
            "on_Product": [
                262
            ],
            "on_SearchQuerySuggestion": [
                280
            ],
            "__typename": [
                319
            ]
        },
        "Transaction": {
            "amount": [
                234
            ],
            "amountV2": [
                234
            ],
            "kind": [
                331
            ],
            "status": [
                332
            ],
            "statusV2": [
                332
            ],
            "test": [
                20
            ],
            "__typename": [
                319
            ]
        },
        "TransactionKind": {},
        "TransactionStatus": {},
        "URL": {},
        "UnitPriceMeasurement": {
            "measuredType": [
                335
            ],
            "quantityUnit": [
                336
            ],
            "quantityValue": [
                170
            ],
            "referenceUnit": [
                336
            ],
            "referenceValue": [
                187
            ],
            "__typename": [
                319
            ]
        },
        "UnitPriceMeasurementMeasuredType": {},
        "UnitPriceMeasurementMeasuredUnit": {},
        "UnitSystem": {},
        "UnsignedInt64": {},
        "UrlRedirect": {
            "id": [
                181
            ],
            "path": [
                319
            ],
            "target": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "UrlRedirectConnection": {
            "edges": [
                341
            ],
            "nodes": [
                339
            ],
            "pageInfo": [
                251
            ],
            "__typename": [
                319
            ]
        },
        "UrlRedirectEdge": {
            "cursor": [
                319
            ],
            "node": [
                339
            ],
            "__typename": [
                319
            ]
        },
        "UserError": {
            "field": [
                319
            ],
            "message": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "VariantOptionFilter": {
            "name": [
                319
            ],
            "value": [
                319
            ],
            "__typename": [
                319
            ]
        },
        "Video": {
            "alt": [
                319
            ],
            "id": [
                181
            ],
            "mediaContentType": [
                205
            ],
            "presentation": [
                209
            ],
            "previewImage": [
                182
            ],
            "sources": [
                345
            ],
            "__typename": [
                319
            ]
        },
        "VideoSource": {
            "format": [
                319
            ],
            "height": [
                187
            ],
            "mimeType": [
                319
            ],
            "url": [
                319
            ],
            "width": [
                187
            ],
            "__typename": [
                319
            ]
        },
        "WeightUnit": {},
        "Query": {
            "article": [
                4,
                {
                    "id": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "articles": [
                6,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        8
                    ],
                    "reverse": [
                        20
                    ],
                    "query": [
                        319
                    ]
                }
            ],
            "blog": [
                16,
                {
                    "id": [
                        181
                    ],
                    "handle": [
                        319
                    ]
                }
            ],
            "blogByHandle": [
                16,
                {
                    "handle": [
                        319,
                        "String!"
                    ]
                }
            ],
            "blogs": [
                17,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        19
                    ],
                    "reverse": [
                        20
                    ],
                    "query": [
                        319
                    ]
                }
            ],
            "cart": [
                25,
                {
                    "id": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "cartCompletionAttempt": [
                35,
                {
                    "attemptId": [
                        319,
                        "String!"
                    ]
                }
            ],
            "collection": [
                106,
                {
                    "handle": [
                        319
                    ],
                    "id": [
                        181
                    ]
                }
            ],
            "collectionByHandle": [
                106,
                {
                    "handle": [
                        319,
                        "String!"
                    ]
                }
            ],
            "collections": [
                107,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        109
                    ],
                    "reverse": [
                        20
                    ],
                    "query": [
                        319
                    ]
                }
            ],
            "customer": [
                126,
                {
                    "customerAccessToken": [
                        319,
                        "String!"
                    ]
                }
            ],
            "localization": [
                191
            ],
            "locations": [
                194,
                {
                    "near": [
                        177
                    ],
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        196
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "menu": [
                211,
                {
                    "handle": [
                        319,
                        "String!"
                    ]
                }
            ],
            "metaobject": [
                226,
                {
                    "id": [
                        181
                    ],
                    "handle": [
                        230
                    ]
                }
            ],
            "metaobjects": [
                227,
                {
                    "type": [
                        319,
                        "String!"
                    ],
                    "sortKey": [
                        319
                    ],
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "node": [
                236,
                {
                    "id": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                236,
                {
                    "ids": [
                        181,
                        "[ID!]!"
                    ]
                }
            ],
            "page": [
                248,
                {
                    "id": [
                        181
                    ],
                    "handle": [
                        319
                    ]
                }
            ],
            "pageByHandle": [
                248,
                {
                    "handle": [
                        319,
                        "String!"
                    ]
                }
            ],
            "pages": [
                249,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        252
                    ],
                    "reverse": [
                        20
                    ],
                    "query": [
                        319
                    ]
                }
            ],
            "predictiveSearch": [
                257,
                {
                    "limit": [
                        187
                    ],
                    "limitScope": [
                        256
                    ],
                    "query": [
                        319,
                        "String!"
                    ],
                    "searchableFields": [
                        287,
                        "[SearchableField!]"
                    ],
                    "types": [
                        258,
                        "[PredictiveSearchType!]"
                    ],
                    "unavailableProducts": [
                        286
                    ]
                }
            ],
            "product": [
                262,
                {
                    "handle": [
                        319
                    ],
                    "id": [
                        181
                    ]
                }
            ],
            "productByHandle": [
                262,
                {
                    "handle": [
                        319,
                        "String!"
                    ]
                }
            ],
            "productRecommendations": [
                262,
                {
                    "intent": [
                        271
                    ],
                    "productId": [
                        181,
                        "ID!"
                    ]
                }
            ],
            "productTags": [
                320,
                {
                    "first": [
                        187,
                        "Int!"
                    ]
                }
            ],
            "productTypes": [
                320,
                {
                    "first": [
                        187,
                        "Int!"
                    ]
                }
            ],
            "products": [
                264,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        272
                    ],
                    "reverse": [
                        20
                    ],
                    "query": [
                        319
                    ]
                }
            ],
            "publicApiVersions": [
                0
            ],
            "search": [
                282,
                {
                    "prefix": [
                        279
                    ],
                    "types": [
                        285,
                        "[SearchType!]"
                    ],
                    "unavailableProducts": [
                        286
                    ],
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "sortKey": [
                        284
                    ],
                    "reverse": [
                        20
                    ],
                    "query": [
                        319,
                        "String!"
                    ],
                    "productFilters": [
                        266,
                        "[ProductFilter!]"
                    ]
                }
            ],
            "shop": [
                312
            ],
            "urlRedirects": [
                340,
                {
                    "first": [
                        187
                    ],
                    "after": [
                        319
                    ],
                    "last": [
                        187
                    ],
                    "before": [
                        319
                    ],
                    "reverse": [
                        20
                    ],
                    "query": [
                        319
                    ]
                }
            ],
            "__typename": [
                319
            ]
        }
    }
}