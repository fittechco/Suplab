
    import { FieldsSelection, GraphqlOperation, ClientOptions, ClientRequestConfig, Observable } from '@gqlts/runtime'
    import { Client as WSClient } from "graphql-ws"
    import { AxiosInstance } from 'axios'
    export * from './schema'
    import {QueryRootRequest,QueryRoot,MutationRequest,Mutation} from './schema'
    export declare const createClient:(options?: ClientOptions) => Client
    export declare const everything: { __scalar: boolean }
    export declare const version: string
  


    export type Head<T extends unknown | unknown[]> = T extends [infer H, ...unknown[]] ? H : never
    export interface GraphQLError {
        message: string
        code?: string
        locations?: {
            line: number
            column: number
        }[]
        path?: string | number[]
        extensions?: {
          [key: string]: unknown
        }
        [key: string]: unknown
    }

    export interface Extensions {
        [key: string]: unknown
    }

    export interface GraphqlResponse<D = any, E = GraphQLError[], X = Extensions> {
      data?: D;
      errors?: E;
      extensions?: X;
    }

    export interface Client<FI =AxiosInstance, RC =ClientRequestConfig> {
        wsClient?: WSClient
        fetcherInstance?: FI | undefined
        fetcherMethod: (operation: GraphqlOperation | GraphqlOperation[], config?: RC) => Promise<any>
        
        query<R extends QueryRootRequest>(
            request: R & { __name?: string },
            config?: RC,
        ): Promise<GraphqlResponse<FieldsSelection<QueryRoot, R>>>
        
        mutation<R extends MutationRequest>(
            request: R & { __name?: string },
            config?: RC,
        ): Promise<GraphqlResponse<FieldsSelection<Mutation, R>>>
        
    }
    


        export type QueryResult<fields extends QueryRootRequest> = GraphqlResponse<FieldsSelection<QueryRoot, fields>>

        export declare const generateQueryOp: (fields: QueryRootRequest & { __name?: string }) => GraphqlOperation
        export type MutationResult<fields extends MutationRequest> = GraphqlResponse<FieldsSelection<Mutation, fields>>

        export declare const generateMutationOp: (fields: MutationRequest & { __name?: string }) => GraphqlOperation

export declare const enumArticleSortKeys: {
  readonly ID: 'ID',
  readonly RELEVANCE: 'RELEVANCE',
  readonly TITLE: 'TITLE',
  readonly BLOG_TITLE: 'BLOG_TITLE',
  readonly AUTHOR: 'AUTHOR',
  readonly UPDATED_AT: 'UPDATED_AT',
  readonly PUBLISHED_AT: 'PUBLISHED_AT'
}

export declare const enumBlogSortKeys: {
  readonly ID: 'ID',
  readonly RELEVANCE: 'RELEVANCE',
  readonly TITLE: 'TITLE',
  readonly HANDLE: 'HANDLE'
}

export declare const enumCardBrand: {
  readonly VISA: 'VISA',
  readonly MASTERCARD: 'MASTERCARD',
  readonly DISCOVER: 'DISCOVER',
  readonly AMERICAN_EXPRESS: 'AMERICAN_EXPRESS',
  readonly DINERS_CLUB: 'DINERS_CLUB',
  readonly JCB: 'JCB'
}

export declare const enumCartCardSource: {
  readonly SAVED_CREDIT_CARD: 'SAVED_CREDIT_CARD'
}

export declare const enumCartErrorCode: {
  readonly INVALID: 'INVALID',
  readonly LESS_THAN: 'LESS_THAN',
  readonly INVALID_MERCHANDISE_LINE: 'INVALID_MERCHANDISE_LINE',
  readonly MISSING_DISCOUNT_CODE: 'MISSING_DISCOUNT_CODE',
  readonly MISSING_NOTE: 'MISSING_NOTE',
  readonly INVALID_DELIVERY_GROUP: 'INVALID_DELIVERY_GROUP',
  readonly INVALID_DELIVERY_OPTION: 'INVALID_DELIVERY_OPTION',
  readonly INVALID_PAYMENT: 'INVALID_PAYMENT',
  readonly INVALID_PAYMENT_EMPTY_CART: 'INVALID_PAYMENT_EMPTY_CART',
  readonly PAYMENT_METHOD_NOT_SUPPORTED: 'PAYMENT_METHOD_NOT_SUPPORTED',
  readonly INVALID_METAFIELDS: 'INVALID_METAFIELDS'
}

export declare const enumCheckoutErrorCode: {
  readonly BLANK: 'BLANK',
  readonly INVALID: 'INVALID',
  readonly TOO_LONG: 'TOO_LONG',
  readonly PRESENT: 'PRESENT',
  readonly LESS_THAN: 'LESS_THAN',
  readonly LESS_THAN_OR_EQUAL_TO: 'LESS_THAN_OR_EQUAL_TO',
  readonly GREATER_THAN_OR_EQUAL_TO: 'GREATER_THAN_OR_EQUAL_TO',
  readonly ALREADY_COMPLETED: 'ALREADY_COMPLETED',
  readonly LOCKED: 'LOCKED',
  readonly NOT_SUPPORTED: 'NOT_SUPPORTED',
  readonly BAD_DOMAIN: 'BAD_DOMAIN',
  readonly INVALID_FOR_COUNTRY: 'INVALID_FOR_COUNTRY',
  readonly INVALID_FOR_COUNTRY_AND_PROVINCE: 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  readonly INVALID_STATE_IN_COUNTRY: 'INVALID_STATE_IN_COUNTRY',
  readonly INVALID_PROVINCE_IN_COUNTRY: 'INVALID_PROVINCE_IN_COUNTRY',
  readonly INVALID_REGION_IN_COUNTRY: 'INVALID_REGION_IN_COUNTRY',
  readonly SHIPPING_RATE_EXPIRED: 'SHIPPING_RATE_EXPIRED',
  readonly GIFT_CARD_UNUSABLE: 'GIFT_CARD_UNUSABLE',
  readonly GIFT_CARD_DISABLED: 'GIFT_CARD_DISABLED',
  readonly GIFT_CARD_CODE_INVALID: 'GIFT_CARD_CODE_INVALID',
  readonly GIFT_CARD_ALREADY_APPLIED: 'GIFT_CARD_ALREADY_APPLIED',
  readonly GIFT_CARD_CURRENCY_MISMATCH: 'GIFT_CARD_CURRENCY_MISMATCH',
  readonly GIFT_CARD_EXPIRED: 'GIFT_CARD_EXPIRED',
  readonly GIFT_CARD_DEPLETED: 'GIFT_CARD_DEPLETED',
  readonly GIFT_CARD_NOT_FOUND: 'GIFT_CARD_NOT_FOUND',
  readonly CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE: 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
  readonly DISCOUNT_EXPIRED: 'DISCOUNT_EXPIRED',
  readonly DISCOUNT_DISABLED: 'DISCOUNT_DISABLED',
  readonly DISCOUNT_LIMIT_REACHED: 'DISCOUNT_LIMIT_REACHED',
  readonly HIGHER_VALUE_DISCOUNT_APPLIED: 'HIGHER_VALUE_DISCOUNT_APPLIED',
  readonly MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED: 'MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED',
  readonly DISCOUNT_NOT_FOUND: 'DISCOUNT_NOT_FOUND',
  readonly CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE: 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
  readonly DISCOUNT_CODE_APPLICATION_FAILED: 'DISCOUNT_CODE_APPLICATION_FAILED',
  readonly EMPTY: 'EMPTY',
  readonly NOT_ENOUGH_IN_STOCK: 'NOT_ENOUGH_IN_STOCK',
  readonly MISSING_PAYMENT_INPUT: 'MISSING_PAYMENT_INPUT',
  readonly TOTAL_PRICE_MISMATCH: 'TOTAL_PRICE_MISMATCH',
  readonly LINE_ITEM_NOT_FOUND: 'LINE_ITEM_NOT_FOUND',
  readonly UNABLE_TO_APPLY: 'UNABLE_TO_APPLY',
  readonly DISCOUNT_ALREADY_APPLIED: 'DISCOUNT_ALREADY_APPLIED',
  readonly THROTTLED_DURING_CHECKOUT: 'THROTTLED_DURING_CHECKOUT',
  readonly EXPIRED_QUEUE_TOKEN: 'EXPIRED_QUEUE_TOKEN',
  readonly INVALID_QUEUE_TOKEN: 'INVALID_QUEUE_TOKEN',
  readonly INVALID_COUNTRY_AND_CURRENCY: 'INVALID_COUNTRY_AND_CURRENCY',
  readonly PRODUCT_NOT_AVAILABLE: 'PRODUCT_NOT_AVAILABLE'
}

export declare const enumCollectionSortKeys: {
  readonly ID: 'ID',
  readonly RELEVANCE: 'RELEVANCE',
  readonly TITLE: 'TITLE',
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumCompletionErrorCode: {
  readonly ERROR: 'ERROR',
  readonly INVENTORY_RESERVATION_ERROR: 'INVENTORY_RESERVATION_ERROR',
  readonly PAYMENT_ERROR: 'PAYMENT_ERROR',
  readonly PAYMENT_TRANSIENT_ERROR: 'PAYMENT_TRANSIENT_ERROR',
  readonly PAYMENT_AMOUNT_TOO_SMALL: 'PAYMENT_AMOUNT_TOO_SMALL',
  readonly PAYMENT_GATEWAY_NOT_ENABLED_ERROR: 'PAYMENT_GATEWAY_NOT_ENABLED_ERROR',
  readonly PAYMENT_INSUFFICIENT_FUNDS: 'PAYMENT_INSUFFICIENT_FUNDS',
  readonly PAYMENT_INVALID_PAYMENT_METHOD: 'PAYMENT_INVALID_PAYMENT_METHOD',
  readonly PAYMENT_INVALID_CURRENCY: 'PAYMENT_INVALID_CURRENCY',
  readonly PAYMENT_INVALID_CREDIT_CARD: 'PAYMENT_INVALID_CREDIT_CARD',
  readonly PAYMENT_INVALID_BILLING_ADDRESS: 'PAYMENT_INVALID_BILLING_ADDRESS',
  readonly PAYMENT_CARD_DECLINED: 'PAYMENT_CARD_DECLINED',
  readonly PAYMENT_CALL_ISSUER: 'PAYMENT_CALL_ISSUER'
}

export declare const enumCountryCode: {
  readonly AF: 'AF',
  readonly AX: 'AX',
  readonly AL: 'AL',
  readonly DZ: 'DZ',
  readonly AD: 'AD',
  readonly AO: 'AO',
  readonly AI: 'AI',
  readonly AG: 'AG',
  readonly AR: 'AR',
  readonly AM: 'AM',
  readonly AW: 'AW',
  readonly AC: 'AC',
  readonly AU: 'AU',
  readonly AT: 'AT',
  readonly AZ: 'AZ',
  readonly BS: 'BS',
  readonly BH: 'BH',
  readonly BD: 'BD',
  readonly BB: 'BB',
  readonly BY: 'BY',
  readonly BE: 'BE',
  readonly BZ: 'BZ',
  readonly BJ: 'BJ',
  readonly BM: 'BM',
  readonly BT: 'BT',
  readonly BO: 'BO',
  readonly BA: 'BA',
  readonly BW: 'BW',
  readonly BV: 'BV',
  readonly BR: 'BR',
  readonly IO: 'IO',
  readonly BN: 'BN',
  readonly BG: 'BG',
  readonly BF: 'BF',
  readonly BI: 'BI',
  readonly KH: 'KH',
  readonly CA: 'CA',
  readonly CV: 'CV',
  readonly BQ: 'BQ',
  readonly KY: 'KY',
  readonly CF: 'CF',
  readonly TD: 'TD',
  readonly CL: 'CL',
  readonly CN: 'CN',
  readonly CX: 'CX',
  readonly CC: 'CC',
  readonly CO: 'CO',
  readonly KM: 'KM',
  readonly CG: 'CG',
  readonly CD: 'CD',
  readonly CK: 'CK',
  readonly CR: 'CR',
  readonly HR: 'HR',
  readonly CU: 'CU',
  readonly CW: 'CW',
  readonly CY: 'CY',
  readonly CZ: 'CZ',
  readonly CI: 'CI',
  readonly DK: 'DK',
  readonly DJ: 'DJ',
  readonly DM: 'DM',
  readonly DO: 'DO',
  readonly EC: 'EC',
  readonly EG: 'EG',
  readonly SV: 'SV',
  readonly GQ: 'GQ',
  readonly ER: 'ER',
  readonly EE: 'EE',
  readonly SZ: 'SZ',
  readonly ET: 'ET',
  readonly FK: 'FK',
  readonly FO: 'FO',
  readonly FJ: 'FJ',
  readonly FI: 'FI',
  readonly FR: 'FR',
  readonly GF: 'GF',
  readonly PF: 'PF',
  readonly TF: 'TF',
  readonly GA: 'GA',
  readonly GM: 'GM',
  readonly GE: 'GE',
  readonly DE: 'DE',
  readonly GH: 'GH',
  readonly GI: 'GI',
  readonly GR: 'GR',
  readonly GL: 'GL',
  readonly GD: 'GD',
  readonly GP: 'GP',
  readonly GT: 'GT',
  readonly GG: 'GG',
  readonly GN: 'GN',
  readonly GW: 'GW',
  readonly GY: 'GY',
  readonly HT: 'HT',
  readonly HM: 'HM',
  readonly VA: 'VA',
  readonly HN: 'HN',
  readonly HK: 'HK',
  readonly HU: 'HU',
  readonly IS: 'IS',
  readonly IN: 'IN',
  readonly ID: 'ID',
  readonly IR: 'IR',
  readonly IQ: 'IQ',
  readonly IE: 'IE',
  readonly IM: 'IM',
  readonly IL: 'IL',
  readonly IT: 'IT',
  readonly JM: 'JM',
  readonly JP: 'JP',
  readonly JE: 'JE',
  readonly JO: 'JO',
  readonly KZ: 'KZ',
  readonly KE: 'KE',
  readonly KI: 'KI',
  readonly KP: 'KP',
  readonly XK: 'XK',
  readonly KW: 'KW',
  readonly KG: 'KG',
  readonly LA: 'LA',
  readonly LV: 'LV',
  readonly LB: 'LB',
  readonly LS: 'LS',
  readonly LR: 'LR',
  readonly LY: 'LY',
  readonly LI: 'LI',
  readonly LT: 'LT',
  readonly LU: 'LU',
  readonly MO: 'MO',
  readonly MG: 'MG',
  readonly MW: 'MW',
  readonly MY: 'MY',
  readonly MV: 'MV',
  readonly ML: 'ML',
  readonly MT: 'MT',
  readonly MQ: 'MQ',
  readonly MR: 'MR',
  readonly MU: 'MU',
  readonly YT: 'YT',
  readonly MX: 'MX',
  readonly MD: 'MD',
  readonly MC: 'MC',
  readonly MN: 'MN',
  readonly ME: 'ME',
  readonly MS: 'MS',
  readonly MA: 'MA',
  readonly MZ: 'MZ',
  readonly MM: 'MM',
  readonly NA: 'NA',
  readonly NR: 'NR',
  readonly NP: 'NP',
  readonly NL: 'NL',
  readonly AN: 'AN',
  readonly NC: 'NC',
  readonly NZ: 'NZ',
  readonly NI: 'NI',
  readonly NE: 'NE',
  readonly NG: 'NG',
  readonly NU: 'NU',
  readonly NF: 'NF',
  readonly MK: 'MK',
  readonly NO: 'NO',
  readonly OM: 'OM',
  readonly PK: 'PK',
  readonly PS: 'PS',
  readonly PA: 'PA',
  readonly PG: 'PG',
  readonly PY: 'PY',
  readonly PE: 'PE',
  readonly PH: 'PH',
  readonly PN: 'PN',
  readonly PL: 'PL',
  readonly PT: 'PT',
  readonly QA: 'QA',
  readonly CM: 'CM',
  readonly RE: 'RE',
  readonly RO: 'RO',
  readonly RU: 'RU',
  readonly RW: 'RW',
  readonly BL: 'BL',
  readonly SH: 'SH',
  readonly KN: 'KN',
  readonly LC: 'LC',
  readonly MF: 'MF',
  readonly PM: 'PM',
  readonly WS: 'WS',
  readonly SM: 'SM',
  readonly ST: 'ST',
  readonly SA: 'SA',
  readonly SN: 'SN',
  readonly RS: 'RS',
  readonly SC: 'SC',
  readonly SL: 'SL',
  readonly SG: 'SG',
  readonly SX: 'SX',
  readonly SK: 'SK',
  readonly SI: 'SI',
  readonly SB: 'SB',
  readonly SO: 'SO',
  readonly ZA: 'ZA',
  readonly GS: 'GS',
  readonly KR: 'KR',
  readonly SS: 'SS',
  readonly ES: 'ES',
  readonly LK: 'LK',
  readonly VC: 'VC',
  readonly SD: 'SD',
  readonly SR: 'SR',
  readonly SJ: 'SJ',
  readonly SE: 'SE',
  readonly CH: 'CH',
  readonly SY: 'SY',
  readonly TW: 'TW',
  readonly TJ: 'TJ',
  readonly TZ: 'TZ',
  readonly TH: 'TH',
  readonly TL: 'TL',
  readonly TG: 'TG',
  readonly TK: 'TK',
  readonly TO: 'TO',
  readonly TT: 'TT',
  readonly TA: 'TA',
  readonly TN: 'TN',
  readonly TR: 'TR',
  readonly TM: 'TM',
  readonly TC: 'TC',
  readonly TV: 'TV',
  readonly UG: 'UG',
  readonly UA: 'UA',
  readonly AE: 'AE',
  readonly GB: 'GB',
  readonly US: 'US',
  readonly UM: 'UM',
  readonly UY: 'UY',
  readonly UZ: 'UZ',
  readonly VU: 'VU',
  readonly VE: 'VE',
  readonly VN: 'VN',
  readonly VG: 'VG',
  readonly WF: 'WF',
  readonly EH: 'EH',
  readonly YE: 'YE',
  readonly ZM: 'ZM',
  readonly ZW: 'ZW',
  readonly ZZ: 'ZZ'
}

export declare const enumCropRegion: {
  readonly CENTER: 'CENTER',
  readonly TOP: 'TOP',
  readonly BOTTOM: 'BOTTOM',
  readonly LEFT: 'LEFT',
  readonly RIGHT: 'RIGHT'
}

export declare const enumCurrencyCode: {
  readonly USD: 'USD',
  readonly EUR: 'EUR',
  readonly GBP: 'GBP',
  readonly CAD: 'CAD',
  readonly AFN: 'AFN',
  readonly ALL: 'ALL',
  readonly DZD: 'DZD',
  readonly AOA: 'AOA',
  readonly ARS: 'ARS',
  readonly AMD: 'AMD',
  readonly AWG: 'AWG',
  readonly AUD: 'AUD',
  readonly BBD: 'BBD',
  readonly AZN: 'AZN',
  readonly BDT: 'BDT',
  readonly BSD: 'BSD',
  readonly BHD: 'BHD',
  readonly BIF: 'BIF',
  readonly BZD: 'BZD',
  readonly BMD: 'BMD',
  readonly BTN: 'BTN',
  readonly BAM: 'BAM',
  readonly BRL: 'BRL',
  readonly BOB: 'BOB',
  readonly BWP: 'BWP',
  readonly BND: 'BND',
  readonly BGN: 'BGN',
  readonly MMK: 'MMK',
  readonly KHR: 'KHR',
  readonly CVE: 'CVE',
  readonly KYD: 'KYD',
  readonly XAF: 'XAF',
  readonly CLP: 'CLP',
  readonly CNY: 'CNY',
  readonly COP: 'COP',
  readonly KMF: 'KMF',
  readonly CDF: 'CDF',
  readonly CRC: 'CRC',
  readonly HRK: 'HRK',
  readonly CZK: 'CZK',
  readonly DKK: 'DKK',
  readonly DOP: 'DOP',
  readonly XCD: 'XCD',
  readonly EGP: 'EGP',
  readonly ETB: 'ETB',
  readonly XPF: 'XPF',
  readonly FJD: 'FJD',
  readonly GMD: 'GMD',
  readonly GHS: 'GHS',
  readonly GTQ: 'GTQ',
  readonly GYD: 'GYD',
  readonly GEL: 'GEL',
  readonly HTG: 'HTG',
  readonly HNL: 'HNL',
  readonly HKD: 'HKD',
  readonly HUF: 'HUF',
  readonly ISK: 'ISK',
  readonly INR: 'INR',
  readonly IDR: 'IDR',
  readonly ILS: 'ILS',
  readonly IQD: 'IQD',
  readonly JMD: 'JMD',
  readonly JPY: 'JPY',
  readonly JEP: 'JEP',
  readonly JOD: 'JOD',
  readonly KZT: 'KZT',
  readonly KES: 'KES',
  readonly KWD: 'KWD',
  readonly KGS: 'KGS',
  readonly LAK: 'LAK',
  readonly LVL: 'LVL',
  readonly LBP: 'LBP',
  readonly LSL: 'LSL',
  readonly LRD: 'LRD',
  readonly LTL: 'LTL',
  readonly MGA: 'MGA',
  readonly MKD: 'MKD',
  readonly MOP: 'MOP',
  readonly MWK: 'MWK',
  readonly MVR: 'MVR',
  readonly MXN: 'MXN',
  readonly MYR: 'MYR',
  readonly MUR: 'MUR',
  readonly MDL: 'MDL',
  readonly MAD: 'MAD',
  readonly MNT: 'MNT',
  readonly MZN: 'MZN',
  readonly NAD: 'NAD',
  readonly NPR: 'NPR',
  readonly ANG: 'ANG',
  readonly NZD: 'NZD',
  readonly NIO: 'NIO',
  readonly NGN: 'NGN',
  readonly NOK: 'NOK',
  readonly OMR: 'OMR',
  readonly PAB: 'PAB',
  readonly PKR: 'PKR',
  readonly PGK: 'PGK',
  readonly PYG: 'PYG',
  readonly PEN: 'PEN',
  readonly PHP: 'PHP',
  readonly PLN: 'PLN',
  readonly QAR: 'QAR',
  readonly RON: 'RON',
  readonly RUB: 'RUB',
  readonly RWF: 'RWF',
  readonly WST: 'WST',
  readonly SAR: 'SAR',
  readonly RSD: 'RSD',
  readonly SCR: 'SCR',
  readonly SGD: 'SGD',
  readonly SDG: 'SDG',
  readonly SYP: 'SYP',
  readonly ZAR: 'ZAR',
  readonly KRW: 'KRW',
  readonly SSP: 'SSP',
  readonly SBD: 'SBD',
  readonly LKR: 'LKR',
  readonly SRD: 'SRD',
  readonly SZL: 'SZL',
  readonly SEK: 'SEK',
  readonly CHF: 'CHF',
  readonly TWD: 'TWD',
  readonly THB: 'THB',
  readonly TZS: 'TZS',
  readonly TTD: 'TTD',
  readonly TND: 'TND',
  readonly TRY: 'TRY',
  readonly TMT: 'TMT',
  readonly UGX: 'UGX',
  readonly UAH: 'UAH',
  readonly AED: 'AED',
  readonly UYU: 'UYU',
  readonly UZS: 'UZS',
  readonly VUV: 'VUV',
  readonly VND: 'VND',
  readonly XOF: 'XOF',
  readonly YER: 'YER',
  readonly ZMW: 'ZMW',
  readonly BYN: 'BYN',
  readonly BYR: 'BYR',
  readonly DJF: 'DJF',
  readonly ERN: 'ERN',
  readonly FKP: 'FKP',
  readonly GIP: 'GIP',
  readonly GNF: 'GNF',
  readonly IRR: 'IRR',
  readonly KID: 'KID',
  readonly LYD: 'LYD',
  readonly MRU: 'MRU',
  readonly SLL: 'SLL',
  readonly SHP: 'SHP',
  readonly SOS: 'SOS',
  readonly STD: 'STD',
  readonly STN: 'STN',
  readonly TJS: 'TJS',
  readonly TOP: 'TOP',
  readonly VED: 'VED',
  readonly VEF: 'VEF',
  readonly VES: 'VES',
  readonly XXX: 'XXX'
}

export declare const enumCustomerErrorCode: {
  readonly BLANK: 'BLANK',
  readonly INVALID: 'INVALID',
  readonly TAKEN: 'TAKEN',
  readonly TOO_LONG: 'TOO_LONG',
  readonly TOO_SHORT: 'TOO_SHORT',
  readonly UNIDENTIFIED_CUSTOMER: 'UNIDENTIFIED_CUSTOMER',
  readonly CUSTOMER_DISABLED: 'CUSTOMER_DISABLED',
  readonly PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE: 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  readonly CONTAINS_HTML_TAGS: 'CONTAINS_HTML_TAGS',
  readonly CONTAINS_URL: 'CONTAINS_URL',
  readonly TOKEN_INVALID: 'TOKEN_INVALID',
  readonly ALREADY_ENABLED: 'ALREADY_ENABLED',
  readonly NOT_FOUND: 'NOT_FOUND',
  readonly BAD_DOMAIN: 'BAD_DOMAIN',
  readonly INVALID_MULTIPASS_REQUEST: 'INVALID_MULTIPASS_REQUEST'
}

export declare const enumDeliveryMethodType: {
  readonly SHIPPING: 'SHIPPING',
  readonly PICK_UP: 'PICK_UP',
  readonly RETAIL: 'RETAIL',
  readonly LOCAL: 'LOCAL',
  readonly PICKUP_POINT: 'PICKUP_POINT',
  readonly NONE: 'NONE'
}

export declare const enumDigitalWallet: {
  readonly APPLE_PAY: 'APPLE_PAY',
  readonly ANDROID_PAY: 'ANDROID_PAY',
  readonly GOOGLE_PAY: 'GOOGLE_PAY',
  readonly SHOPIFY_PAY: 'SHOPIFY_PAY'
}

export declare const enumDiscountApplicationAllocationMethod: {
  readonly ACROSS: 'ACROSS',
  readonly EACH: 'EACH',
  readonly ONE: 'ONE'
}

export declare const enumDiscountApplicationTargetSelection: {
  readonly ALL: 'ALL',
  readonly ENTITLED: 'ENTITLED',
  readonly EXPLICIT: 'EXPLICIT'
}

export declare const enumDiscountApplicationTargetType: {
  readonly LINE_ITEM: 'LINE_ITEM',
  readonly SHIPPING_LINE: 'SHIPPING_LINE'
}

export declare const enumFilterType: {
  readonly LIST: 'LIST',
  readonly PRICE_RANGE: 'PRICE_RANGE',
  readonly BOOLEAN: 'BOOLEAN'
}

export declare const enumImageContentType: {
  readonly PNG: 'PNG',
  readonly JPG: 'JPG',
  readonly WEBP: 'WEBP'
}

export declare const enumLanguageCode: {
  readonly AF: 'AF',
  readonly AK: 'AK',
  readonly AM: 'AM',
  readonly AR: 'AR',
  readonly AS: 'AS',
  readonly AZ: 'AZ',
  readonly BE: 'BE',
  readonly BG: 'BG',
  readonly BM: 'BM',
  readonly BN: 'BN',
  readonly BO: 'BO',
  readonly BR: 'BR',
  readonly BS: 'BS',
  readonly CA: 'CA',
  readonly CE: 'CE',
  readonly CKB: 'CKB',
  readonly CS: 'CS',
  readonly CY: 'CY',
  readonly DA: 'DA',
  readonly DE: 'DE',
  readonly DZ: 'DZ',
  readonly EE: 'EE',
  readonly EL: 'EL',
  readonly EN: 'EN',
  readonly EO: 'EO',
  readonly ES: 'ES',
  readonly ET: 'ET',
  readonly EU: 'EU',
  readonly FA: 'FA',
  readonly FF: 'FF',
  readonly FI: 'FI',
  readonly FIL: 'FIL',
  readonly FO: 'FO',
  readonly FR: 'FR',
  readonly FY: 'FY',
  readonly GA: 'GA',
  readonly GD: 'GD',
  readonly GL: 'GL',
  readonly GU: 'GU',
  readonly GV: 'GV',
  readonly HA: 'HA',
  readonly HE: 'HE',
  readonly HI: 'HI',
  readonly HR: 'HR',
  readonly HU: 'HU',
  readonly HY: 'HY',
  readonly IA: 'IA',
  readonly ID: 'ID',
  readonly IG: 'IG',
  readonly II: 'II',
  readonly IS: 'IS',
  readonly IT: 'IT',
  readonly JA: 'JA',
  readonly JV: 'JV',
  readonly KA: 'KA',
  readonly KI: 'KI',
  readonly KK: 'KK',
  readonly KL: 'KL',
  readonly KM: 'KM',
  readonly KN: 'KN',
  readonly KO: 'KO',
  readonly KS: 'KS',
  readonly KU: 'KU',
  readonly KW: 'KW',
  readonly KY: 'KY',
  readonly LB: 'LB',
  readonly LG: 'LG',
  readonly LN: 'LN',
  readonly LO: 'LO',
  readonly LT: 'LT',
  readonly LU: 'LU',
  readonly LV: 'LV',
  readonly MG: 'MG',
  readonly MI: 'MI',
  readonly MK: 'MK',
  readonly ML: 'ML',
  readonly MN: 'MN',
  readonly MR: 'MR',
  readonly MS: 'MS',
  readonly MT: 'MT',
  readonly MY: 'MY',
  readonly NB: 'NB',
  readonly ND: 'ND',
  readonly NE: 'NE',
  readonly NL: 'NL',
  readonly NN: 'NN',
  readonly NO: 'NO',
  readonly OM: 'OM',
  readonly OR: 'OR',
  readonly OS: 'OS',
  readonly PA: 'PA',
  readonly PL: 'PL',
  readonly PS: 'PS',
  readonly PT_BR: 'PT_BR',
  readonly PT_PT: 'PT_PT',
  readonly QU: 'QU',
  readonly RM: 'RM',
  readonly RN: 'RN',
  readonly RO: 'RO',
  readonly RU: 'RU',
  readonly RW: 'RW',
  readonly SA: 'SA',
  readonly SC: 'SC',
  readonly SD: 'SD',
  readonly SE: 'SE',
  readonly SG: 'SG',
  readonly SI: 'SI',
  readonly SK: 'SK',
  readonly SL: 'SL',
  readonly SN: 'SN',
  readonly SO: 'SO',
  readonly SQ: 'SQ',
  readonly SR: 'SR',
  readonly SU: 'SU',
  readonly SV: 'SV',
  readonly SW: 'SW',
  readonly TA: 'TA',
  readonly TE: 'TE',
  readonly TG: 'TG',
  readonly TH: 'TH',
  readonly TI: 'TI',
  readonly TK: 'TK',
  readonly TO: 'TO',
  readonly TR: 'TR',
  readonly TT: 'TT',
  readonly UG: 'UG',
  readonly UK: 'UK',
  readonly UR: 'UR',
  readonly UZ: 'UZ',
  readonly VI: 'VI',
  readonly WO: 'WO',
  readonly XH: 'XH',
  readonly YI: 'YI',
  readonly YO: 'YO',
  readonly ZH_CN: 'ZH_CN',
  readonly ZH_TW: 'ZH_TW',
  readonly ZU: 'ZU',
  readonly ZH: 'ZH',
  readonly PT: 'PT',
  readonly CU: 'CU',
  readonly VO: 'VO',
  readonly LA: 'LA',
  readonly SH: 'SH',
  readonly MO: 'MO'
}

export declare const enumLocationSortKeys: {
  readonly ID: 'ID',
  readonly CITY: 'CITY',
  readonly DISTANCE: 'DISTANCE',
  readonly NAME: 'NAME'
}

export declare const enumMediaContentType: {
  readonly EXTERNAL_VIDEO: 'EXTERNAL_VIDEO',
  readonly IMAGE: 'IMAGE',
  readonly MODEL_3D: 'MODEL_3D',
  readonly VIDEO: 'VIDEO'
}

export declare const enumMediaHost: {
  readonly YOUTUBE: 'YOUTUBE',
  readonly VIMEO: 'VIMEO'
}

export declare const enumMediaPresentationFormat: {
  readonly MODEL_VIEWER: 'MODEL_VIEWER',
  readonly IMAGE: 'IMAGE'
}

export declare const enumMenuItemType: {
  readonly FRONTPAGE: 'FRONTPAGE',
  readonly COLLECTION: 'COLLECTION',
  readonly COLLECTIONS: 'COLLECTIONS',
  readonly PRODUCT: 'PRODUCT',
  readonly CATALOG: 'CATALOG',
  readonly PAGE: 'PAGE',
  readonly BLOG: 'BLOG',
  readonly ARTICLE: 'ARTICLE',
  readonly SEARCH: 'SEARCH',
  readonly SHOP_POLICY: 'SHOP_POLICY',
  readonly HTTP: 'HTTP'
}

export declare const enumMetafieldDeleteErrorCode: {
  readonly INVALID_OWNER: 'INVALID_OWNER',
  readonly METAFIELD_DOES_NOT_EXIST: 'METAFIELD_DOES_NOT_EXIST'
}

export declare const enumMetafieldsSetUserErrorCode: {
  readonly BLANK: 'BLANK',
  readonly INCLUSION: 'INCLUSION',
  readonly LESS_THAN_OR_EQUAL_TO: 'LESS_THAN_OR_EQUAL_TO',
  readonly PRESENT: 'PRESENT',
  readonly TOO_SHORT: 'TOO_SHORT',
  readonly TOO_LONG: 'TOO_LONG',
  readonly INVALID_OWNER: 'INVALID_OWNER',
  readonly INVALID_VALUE: 'INVALID_VALUE',
  readonly INVALID_TYPE: 'INVALID_TYPE'
}

export declare const enumOrderCancelReason: {
  readonly CUSTOMER: 'CUSTOMER',
  readonly FRAUD: 'FRAUD',
  readonly INVENTORY: 'INVENTORY',
  readonly DECLINED: 'DECLINED',
  readonly OTHER: 'OTHER'
}

export declare const enumOrderFinancialStatus: {
  readonly PENDING: 'PENDING',
  readonly AUTHORIZED: 'AUTHORIZED',
  readonly PARTIALLY_PAID: 'PARTIALLY_PAID',
  readonly PARTIALLY_REFUNDED: 'PARTIALLY_REFUNDED',
  readonly VOIDED: 'VOIDED',
  readonly PAID: 'PAID',
  readonly REFUNDED: 'REFUNDED'
}

export declare const enumOrderFulfillmentStatus: {
  readonly UNFULFILLED: 'UNFULFILLED',
  readonly PARTIALLY_FULFILLED: 'PARTIALLY_FULFILLED',
  readonly FULFILLED: 'FULFILLED',
  readonly RESTOCKED: 'RESTOCKED',
  readonly PENDING_FULFILLMENT: 'PENDING_FULFILLMENT',
  readonly OPEN: 'OPEN',
  readonly IN_PROGRESS: 'IN_PROGRESS',
  readonly ON_HOLD: 'ON_HOLD',
  readonly SCHEDULED: 'SCHEDULED'
}

export declare const enumOrderSortKeys: {
  readonly PROCESSED_AT: 'PROCESSED_AT',
  readonly TOTAL_PRICE: 'TOTAL_PRICE',
  readonly ID: 'ID',
  readonly RELEVANCE: 'RELEVANCE'
}

export declare const enumPageSortKeys: {
  readonly ID: 'ID',
  readonly UPDATED_AT: 'UPDATED_AT',
  readonly RELEVANCE: 'RELEVANCE',
  readonly TITLE: 'TITLE'
}

export declare const enumPaymentTokenType: {
  readonly APPLE_PAY: 'APPLE_PAY',
  readonly VAULT: 'VAULT',
  readonly SHOPIFY_PAY: 'SHOPIFY_PAY',
  readonly GOOGLE_PAY: 'GOOGLE_PAY',
  readonly STRIPE_VAULT_TOKEN: 'STRIPE_VAULT_TOKEN'
}

export declare const enumPredictiveSearchLimitScope: {
  readonly ALL: 'ALL',
  readonly EACH: 'EACH'
}

export declare const enumPredictiveSearchType: {
  readonly COLLECTION: 'COLLECTION',
  readonly PRODUCT: 'PRODUCT',
  readonly PAGE: 'PAGE',
  readonly ARTICLE: 'ARTICLE',
  readonly QUERY: 'QUERY'
}

export declare const enumProductCollectionSortKeys: {
  readonly BEST_SELLING: 'BEST_SELLING',
  readonly CREATED: 'CREATED',
  readonly COLLECTION_DEFAULT: 'COLLECTION_DEFAULT',
  readonly ID: 'ID',
  readonly MANUAL: 'MANUAL',
  readonly PRICE: 'PRICE',
  readonly RELEVANCE: 'RELEVANCE',
  readonly TITLE: 'TITLE'
}

export declare const enumProductImageSortKeys: {
  readonly CREATED_AT: 'CREATED_AT',
  readonly POSITION: 'POSITION',
  readonly ID: 'ID',
  readonly RELEVANCE: 'RELEVANCE'
}

export declare const enumProductMediaSortKeys: {
  readonly POSITION: 'POSITION',
  readonly ID: 'ID',
  readonly RELEVANCE: 'RELEVANCE'
}

export declare const enumProductRecommendationIntent: {
  readonly RELATED: 'RELATED',
  readonly COMPLEMENTARY: 'COMPLEMENTARY'
}

export declare const enumProductSortKeys: {
  readonly BEST_SELLING: 'BEST_SELLING',
  readonly CREATED_AT: 'CREATED_AT',
  readonly ID: 'ID',
  readonly PRICE: 'PRICE',
  readonly PRODUCT_TYPE: 'PRODUCT_TYPE',
  readonly RELEVANCE: 'RELEVANCE',
  readonly TITLE: 'TITLE',
  readonly UPDATED_AT: 'UPDATED_AT',
  readonly VENDOR: 'VENDOR'
}

export declare const enumProductVariantSortKeys: {
  readonly ID: 'ID',
  readonly POSITION: 'POSITION',
  readonly RELEVANCE: 'RELEVANCE',
  readonly TITLE: 'TITLE',
  readonly SKU: 'SKU'
}

export declare const enumSearchPrefixQueryType: {
  readonly LAST: 'LAST',
  readonly NONE: 'NONE'
}

export declare const enumSearchSortKeys: {
  readonly PRICE: 'PRICE',
  readonly RELEVANCE: 'RELEVANCE'
}

export declare const enumSearchType: {
  readonly PRODUCT: 'PRODUCT',
  readonly PAGE: 'PAGE',
  readonly ARTICLE: 'ARTICLE'
}

export declare const enumSearchUnavailableProductsType: {
  readonly SHOW: 'SHOW',
  readonly HIDE: 'HIDE',
  readonly LAST: 'LAST'
}

export declare const enumSearchableField: {
  readonly AUTHOR: 'AUTHOR',
  readonly BODY: 'BODY',
  readonly PRODUCT_TYPE: 'PRODUCT_TYPE',
  readonly TAG: 'TAG',
  readonly TITLE: 'TITLE',
  readonly VARIANTS_BARCODE: 'VARIANTS_BARCODE',
  readonly VARIANTS_SKU: 'VARIANTS_SKU',
  readonly VARIANTS_TITLE: 'VARIANTS_TITLE',
  readonly VENDOR: 'VENDOR'
}

export declare const enumSellingPlanCheckoutChargeType: {
  readonly PERCENTAGE: 'PERCENTAGE',
  readonly PRICE: 'PRICE'
}

export declare const enumSubmissionErrorCode: {
  readonly ERROR: 'ERROR',
  readonly NO_DELIVERY_GROUP_SELECTED: 'NO_DELIVERY_GROUP_SELECTED',
  readonly BUYER_IDENTITY_EMAIL_IS_INVALID: 'BUYER_IDENTITY_EMAIL_IS_INVALID',
  readonly BUYER_IDENTITY_EMAIL_REQUIRED: 'BUYER_IDENTITY_EMAIL_REQUIRED',
  readonly BUYER_IDENTITY_PHONE_IS_INVALID: 'BUYER_IDENTITY_PHONE_IS_INVALID',
  readonly DELIVERY_ADDRESS1_INVALID: 'DELIVERY_ADDRESS1_INVALID',
  readonly DELIVERY_ADDRESS1_REQUIRED: 'DELIVERY_ADDRESS1_REQUIRED',
  readonly DELIVERY_ADDRESS1_TOO_LONG: 'DELIVERY_ADDRESS1_TOO_LONG',
  readonly DELIVERY_ADDRESS2_INVALID: 'DELIVERY_ADDRESS2_INVALID',
  readonly DELIVERY_ADDRESS2_REQUIRED: 'DELIVERY_ADDRESS2_REQUIRED',
  readonly DELIVERY_ADDRESS2_TOO_LONG: 'DELIVERY_ADDRESS2_TOO_LONG',
  readonly DELIVERY_CITY_INVALID: 'DELIVERY_CITY_INVALID',
  readonly DELIVERY_CITY_REQUIRED: 'DELIVERY_CITY_REQUIRED',
  readonly DELIVERY_CITY_TOO_LONG: 'DELIVERY_CITY_TOO_LONG',
  readonly DELIVERY_COMPANY_INVALID: 'DELIVERY_COMPANY_INVALID',
  readonly DELIVERY_COMPANY_REQUIRED: 'DELIVERY_COMPANY_REQUIRED',
  readonly DELIVERY_COMPANY_TOO_LONG: 'DELIVERY_COMPANY_TOO_LONG',
  readonly DELIVERY_COUNTRY_REQUIRED: 'DELIVERY_COUNTRY_REQUIRED',
  readonly DELIVERY_FIRST_NAME_INVALID: 'DELIVERY_FIRST_NAME_INVALID',
  readonly DELIVERY_FIRST_NAME_REQUIRED: 'DELIVERY_FIRST_NAME_REQUIRED',
  readonly DELIVERY_FIRST_NAME_TOO_LONG: 'DELIVERY_FIRST_NAME_TOO_LONG',
  readonly DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY: 'DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY',
  readonly DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE: 'DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE',
  readonly DELIVERY_LAST_NAME_INVALID: 'DELIVERY_LAST_NAME_INVALID',
  readonly DELIVERY_LAST_NAME_REQUIRED: 'DELIVERY_LAST_NAME_REQUIRED',
  readonly DELIVERY_LAST_NAME_TOO_LONG: 'DELIVERY_LAST_NAME_TOO_LONG',
  readonly DELIVERY_NO_DELIVERY_AVAILABLE: 'DELIVERY_NO_DELIVERY_AVAILABLE',
  readonly DELIVERY_NO_DELIVERY_AVAILABLE_FOR_MERCHANDISE_LINE: 'DELIVERY_NO_DELIVERY_AVAILABLE_FOR_MERCHANDISE_LINE',
  readonly DELIVERY_OPTIONS_PHONE_NUMBER_INVALID: 'DELIVERY_OPTIONS_PHONE_NUMBER_INVALID',
  readonly DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED: 'DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED',
  readonly DELIVERY_PHONE_NUMBER_INVALID: 'DELIVERY_PHONE_NUMBER_INVALID',
  readonly DELIVERY_PHONE_NUMBER_REQUIRED: 'DELIVERY_PHONE_NUMBER_REQUIRED',
  readonly DELIVERY_POSTAL_CODE_INVALID: 'DELIVERY_POSTAL_CODE_INVALID',
  readonly DELIVERY_POSTAL_CODE_REQUIRED: 'DELIVERY_POSTAL_CODE_REQUIRED',
  readonly DELIVERY_ZONE_NOT_FOUND: 'DELIVERY_ZONE_NOT_FOUND',
  readonly DELIVERY_ZONE_REQUIRED_FOR_COUNTRY: 'DELIVERY_ZONE_REQUIRED_FOR_COUNTRY',
  readonly DELIVERY_ADDRESS_REQUIRED: 'DELIVERY_ADDRESS_REQUIRED',
  readonly MERCHANDISE_NOT_APPLICABLE: 'MERCHANDISE_NOT_APPLICABLE',
  readonly MERCHANDISE_LINE_LIMIT_REACHED: 'MERCHANDISE_LINE_LIMIT_REACHED',
  readonly MERCHANDISE_NOT_ENOUGH_STOCK_AVAILABLE: 'MERCHANDISE_NOT_ENOUGH_STOCK_AVAILABLE',
  readonly MERCHANDISE_OUT_OF_STOCK: 'MERCHANDISE_OUT_OF_STOCK',
  readonly MERCHANDISE_PRODUCT_NOT_PUBLISHED: 'MERCHANDISE_PRODUCT_NOT_PUBLISHED',
  readonly PAYMENTS_ADDRESS1_INVALID: 'PAYMENTS_ADDRESS1_INVALID',
  readonly PAYMENTS_ADDRESS1_REQUIRED: 'PAYMENTS_ADDRESS1_REQUIRED',
  readonly PAYMENTS_ADDRESS1_TOO_LONG: 'PAYMENTS_ADDRESS1_TOO_LONG',
  readonly PAYMENTS_ADDRESS2_INVALID: 'PAYMENTS_ADDRESS2_INVALID',
  readonly PAYMENTS_ADDRESS2_REQUIRED: 'PAYMENTS_ADDRESS2_REQUIRED',
  readonly PAYMENTS_ADDRESS2_TOO_LONG: 'PAYMENTS_ADDRESS2_TOO_LONG',
  readonly PAYMENTS_CITY_INVALID: 'PAYMENTS_CITY_INVALID',
  readonly PAYMENTS_CITY_REQUIRED: 'PAYMENTS_CITY_REQUIRED',
  readonly PAYMENTS_CITY_TOO_LONG: 'PAYMENTS_CITY_TOO_LONG',
  readonly PAYMENTS_COMPANY_INVALID: 'PAYMENTS_COMPANY_INVALID',
  readonly PAYMENTS_COMPANY_REQUIRED: 'PAYMENTS_COMPANY_REQUIRED',
  readonly PAYMENTS_COMPANY_TOO_LONG: 'PAYMENTS_COMPANY_TOO_LONG',
  readonly PAYMENTS_COUNTRY_REQUIRED: 'PAYMENTS_COUNTRY_REQUIRED',
  readonly PAYMENTS_CREDIT_CARD_BASE_EXPIRED: 'PAYMENTS_CREDIT_CARD_BASE_EXPIRED',
  readonly PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED: 'PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED',
  readonly PAYMENTS_CREDIT_CARD_BASE_INVALID_START_DATE_OR_ISSUE_NUMBER_FOR_DEBIT: 'PAYMENTS_CREDIT_CARD_BASE_INVALID_START_DATE_OR_ISSUE_NUMBER_FOR_DEBIT',
  readonly PAYMENTS_CREDIT_CARD_BRAND_NOT_SUPPORTED: 'PAYMENTS_CREDIT_CARD_BRAND_NOT_SUPPORTED',
  readonly PAYMENTS_CREDIT_CARD_FIRST_NAME_BLANK: 'PAYMENTS_CREDIT_CARD_FIRST_NAME_BLANK',
  readonly PAYMENTS_CREDIT_CARD_GENERIC: 'PAYMENTS_CREDIT_CARD_GENERIC',
  readonly PAYMENTS_CREDIT_CARD_LAST_NAME_BLANK: 'PAYMENTS_CREDIT_CARD_LAST_NAME_BLANK',
  readonly PAYMENTS_CREDIT_CARD_MONTH_INCLUSION: 'PAYMENTS_CREDIT_CARD_MONTH_INCLUSION',
  readonly PAYMENTS_CREDIT_CARD_NAME_INVALID: 'PAYMENTS_CREDIT_CARD_NAME_INVALID',
  readonly PAYMENTS_CREDIT_CARD_NUMBER_INVALID: 'PAYMENTS_CREDIT_CARD_NUMBER_INVALID',
  readonly PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT: 'PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT',
  readonly PAYMENTS_CREDIT_CARD_SESSION_ID: 'PAYMENTS_CREDIT_CARD_SESSION_ID',
  readonly PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK: 'PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK',
  readonly PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE: 'PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE',
  readonly PAYMENTS_CREDIT_CARD_YEAR_EXPIRED: 'PAYMENTS_CREDIT_CARD_YEAR_EXPIRED',
  readonly PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR: 'PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR',
  readonly PAYMENTS_FIRST_NAME_INVALID: 'PAYMENTS_FIRST_NAME_INVALID',
  readonly PAYMENTS_FIRST_NAME_REQUIRED: 'PAYMENTS_FIRST_NAME_REQUIRED',
  readonly PAYMENTS_FIRST_NAME_TOO_LONG: 'PAYMENTS_FIRST_NAME_TOO_LONG',
  readonly PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY: 'PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY',
  readonly PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE: 'PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE',
  readonly PAYMENTS_LAST_NAME_INVALID: 'PAYMENTS_LAST_NAME_INVALID',
  readonly PAYMENTS_LAST_NAME_REQUIRED: 'PAYMENTS_LAST_NAME_REQUIRED',
  readonly PAYMENTS_LAST_NAME_TOO_LONG: 'PAYMENTS_LAST_NAME_TOO_LONG',
  readonly PAYMENTS_METHOD_UNAVAILABLE: 'PAYMENTS_METHOD_UNAVAILABLE',
  readonly PAYMENTS_METHOD_REQUIRED: 'PAYMENTS_METHOD_REQUIRED',
  readonly PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT: 'PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT',
  readonly PAYMENTS_PHONE_NUMBER_INVALID: 'PAYMENTS_PHONE_NUMBER_INVALID',
  readonly PAYMENTS_PHONE_NUMBER_REQUIRED: 'PAYMENTS_PHONE_NUMBER_REQUIRED',
  readonly PAYMENTS_POSTAL_CODE_INVALID: 'PAYMENTS_POSTAL_CODE_INVALID',
  readonly PAYMENTS_POSTAL_CODE_REQUIRED: 'PAYMENTS_POSTAL_CODE_REQUIRED',
  readonly PAYMENTS_SHOPIFY_PAYMENTS_REQUIRED: 'PAYMENTS_SHOPIFY_PAYMENTS_REQUIRED',
  readonly PAYMENTS_WALLET_CONTENT_MISSING: 'PAYMENTS_WALLET_CONTENT_MISSING',
  readonly PAYMENTS_BILLING_ADDRESS_ZONE_NOT_FOUND: 'PAYMENTS_BILLING_ADDRESS_ZONE_NOT_FOUND',
  readonly PAYMENTS_BILLING_ADDRESS_ZONE_REQUIRED_FOR_COUNTRY: 'PAYMENTS_BILLING_ADDRESS_ZONE_REQUIRED_FOR_COUNTRY',
  readonly TAXES_MUST_BE_DEFINED: 'TAXES_MUST_BE_DEFINED',
  readonly TAXES_LINE_ID_NOT_FOUND: 'TAXES_LINE_ID_NOT_FOUND',
  readonly TAXES_DELIVERY_GROUP_ID_NOT_FOUND: 'TAXES_DELIVERY_GROUP_ID_NOT_FOUND'
}

export declare const enumTransactionKind: {
  readonly SALE: 'SALE',
  readonly CAPTURE: 'CAPTURE',
  readonly AUTHORIZATION: 'AUTHORIZATION',
  readonly EMV_AUTHORIZATION: 'EMV_AUTHORIZATION',
  readonly CHANGE: 'CHANGE'
}

export declare const enumTransactionStatus: {
  readonly PENDING: 'PENDING',
  readonly SUCCESS: 'SUCCESS',
  readonly FAILURE: 'FAILURE',
  readonly ERROR: 'ERROR'
}

export declare const enumUnitPriceMeasurementMeasuredType: {
  readonly VOLUME: 'VOLUME',
  readonly WEIGHT: 'WEIGHT',
  readonly LENGTH: 'LENGTH',
  readonly AREA: 'AREA'
}

export declare const enumUnitPriceMeasurementMeasuredUnit: {
  readonly ML: 'ML',
  readonly CL: 'CL',
  readonly L: 'L',
  readonly M3: 'M3',
  readonly MG: 'MG',
  readonly G: 'G',
  readonly KG: 'KG',
  readonly MM: 'MM',
  readonly CM: 'CM',
  readonly M: 'M',
  readonly M2: 'M2'
}

export declare const enumUnitSystem: {
  readonly IMPERIAL_SYSTEM: 'IMPERIAL_SYSTEM',
  readonly METRIC_SYSTEM: 'METRIC_SYSTEM'
}

export declare const enumWeightUnit: {
  readonly KILOGRAMS: 'KILOGRAMS',
  readonly GRAMS: 'GRAMS',
  readonly POUNDS: 'POUNDS',
  readonly OUNCES: 'OUNCES'
}
