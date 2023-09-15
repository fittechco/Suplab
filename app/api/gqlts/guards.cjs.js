
var ApiVersion_possibleTypes = ['ApiVersion']
module.exports.isApiVersion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isApiVersion"')
  return ApiVersion_possibleTypes.includes(obj.__typename)
}



var AppliedGiftCard_possibleTypes = ['AppliedGiftCard']
module.exports.isAppliedGiftCard = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppliedGiftCard"')
  return AppliedGiftCard_possibleTypes.includes(obj.__typename)
}



var Article_possibleTypes = ['Article']
module.exports.isArticle = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isArticle"')
  return Article_possibleTypes.includes(obj.__typename)
}



var ArticleAuthor_possibleTypes = ['ArticleAuthor']
module.exports.isArticleAuthor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isArticleAuthor"')
  return ArticleAuthor_possibleTypes.includes(obj.__typename)
}



var ArticleConnection_possibleTypes = ['ArticleConnection']
module.exports.isArticleConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isArticleConnection"')
  return ArticleConnection_possibleTypes.includes(obj.__typename)
}



var ArticleEdge_possibleTypes = ['ArticleEdge']
module.exports.isArticleEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isArticleEdge"')
  return ArticleEdge_possibleTypes.includes(obj.__typename)
}



var Attribute_possibleTypes = ['Attribute']
module.exports.isAttribute = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAttribute"')
  return Attribute_possibleTypes.includes(obj.__typename)
}



var AutomaticDiscountApplication_possibleTypes = ['AutomaticDiscountApplication']
module.exports.isAutomaticDiscountApplication = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAutomaticDiscountApplication"')
  return AutomaticDiscountApplication_possibleTypes.includes(obj.__typename)
}



var AvailableShippingRates_possibleTypes = ['AvailableShippingRates']
module.exports.isAvailableShippingRates = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAvailableShippingRates"')
  return AvailableShippingRates_possibleTypes.includes(obj.__typename)
}



var BaseCartLine_possibleTypes = ['CartLine','ComponentizableCartLine']
module.exports.isBaseCartLine = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBaseCartLine"')
  return BaseCartLine_possibleTypes.includes(obj.__typename)
}



var BaseCartLineConnection_possibleTypes = ['BaseCartLineConnection']
module.exports.isBaseCartLineConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBaseCartLineConnection"')
  return BaseCartLineConnection_possibleTypes.includes(obj.__typename)
}



var BaseCartLineEdge_possibleTypes = ['BaseCartLineEdge']
module.exports.isBaseCartLineEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBaseCartLineEdge"')
  return BaseCartLineEdge_possibleTypes.includes(obj.__typename)
}



var Blog_possibleTypes = ['Blog']
module.exports.isBlog = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBlog"')
  return Blog_possibleTypes.includes(obj.__typename)
}



var BlogConnection_possibleTypes = ['BlogConnection']
module.exports.isBlogConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBlogConnection"')
  return BlogConnection_possibleTypes.includes(obj.__typename)
}



var BlogEdge_possibleTypes = ['BlogEdge']
module.exports.isBlogEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBlogEdge"')
  return BlogEdge_possibleTypes.includes(obj.__typename)
}



var Brand_possibleTypes = ['Brand']
module.exports.isBrand = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBrand"')
  return Brand_possibleTypes.includes(obj.__typename)
}



var BrandColorGroup_possibleTypes = ['BrandColorGroup']
module.exports.isBrandColorGroup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBrandColorGroup"')
  return BrandColorGroup_possibleTypes.includes(obj.__typename)
}



var BrandColors_possibleTypes = ['BrandColors']
module.exports.isBrandColors = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBrandColors"')
  return BrandColors_possibleTypes.includes(obj.__typename)
}



var Cart_possibleTypes = ['Cart']
module.exports.isCart = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCart"')
  return Cart_possibleTypes.includes(obj.__typename)
}



var CartAttributesUpdatePayload_possibleTypes = ['CartAttributesUpdatePayload']
module.exports.isCartAttributesUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartAttributesUpdatePayload"')
  return CartAttributesUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CartAutomaticDiscountAllocation_possibleTypes = ['CartAutomaticDiscountAllocation']
module.exports.isCartAutomaticDiscountAllocation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartAutomaticDiscountAllocation"')
  return CartAutomaticDiscountAllocation_possibleTypes.includes(obj.__typename)
}



var CartBuyerIdentity_possibleTypes = ['CartBuyerIdentity']
module.exports.isCartBuyerIdentity = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartBuyerIdentity"')
  return CartBuyerIdentity_possibleTypes.includes(obj.__typename)
}



var CartBuyerIdentityUpdatePayload_possibleTypes = ['CartBuyerIdentityUpdatePayload']
module.exports.isCartBuyerIdentityUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartBuyerIdentityUpdatePayload"')
  return CartBuyerIdentityUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CartCodeDiscountAllocation_possibleTypes = ['CartCodeDiscountAllocation']
module.exports.isCartCodeDiscountAllocation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartCodeDiscountAllocation"')
  return CartCodeDiscountAllocation_possibleTypes.includes(obj.__typename)
}



var CartCompletionAction_possibleTypes = ['CompletePaymentChallenge']
module.exports.isCartCompletionAction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartCompletionAction"')
  return CartCompletionAction_possibleTypes.includes(obj.__typename)
}



var CartCompletionActionRequired_possibleTypes = ['CartCompletionActionRequired']
module.exports.isCartCompletionActionRequired = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartCompletionActionRequired"')
  return CartCompletionActionRequired_possibleTypes.includes(obj.__typename)
}



var CartCompletionAttemptResult_possibleTypes = ['CartCompletionActionRequired','CartCompletionFailed','CartCompletionProcessing','CartCompletionSuccess']
module.exports.isCartCompletionAttemptResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartCompletionAttemptResult"')
  return CartCompletionAttemptResult_possibleTypes.includes(obj.__typename)
}



var CartCompletionFailed_possibleTypes = ['CartCompletionFailed']
module.exports.isCartCompletionFailed = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartCompletionFailed"')
  return CartCompletionFailed_possibleTypes.includes(obj.__typename)
}



var CartCompletionProcessing_possibleTypes = ['CartCompletionProcessing']
module.exports.isCartCompletionProcessing = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartCompletionProcessing"')
  return CartCompletionProcessing_possibleTypes.includes(obj.__typename)
}



var CartCompletionSuccess_possibleTypes = ['CartCompletionSuccess']
module.exports.isCartCompletionSuccess = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartCompletionSuccess"')
  return CartCompletionSuccess_possibleTypes.includes(obj.__typename)
}



var CartCost_possibleTypes = ['CartCost']
module.exports.isCartCost = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartCost"')
  return CartCost_possibleTypes.includes(obj.__typename)
}



var CartCreatePayload_possibleTypes = ['CartCreatePayload']
module.exports.isCartCreatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartCreatePayload"')
  return CartCreatePayload_possibleTypes.includes(obj.__typename)
}



var CartCustomDiscountAllocation_possibleTypes = ['CartCustomDiscountAllocation']
module.exports.isCartCustomDiscountAllocation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartCustomDiscountAllocation"')
  return CartCustomDiscountAllocation_possibleTypes.includes(obj.__typename)
}



var CartDeliveryGroup_possibleTypes = ['CartDeliveryGroup']
module.exports.isCartDeliveryGroup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartDeliveryGroup"')
  return CartDeliveryGroup_possibleTypes.includes(obj.__typename)
}



var CartDeliveryGroupConnection_possibleTypes = ['CartDeliveryGroupConnection']
module.exports.isCartDeliveryGroupConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartDeliveryGroupConnection"')
  return CartDeliveryGroupConnection_possibleTypes.includes(obj.__typename)
}



var CartDeliveryGroupEdge_possibleTypes = ['CartDeliveryGroupEdge']
module.exports.isCartDeliveryGroupEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartDeliveryGroupEdge"')
  return CartDeliveryGroupEdge_possibleTypes.includes(obj.__typename)
}



var CartDeliveryOption_possibleTypes = ['CartDeliveryOption']
module.exports.isCartDeliveryOption = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartDeliveryOption"')
  return CartDeliveryOption_possibleTypes.includes(obj.__typename)
}



var CartDiscountAllocation_possibleTypes = ['CartAutomaticDiscountAllocation','CartCodeDiscountAllocation','CartCustomDiscountAllocation']
module.exports.isCartDiscountAllocation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartDiscountAllocation"')
  return CartDiscountAllocation_possibleTypes.includes(obj.__typename)
}



var CartDiscountCode_possibleTypes = ['CartDiscountCode']
module.exports.isCartDiscountCode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartDiscountCode"')
  return CartDiscountCode_possibleTypes.includes(obj.__typename)
}



var CartDiscountCodesUpdatePayload_possibleTypes = ['CartDiscountCodesUpdatePayload']
module.exports.isCartDiscountCodesUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartDiscountCodesUpdatePayload"')
  return CartDiscountCodesUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CartEstimatedCost_possibleTypes = ['CartEstimatedCost']
module.exports.isCartEstimatedCost = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartEstimatedCost"')
  return CartEstimatedCost_possibleTypes.includes(obj.__typename)
}



var CartLine_possibleTypes = ['CartLine']
module.exports.isCartLine = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartLine"')
  return CartLine_possibleTypes.includes(obj.__typename)
}



var CartLineCost_possibleTypes = ['CartLineCost']
module.exports.isCartLineCost = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartLineCost"')
  return CartLineCost_possibleTypes.includes(obj.__typename)
}



var CartLineEstimatedCost_possibleTypes = ['CartLineEstimatedCost']
module.exports.isCartLineEstimatedCost = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartLineEstimatedCost"')
  return CartLineEstimatedCost_possibleTypes.includes(obj.__typename)
}



var CartLinesAddPayload_possibleTypes = ['CartLinesAddPayload']
module.exports.isCartLinesAddPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartLinesAddPayload"')
  return CartLinesAddPayload_possibleTypes.includes(obj.__typename)
}



var CartLinesRemovePayload_possibleTypes = ['CartLinesRemovePayload']
module.exports.isCartLinesRemovePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartLinesRemovePayload"')
  return CartLinesRemovePayload_possibleTypes.includes(obj.__typename)
}



var CartLinesUpdatePayload_possibleTypes = ['CartLinesUpdatePayload']
module.exports.isCartLinesUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartLinesUpdatePayload"')
  return CartLinesUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CartMetafieldDeletePayload_possibleTypes = ['CartMetafieldDeletePayload']
module.exports.isCartMetafieldDeletePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartMetafieldDeletePayload"')
  return CartMetafieldDeletePayload_possibleTypes.includes(obj.__typename)
}



var CartMetafieldsSetPayload_possibleTypes = ['CartMetafieldsSetPayload']
module.exports.isCartMetafieldsSetPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartMetafieldsSetPayload"')
  return CartMetafieldsSetPayload_possibleTypes.includes(obj.__typename)
}



var CartNoteUpdatePayload_possibleTypes = ['CartNoteUpdatePayload']
module.exports.isCartNoteUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartNoteUpdatePayload"')
  return CartNoteUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CartPaymentUpdatePayload_possibleTypes = ['CartPaymentUpdatePayload']
module.exports.isCartPaymentUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartPaymentUpdatePayload"')
  return CartPaymentUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CartSelectedDeliveryOptionsUpdatePayload_possibleTypes = ['CartSelectedDeliveryOptionsUpdatePayload']
module.exports.isCartSelectedDeliveryOptionsUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartSelectedDeliveryOptionsUpdatePayload"')
  return CartSelectedDeliveryOptionsUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CartSubmitForCompletionPayload_possibleTypes = ['CartSubmitForCompletionPayload']
module.exports.isCartSubmitForCompletionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartSubmitForCompletionPayload"')
  return CartSubmitForCompletionPayload_possibleTypes.includes(obj.__typename)
}



var CartSubmitForCompletionResult_possibleTypes = ['SubmitAlreadyAccepted','SubmitFailed','SubmitSuccess','SubmitThrottled']
module.exports.isCartSubmitForCompletionResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartSubmitForCompletionResult"')
  return CartSubmitForCompletionResult_possibleTypes.includes(obj.__typename)
}



var CartUserError_possibleTypes = ['CartUserError']
module.exports.isCartUserError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartUserError"')
  return CartUserError_possibleTypes.includes(obj.__typename)
}



var Checkout_possibleTypes = ['Checkout']
module.exports.isCheckout = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckout"')
  return Checkout_possibleTypes.includes(obj.__typename)
}



var CheckoutAttributesUpdateV2Payload_possibleTypes = ['CheckoutAttributesUpdateV2Payload']
module.exports.isCheckoutAttributesUpdateV2Payload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutAttributesUpdateV2Payload"')
  return CheckoutAttributesUpdateV2Payload_possibleTypes.includes(obj.__typename)
}



var CheckoutBuyerIdentity_possibleTypes = ['CheckoutBuyerIdentity']
module.exports.isCheckoutBuyerIdentity = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutBuyerIdentity"')
  return CheckoutBuyerIdentity_possibleTypes.includes(obj.__typename)
}



var CheckoutCompleteFreePayload_possibleTypes = ['CheckoutCompleteFreePayload']
module.exports.isCheckoutCompleteFreePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutCompleteFreePayload"')
  return CheckoutCompleteFreePayload_possibleTypes.includes(obj.__typename)
}



var CheckoutCompleteWithCreditCardV2Payload_possibleTypes = ['CheckoutCompleteWithCreditCardV2Payload']
module.exports.isCheckoutCompleteWithCreditCardV2Payload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutCompleteWithCreditCardV2Payload"')
  return CheckoutCompleteWithCreditCardV2Payload_possibleTypes.includes(obj.__typename)
}



var CheckoutCompleteWithTokenizedPaymentV3Payload_possibleTypes = ['CheckoutCompleteWithTokenizedPaymentV3Payload']
module.exports.isCheckoutCompleteWithTokenizedPaymentV3Payload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutCompleteWithTokenizedPaymentV3Payload"')
  return CheckoutCompleteWithTokenizedPaymentV3Payload_possibleTypes.includes(obj.__typename)
}



var CheckoutCreatePayload_possibleTypes = ['CheckoutCreatePayload']
module.exports.isCheckoutCreatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutCreatePayload"')
  return CheckoutCreatePayload_possibleTypes.includes(obj.__typename)
}



var CheckoutCustomerAssociateV2Payload_possibleTypes = ['CheckoutCustomerAssociateV2Payload']
module.exports.isCheckoutCustomerAssociateV2Payload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutCustomerAssociateV2Payload"')
  return CheckoutCustomerAssociateV2Payload_possibleTypes.includes(obj.__typename)
}



var CheckoutCustomerDisassociateV2Payload_possibleTypes = ['CheckoutCustomerDisassociateV2Payload']
module.exports.isCheckoutCustomerDisassociateV2Payload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutCustomerDisassociateV2Payload"')
  return CheckoutCustomerDisassociateV2Payload_possibleTypes.includes(obj.__typename)
}



var CheckoutDiscountCodeApplyV2Payload_possibleTypes = ['CheckoutDiscountCodeApplyV2Payload']
module.exports.isCheckoutDiscountCodeApplyV2Payload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutDiscountCodeApplyV2Payload"')
  return CheckoutDiscountCodeApplyV2Payload_possibleTypes.includes(obj.__typename)
}



var CheckoutDiscountCodeRemovePayload_possibleTypes = ['CheckoutDiscountCodeRemovePayload']
module.exports.isCheckoutDiscountCodeRemovePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutDiscountCodeRemovePayload"')
  return CheckoutDiscountCodeRemovePayload_possibleTypes.includes(obj.__typename)
}



var CheckoutEmailUpdateV2Payload_possibleTypes = ['CheckoutEmailUpdateV2Payload']
module.exports.isCheckoutEmailUpdateV2Payload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutEmailUpdateV2Payload"')
  return CheckoutEmailUpdateV2Payload_possibleTypes.includes(obj.__typename)
}



var CheckoutGiftCardRemoveV2Payload_possibleTypes = ['CheckoutGiftCardRemoveV2Payload']
module.exports.isCheckoutGiftCardRemoveV2Payload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutGiftCardRemoveV2Payload"')
  return CheckoutGiftCardRemoveV2Payload_possibleTypes.includes(obj.__typename)
}



var CheckoutGiftCardsAppendPayload_possibleTypes = ['CheckoutGiftCardsAppendPayload']
module.exports.isCheckoutGiftCardsAppendPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutGiftCardsAppendPayload"')
  return CheckoutGiftCardsAppendPayload_possibleTypes.includes(obj.__typename)
}



var CheckoutLineItem_possibleTypes = ['CheckoutLineItem']
module.exports.isCheckoutLineItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutLineItem"')
  return CheckoutLineItem_possibleTypes.includes(obj.__typename)
}



var CheckoutLineItemConnection_possibleTypes = ['CheckoutLineItemConnection']
module.exports.isCheckoutLineItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutLineItemConnection"')
  return CheckoutLineItemConnection_possibleTypes.includes(obj.__typename)
}



var CheckoutLineItemEdge_possibleTypes = ['CheckoutLineItemEdge']
module.exports.isCheckoutLineItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutLineItemEdge"')
  return CheckoutLineItemEdge_possibleTypes.includes(obj.__typename)
}



var CheckoutLineItemsAddPayload_possibleTypes = ['CheckoutLineItemsAddPayload']
module.exports.isCheckoutLineItemsAddPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutLineItemsAddPayload"')
  return CheckoutLineItemsAddPayload_possibleTypes.includes(obj.__typename)
}



var CheckoutLineItemsRemovePayload_possibleTypes = ['CheckoutLineItemsRemovePayload']
module.exports.isCheckoutLineItemsRemovePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutLineItemsRemovePayload"')
  return CheckoutLineItemsRemovePayload_possibleTypes.includes(obj.__typename)
}



var CheckoutLineItemsReplacePayload_possibleTypes = ['CheckoutLineItemsReplacePayload']
module.exports.isCheckoutLineItemsReplacePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutLineItemsReplacePayload"')
  return CheckoutLineItemsReplacePayload_possibleTypes.includes(obj.__typename)
}



var CheckoutLineItemsUpdatePayload_possibleTypes = ['CheckoutLineItemsUpdatePayload']
module.exports.isCheckoutLineItemsUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutLineItemsUpdatePayload"')
  return CheckoutLineItemsUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CheckoutShippingAddressUpdateV2Payload_possibleTypes = ['CheckoutShippingAddressUpdateV2Payload']
module.exports.isCheckoutShippingAddressUpdateV2Payload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutShippingAddressUpdateV2Payload"')
  return CheckoutShippingAddressUpdateV2Payload_possibleTypes.includes(obj.__typename)
}



var CheckoutShippingLineUpdatePayload_possibleTypes = ['CheckoutShippingLineUpdatePayload']
module.exports.isCheckoutShippingLineUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutShippingLineUpdatePayload"')
  return CheckoutShippingLineUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CheckoutUserError_possibleTypes = ['CheckoutUserError']
module.exports.isCheckoutUserError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckoutUserError"')
  return CheckoutUserError_possibleTypes.includes(obj.__typename)
}



var Collection_possibleTypes = ['Collection']
module.exports.isCollection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCollection"')
  return Collection_possibleTypes.includes(obj.__typename)
}



var CollectionConnection_possibleTypes = ['CollectionConnection']
module.exports.isCollectionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCollectionConnection"')
  return CollectionConnection_possibleTypes.includes(obj.__typename)
}



var CollectionEdge_possibleTypes = ['CollectionEdge']
module.exports.isCollectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCollectionEdge"')
  return CollectionEdge_possibleTypes.includes(obj.__typename)
}



var Comment_possibleTypes = ['Comment']
module.exports.isComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isComment"')
  return Comment_possibleTypes.includes(obj.__typename)
}



var CommentAuthor_possibleTypes = ['CommentAuthor']
module.exports.isCommentAuthor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentAuthor"')
  return CommentAuthor_possibleTypes.includes(obj.__typename)
}



var CommentConnection_possibleTypes = ['CommentConnection']
module.exports.isCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentConnection"')
  return CommentConnection_possibleTypes.includes(obj.__typename)
}



var CommentEdge_possibleTypes = ['CommentEdge']
module.exports.isCommentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentEdge"')
  return CommentEdge_possibleTypes.includes(obj.__typename)
}



var CompletePaymentChallenge_possibleTypes = ['CompletePaymentChallenge']
module.exports.isCompletePaymentChallenge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCompletePaymentChallenge"')
  return CompletePaymentChallenge_possibleTypes.includes(obj.__typename)
}



var CompletionError_possibleTypes = ['CompletionError']
module.exports.isCompletionError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCompletionError"')
  return CompletionError_possibleTypes.includes(obj.__typename)
}



var ComponentizableCartLine_possibleTypes = ['ComponentizableCartLine']
module.exports.isComponentizableCartLine = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isComponentizableCartLine"')
  return ComponentizableCartLine_possibleTypes.includes(obj.__typename)
}



var Country_possibleTypes = ['Country']
module.exports.isCountry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCountry"')
  return Country_possibleTypes.includes(obj.__typename)
}



var CreditCard_possibleTypes = ['CreditCard']
module.exports.isCreditCard = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreditCard"')
  return CreditCard_possibleTypes.includes(obj.__typename)
}



var Currency_possibleTypes = ['Currency']
module.exports.isCurrency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCurrency"')
  return Currency_possibleTypes.includes(obj.__typename)
}



var Customer_possibleTypes = ['Customer']
module.exports.isCustomer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomer"')
  return Customer_possibleTypes.includes(obj.__typename)
}



var CustomerAccessToken_possibleTypes = ['CustomerAccessToken']
module.exports.isCustomerAccessToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerAccessToken"')
  return CustomerAccessToken_possibleTypes.includes(obj.__typename)
}



var CustomerAccessTokenCreatePayload_possibleTypes = ['CustomerAccessTokenCreatePayload']
module.exports.isCustomerAccessTokenCreatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerAccessTokenCreatePayload"')
  return CustomerAccessTokenCreatePayload_possibleTypes.includes(obj.__typename)
}



var CustomerAccessTokenCreateWithMultipassPayload_possibleTypes = ['CustomerAccessTokenCreateWithMultipassPayload']
module.exports.isCustomerAccessTokenCreateWithMultipassPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerAccessTokenCreateWithMultipassPayload"')
  return CustomerAccessTokenCreateWithMultipassPayload_possibleTypes.includes(obj.__typename)
}



var CustomerAccessTokenDeletePayload_possibleTypes = ['CustomerAccessTokenDeletePayload']
module.exports.isCustomerAccessTokenDeletePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerAccessTokenDeletePayload"')
  return CustomerAccessTokenDeletePayload_possibleTypes.includes(obj.__typename)
}



var CustomerAccessTokenRenewPayload_possibleTypes = ['CustomerAccessTokenRenewPayload']
module.exports.isCustomerAccessTokenRenewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerAccessTokenRenewPayload"')
  return CustomerAccessTokenRenewPayload_possibleTypes.includes(obj.__typename)
}



var CustomerActivateByUrlPayload_possibleTypes = ['CustomerActivateByUrlPayload']
module.exports.isCustomerActivateByUrlPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerActivateByUrlPayload"')
  return CustomerActivateByUrlPayload_possibleTypes.includes(obj.__typename)
}



var CustomerActivatePayload_possibleTypes = ['CustomerActivatePayload']
module.exports.isCustomerActivatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerActivatePayload"')
  return CustomerActivatePayload_possibleTypes.includes(obj.__typename)
}



var CustomerAddressCreatePayload_possibleTypes = ['CustomerAddressCreatePayload']
module.exports.isCustomerAddressCreatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerAddressCreatePayload"')
  return CustomerAddressCreatePayload_possibleTypes.includes(obj.__typename)
}



var CustomerAddressDeletePayload_possibleTypes = ['CustomerAddressDeletePayload']
module.exports.isCustomerAddressDeletePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerAddressDeletePayload"')
  return CustomerAddressDeletePayload_possibleTypes.includes(obj.__typename)
}



var CustomerAddressUpdatePayload_possibleTypes = ['CustomerAddressUpdatePayload']
module.exports.isCustomerAddressUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerAddressUpdatePayload"')
  return CustomerAddressUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CustomerCreatePayload_possibleTypes = ['CustomerCreatePayload']
module.exports.isCustomerCreatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerCreatePayload"')
  return CustomerCreatePayload_possibleTypes.includes(obj.__typename)
}



var CustomerDefaultAddressUpdatePayload_possibleTypes = ['CustomerDefaultAddressUpdatePayload']
module.exports.isCustomerDefaultAddressUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerDefaultAddressUpdatePayload"')
  return CustomerDefaultAddressUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CustomerRecoverPayload_possibleTypes = ['CustomerRecoverPayload']
module.exports.isCustomerRecoverPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerRecoverPayload"')
  return CustomerRecoverPayload_possibleTypes.includes(obj.__typename)
}



var CustomerResetByUrlPayload_possibleTypes = ['CustomerResetByUrlPayload']
module.exports.isCustomerResetByUrlPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerResetByUrlPayload"')
  return CustomerResetByUrlPayload_possibleTypes.includes(obj.__typename)
}



var CustomerResetPayload_possibleTypes = ['CustomerResetPayload']
module.exports.isCustomerResetPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerResetPayload"')
  return CustomerResetPayload_possibleTypes.includes(obj.__typename)
}



var CustomerUpdatePayload_possibleTypes = ['CustomerUpdatePayload']
module.exports.isCustomerUpdatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerUpdatePayload"')
  return CustomerUpdatePayload_possibleTypes.includes(obj.__typename)
}



var CustomerUserError_possibleTypes = ['CustomerUserError']
module.exports.isCustomerUserError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerUserError"')
  return CustomerUserError_possibleTypes.includes(obj.__typename)
}



var DeliveryAddress_possibleTypes = ['MailingAddress']
module.exports.isDeliveryAddress = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeliveryAddress"')
  return DeliveryAddress_possibleTypes.includes(obj.__typename)
}



var DiscountAllocation_possibleTypes = ['DiscountAllocation']
module.exports.isDiscountAllocation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDiscountAllocation"')
  return DiscountAllocation_possibleTypes.includes(obj.__typename)
}



var DiscountApplication_possibleTypes = ['AutomaticDiscountApplication','DiscountCodeApplication','ManualDiscountApplication','ScriptDiscountApplication']
module.exports.isDiscountApplication = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDiscountApplication"')
  return DiscountApplication_possibleTypes.includes(obj.__typename)
}



var DiscountApplicationConnection_possibleTypes = ['DiscountApplicationConnection']
module.exports.isDiscountApplicationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDiscountApplicationConnection"')
  return DiscountApplicationConnection_possibleTypes.includes(obj.__typename)
}



var DiscountApplicationEdge_possibleTypes = ['DiscountApplicationEdge']
module.exports.isDiscountApplicationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDiscountApplicationEdge"')
  return DiscountApplicationEdge_possibleTypes.includes(obj.__typename)
}



var DiscountCodeApplication_possibleTypes = ['DiscountCodeApplication']
module.exports.isDiscountCodeApplication = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDiscountCodeApplication"')
  return DiscountCodeApplication_possibleTypes.includes(obj.__typename)
}



var DisplayableError_possibleTypes = ['CartUserError','CheckoutUserError','CustomerUserError','MetafieldDeleteUserError','MetafieldsSetUserError','UserError']
module.exports.isDisplayableError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDisplayableError"')
  return DisplayableError_possibleTypes.includes(obj.__typename)
}



var Domain_possibleTypes = ['Domain']
module.exports.isDomain = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDomain"')
  return Domain_possibleTypes.includes(obj.__typename)
}



var ExternalVideo_possibleTypes = ['ExternalVideo']
module.exports.isExternalVideo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExternalVideo"')
  return ExternalVideo_possibleTypes.includes(obj.__typename)
}



var Filter_possibleTypes = ['Filter']
module.exports.isFilter = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFilter"')
  return Filter_possibleTypes.includes(obj.__typename)
}



var FilterValue_possibleTypes = ['FilterValue']
module.exports.isFilterValue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFilterValue"')
  return FilterValue_possibleTypes.includes(obj.__typename)
}



var Fulfillment_possibleTypes = ['Fulfillment']
module.exports.isFulfillment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFulfillment"')
  return Fulfillment_possibleTypes.includes(obj.__typename)
}



var FulfillmentLineItem_possibleTypes = ['FulfillmentLineItem']
module.exports.isFulfillmentLineItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFulfillmentLineItem"')
  return FulfillmentLineItem_possibleTypes.includes(obj.__typename)
}



var FulfillmentLineItemConnection_possibleTypes = ['FulfillmentLineItemConnection']
module.exports.isFulfillmentLineItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFulfillmentLineItemConnection"')
  return FulfillmentLineItemConnection_possibleTypes.includes(obj.__typename)
}



var FulfillmentLineItemEdge_possibleTypes = ['FulfillmentLineItemEdge']
module.exports.isFulfillmentLineItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFulfillmentLineItemEdge"')
  return FulfillmentLineItemEdge_possibleTypes.includes(obj.__typename)
}



var FulfillmentTrackingInfo_possibleTypes = ['FulfillmentTrackingInfo']
module.exports.isFulfillmentTrackingInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFulfillmentTrackingInfo"')
  return FulfillmentTrackingInfo_possibleTypes.includes(obj.__typename)
}



var GenericFile_possibleTypes = ['GenericFile']
module.exports.isGenericFile = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGenericFile"')
  return GenericFile_possibleTypes.includes(obj.__typename)
}



var HasMetafields_possibleTypes = ['Article','Blog','Cart','Collection','Customer','Location','Market','Order','Page','Product','ProductVariant','Shop']
module.exports.isHasMetafields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHasMetafields"')
  return HasMetafields_possibleTypes.includes(obj.__typename)
}



var Image_possibleTypes = ['Image']
module.exports.isImage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isImage"')
  return Image_possibleTypes.includes(obj.__typename)
}



var ImageConnection_possibleTypes = ['ImageConnection']
module.exports.isImageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isImageConnection"')
  return ImageConnection_possibleTypes.includes(obj.__typename)
}



var ImageEdge_possibleTypes = ['ImageEdge']
module.exports.isImageEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isImageEdge"')
  return ImageEdge_possibleTypes.includes(obj.__typename)
}



var Language_possibleTypes = ['Language']
module.exports.isLanguage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLanguage"')
  return Language_possibleTypes.includes(obj.__typename)
}



var Localization_possibleTypes = ['Localization']
module.exports.isLocalization = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLocalization"')
  return Localization_possibleTypes.includes(obj.__typename)
}



var Location_possibleTypes = ['Location']
module.exports.isLocation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLocation"')
  return Location_possibleTypes.includes(obj.__typename)
}



var LocationAddress_possibleTypes = ['LocationAddress']
module.exports.isLocationAddress = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLocationAddress"')
  return LocationAddress_possibleTypes.includes(obj.__typename)
}



var LocationConnection_possibleTypes = ['LocationConnection']
module.exports.isLocationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLocationConnection"')
  return LocationConnection_possibleTypes.includes(obj.__typename)
}



var LocationEdge_possibleTypes = ['LocationEdge']
module.exports.isLocationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLocationEdge"')
  return LocationEdge_possibleTypes.includes(obj.__typename)
}



var MailingAddress_possibleTypes = ['MailingAddress']
module.exports.isMailingAddress = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMailingAddress"')
  return MailingAddress_possibleTypes.includes(obj.__typename)
}



var MailingAddressConnection_possibleTypes = ['MailingAddressConnection']
module.exports.isMailingAddressConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMailingAddressConnection"')
  return MailingAddressConnection_possibleTypes.includes(obj.__typename)
}



var MailingAddressEdge_possibleTypes = ['MailingAddressEdge']
module.exports.isMailingAddressEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMailingAddressEdge"')
  return MailingAddressEdge_possibleTypes.includes(obj.__typename)
}



var ManualDiscountApplication_possibleTypes = ['ManualDiscountApplication']
module.exports.isManualDiscountApplication = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isManualDiscountApplication"')
  return ManualDiscountApplication_possibleTypes.includes(obj.__typename)
}



var Market_possibleTypes = ['Market']
module.exports.isMarket = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarket"')
  return Market_possibleTypes.includes(obj.__typename)
}



var Media_possibleTypes = ['ExternalVideo','MediaImage','Model3d','Video']
module.exports.isMedia = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMedia"')
  return Media_possibleTypes.includes(obj.__typename)
}



var MediaConnection_possibleTypes = ['MediaConnection']
module.exports.isMediaConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaConnection"')
  return MediaConnection_possibleTypes.includes(obj.__typename)
}



var MediaEdge_possibleTypes = ['MediaEdge']
module.exports.isMediaEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaEdge"')
  return MediaEdge_possibleTypes.includes(obj.__typename)
}



var MediaImage_possibleTypes = ['MediaImage']
module.exports.isMediaImage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaImage"')
  return MediaImage_possibleTypes.includes(obj.__typename)
}



var MediaPresentation_possibleTypes = ['MediaPresentation']
module.exports.isMediaPresentation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaPresentation"')
  return MediaPresentation_possibleTypes.includes(obj.__typename)
}



var Menu_possibleTypes = ['Menu']
module.exports.isMenu = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenu"')
  return Menu_possibleTypes.includes(obj.__typename)
}



var MenuItem_possibleTypes = ['MenuItem']
module.exports.isMenuItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItem"')
  return MenuItem_possibleTypes.includes(obj.__typename)
}



var MenuItemResource_possibleTypes = ['Article','Blog','Collection','Page','Product','ShopPolicy']
module.exports.isMenuItemResource = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemResource"')
  return MenuItemResource_possibleTypes.includes(obj.__typename)
}



var Merchandise_possibleTypes = ['ProductVariant']
module.exports.isMerchandise = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMerchandise"')
  return Merchandise_possibleTypes.includes(obj.__typename)
}



var Metafield_possibleTypes = ['Metafield']
module.exports.isMetafield = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetafield"')
  return Metafield_possibleTypes.includes(obj.__typename)
}



var MetafieldDeleteUserError_possibleTypes = ['MetafieldDeleteUserError']
module.exports.isMetafieldDeleteUserError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetafieldDeleteUserError"')
  return MetafieldDeleteUserError_possibleTypes.includes(obj.__typename)
}



var MetafieldParentResource_possibleTypes = ['Article','Blog','Cart','Collection','Customer','Location','Market','Order','Page','Product','ProductVariant','Shop']
module.exports.isMetafieldParentResource = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetafieldParentResource"')
  return MetafieldParentResource_possibleTypes.includes(obj.__typename)
}



var MetafieldReference_possibleTypes = ['Collection','GenericFile','MediaImage','Metaobject','Page','Product','ProductVariant','Video']
module.exports.isMetafieldReference = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetafieldReference"')
  return MetafieldReference_possibleTypes.includes(obj.__typename)
}



var MetafieldReferenceConnection_possibleTypes = ['MetafieldReferenceConnection']
module.exports.isMetafieldReferenceConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetafieldReferenceConnection"')
  return MetafieldReferenceConnection_possibleTypes.includes(obj.__typename)
}



var MetafieldReferenceEdge_possibleTypes = ['MetafieldReferenceEdge']
module.exports.isMetafieldReferenceEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetafieldReferenceEdge"')
  return MetafieldReferenceEdge_possibleTypes.includes(obj.__typename)
}



var MetafieldsSetUserError_possibleTypes = ['MetafieldsSetUserError']
module.exports.isMetafieldsSetUserError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetafieldsSetUserError"')
  return MetafieldsSetUserError_possibleTypes.includes(obj.__typename)
}



var Metaobject_possibleTypes = ['Metaobject']
module.exports.isMetaobject = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetaobject"')
  return Metaobject_possibleTypes.includes(obj.__typename)
}



var MetaobjectConnection_possibleTypes = ['MetaobjectConnection']
module.exports.isMetaobjectConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetaobjectConnection"')
  return MetaobjectConnection_possibleTypes.includes(obj.__typename)
}



var MetaobjectEdge_possibleTypes = ['MetaobjectEdge']
module.exports.isMetaobjectEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetaobjectEdge"')
  return MetaobjectEdge_possibleTypes.includes(obj.__typename)
}



var MetaobjectField_possibleTypes = ['MetaobjectField']
module.exports.isMetaobjectField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetaobjectField"')
  return MetaobjectField_possibleTypes.includes(obj.__typename)
}



var Model3d_possibleTypes = ['Model3d']
module.exports.isModel3d = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isModel3d"')
  return Model3d_possibleTypes.includes(obj.__typename)
}



var Model3dSource_possibleTypes = ['Model3dSource']
module.exports.isModel3dSource = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isModel3dSource"')
  return Model3dSource_possibleTypes.includes(obj.__typename)
}



var MoneyV2_possibleTypes = ['MoneyV2']
module.exports.isMoneyV2 = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMoneyV2"')
  return MoneyV2_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
module.exports.isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var Node_possibleTypes = ['AppliedGiftCard','Article','Blog','Cart','CartLine','Checkout','CheckoutLineItem','Collection','Comment','ComponentizableCartLine','ExternalVideo','GenericFile','Location','MailingAddress','Market','MediaImage','MediaPresentation','Menu','MenuItem','Metafield','Metaobject','Model3d','Order','Page','Payment','Product','ProductOption','ProductVariant','Shop','ShopPolicy','UrlRedirect','Video']
module.exports.isNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNode"')
  return Node_possibleTypes.includes(obj.__typename)
}



var OnlineStorePublishable_possibleTypes = ['Article','Blog','Collection','Page','Product']
module.exports.isOnlineStorePublishable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOnlineStorePublishable"')
  return OnlineStorePublishable_possibleTypes.includes(obj.__typename)
}



var Order_possibleTypes = ['Order']
module.exports.isOrder = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrder"')
  return Order_possibleTypes.includes(obj.__typename)
}



var OrderConnection_possibleTypes = ['OrderConnection']
module.exports.isOrderConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrderConnection"')
  return OrderConnection_possibleTypes.includes(obj.__typename)
}



var OrderEdge_possibleTypes = ['OrderEdge']
module.exports.isOrderEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrderEdge"')
  return OrderEdge_possibleTypes.includes(obj.__typename)
}



var OrderLineItem_possibleTypes = ['OrderLineItem']
module.exports.isOrderLineItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrderLineItem"')
  return OrderLineItem_possibleTypes.includes(obj.__typename)
}



var OrderLineItemConnection_possibleTypes = ['OrderLineItemConnection']
module.exports.isOrderLineItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrderLineItemConnection"')
  return OrderLineItemConnection_possibleTypes.includes(obj.__typename)
}



var OrderLineItemEdge_possibleTypes = ['OrderLineItemEdge']
module.exports.isOrderLineItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrderLineItemEdge"')
  return OrderLineItemEdge_possibleTypes.includes(obj.__typename)
}



var Page_possibleTypes = ['Page']
module.exports.isPage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPage"')
  return Page_possibleTypes.includes(obj.__typename)
}



var PageConnection_possibleTypes = ['PageConnection']
module.exports.isPageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageConnection"')
  return PageConnection_possibleTypes.includes(obj.__typename)
}



var PageEdge_possibleTypes = ['PageEdge']
module.exports.isPageEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageEdge"')
  return PageEdge_possibleTypes.includes(obj.__typename)
}



var PageInfo_possibleTypes = ['PageInfo']
module.exports.isPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageInfo"')
  return PageInfo_possibleTypes.includes(obj.__typename)
}



var Payment_possibleTypes = ['Payment']
module.exports.isPayment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPayment"')
  return Payment_possibleTypes.includes(obj.__typename)
}



var PaymentSettings_possibleTypes = ['PaymentSettings']
module.exports.isPaymentSettings = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPaymentSettings"')
  return PaymentSettings_possibleTypes.includes(obj.__typename)
}



var PredictiveSearchResult_possibleTypes = ['PredictiveSearchResult']
module.exports.isPredictiveSearchResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPredictiveSearchResult"')
  return PredictiveSearchResult_possibleTypes.includes(obj.__typename)
}



var PricingPercentageValue_possibleTypes = ['PricingPercentageValue']
module.exports.isPricingPercentageValue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPricingPercentageValue"')
  return PricingPercentageValue_possibleTypes.includes(obj.__typename)
}



var PricingValue_possibleTypes = ['MoneyV2','PricingPercentageValue']
module.exports.isPricingValue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPricingValue"')
  return PricingValue_possibleTypes.includes(obj.__typename)
}



var Product_possibleTypes = ['Product']
module.exports.isProduct = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProduct"')
  return Product_possibleTypes.includes(obj.__typename)
}



var ProductConnection_possibleTypes = ['ProductConnection']
module.exports.isProductConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductConnection"')
  return ProductConnection_possibleTypes.includes(obj.__typename)
}



var ProductEdge_possibleTypes = ['ProductEdge']
module.exports.isProductEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductEdge"')
  return ProductEdge_possibleTypes.includes(obj.__typename)
}



var ProductOption_possibleTypes = ['ProductOption']
module.exports.isProductOption = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductOption"')
  return ProductOption_possibleTypes.includes(obj.__typename)
}



var ProductPriceRange_possibleTypes = ['ProductPriceRange']
module.exports.isProductPriceRange = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductPriceRange"')
  return ProductPriceRange_possibleTypes.includes(obj.__typename)
}



var ProductVariant_possibleTypes = ['ProductVariant']
module.exports.isProductVariant = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductVariant"')
  return ProductVariant_possibleTypes.includes(obj.__typename)
}



var ProductVariantConnection_possibleTypes = ['ProductVariantConnection']
module.exports.isProductVariantConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductVariantConnection"')
  return ProductVariantConnection_possibleTypes.includes(obj.__typename)
}



var ProductVariantEdge_possibleTypes = ['ProductVariantEdge']
module.exports.isProductVariantEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductVariantEdge"')
  return ProductVariantEdge_possibleTypes.includes(obj.__typename)
}



var QueryRoot_possibleTypes = ['QueryRoot']
module.exports.isQueryRoot = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQueryRoot"')
  return QueryRoot_possibleTypes.includes(obj.__typename)
}



var SEO_possibleTypes = ['SEO']
module.exports.isSEO = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSEO"')
  return SEO_possibleTypes.includes(obj.__typename)
}



var ScriptDiscountApplication_possibleTypes = ['ScriptDiscountApplication']
module.exports.isScriptDiscountApplication = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isScriptDiscountApplication"')
  return ScriptDiscountApplication_possibleTypes.includes(obj.__typename)
}



var SearchQuerySuggestion_possibleTypes = ['SearchQuerySuggestion']
module.exports.isSearchQuerySuggestion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSearchQuerySuggestion"')
  return SearchQuerySuggestion_possibleTypes.includes(obj.__typename)
}



var SearchResultItem_possibleTypes = ['Article','Page','Product']
module.exports.isSearchResultItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSearchResultItem"')
  return SearchResultItem_possibleTypes.includes(obj.__typename)
}



var SearchResultItemConnection_possibleTypes = ['SearchResultItemConnection']
module.exports.isSearchResultItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSearchResultItemConnection"')
  return SearchResultItemConnection_possibleTypes.includes(obj.__typename)
}



var SearchResultItemEdge_possibleTypes = ['SearchResultItemEdge']
module.exports.isSearchResultItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSearchResultItemEdge"')
  return SearchResultItemEdge_possibleTypes.includes(obj.__typename)
}



var SelectedOption_possibleTypes = ['SelectedOption']
module.exports.isSelectedOption = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSelectedOption"')
  return SelectedOption_possibleTypes.includes(obj.__typename)
}



var SellingPlan_possibleTypes = ['SellingPlan']
module.exports.isSellingPlan = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlan"')
  return SellingPlan_possibleTypes.includes(obj.__typename)
}



var SellingPlanAllocation_possibleTypes = ['SellingPlanAllocation']
module.exports.isSellingPlanAllocation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanAllocation"')
  return SellingPlanAllocation_possibleTypes.includes(obj.__typename)
}



var SellingPlanAllocationConnection_possibleTypes = ['SellingPlanAllocationConnection']
module.exports.isSellingPlanAllocationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanAllocationConnection"')
  return SellingPlanAllocationConnection_possibleTypes.includes(obj.__typename)
}



var SellingPlanAllocationEdge_possibleTypes = ['SellingPlanAllocationEdge']
module.exports.isSellingPlanAllocationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanAllocationEdge"')
  return SellingPlanAllocationEdge_possibleTypes.includes(obj.__typename)
}



var SellingPlanAllocationPriceAdjustment_possibleTypes = ['SellingPlanAllocationPriceAdjustment']
module.exports.isSellingPlanAllocationPriceAdjustment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanAllocationPriceAdjustment"')
  return SellingPlanAllocationPriceAdjustment_possibleTypes.includes(obj.__typename)
}



var SellingPlanCheckoutCharge_possibleTypes = ['SellingPlanCheckoutCharge']
module.exports.isSellingPlanCheckoutCharge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanCheckoutCharge"')
  return SellingPlanCheckoutCharge_possibleTypes.includes(obj.__typename)
}



var SellingPlanCheckoutChargePercentageValue_possibleTypes = ['SellingPlanCheckoutChargePercentageValue']
module.exports.isSellingPlanCheckoutChargePercentageValue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanCheckoutChargePercentageValue"')
  return SellingPlanCheckoutChargePercentageValue_possibleTypes.includes(obj.__typename)
}



var SellingPlanCheckoutChargeValue_possibleTypes = ['MoneyV2','SellingPlanCheckoutChargePercentageValue']
module.exports.isSellingPlanCheckoutChargeValue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanCheckoutChargeValue"')
  return SellingPlanCheckoutChargeValue_possibleTypes.includes(obj.__typename)
}



var SellingPlanConnection_possibleTypes = ['SellingPlanConnection']
module.exports.isSellingPlanConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanConnection"')
  return SellingPlanConnection_possibleTypes.includes(obj.__typename)
}



var SellingPlanEdge_possibleTypes = ['SellingPlanEdge']
module.exports.isSellingPlanEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanEdge"')
  return SellingPlanEdge_possibleTypes.includes(obj.__typename)
}



var SellingPlanFixedAmountPriceAdjustment_possibleTypes = ['SellingPlanFixedAmountPriceAdjustment']
module.exports.isSellingPlanFixedAmountPriceAdjustment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanFixedAmountPriceAdjustment"')
  return SellingPlanFixedAmountPriceAdjustment_possibleTypes.includes(obj.__typename)
}



var SellingPlanFixedPriceAdjustment_possibleTypes = ['SellingPlanFixedPriceAdjustment']
module.exports.isSellingPlanFixedPriceAdjustment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanFixedPriceAdjustment"')
  return SellingPlanFixedPriceAdjustment_possibleTypes.includes(obj.__typename)
}



var SellingPlanGroup_possibleTypes = ['SellingPlanGroup']
module.exports.isSellingPlanGroup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanGroup"')
  return SellingPlanGroup_possibleTypes.includes(obj.__typename)
}



var SellingPlanGroupConnection_possibleTypes = ['SellingPlanGroupConnection']
module.exports.isSellingPlanGroupConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanGroupConnection"')
  return SellingPlanGroupConnection_possibleTypes.includes(obj.__typename)
}



var SellingPlanGroupEdge_possibleTypes = ['SellingPlanGroupEdge']
module.exports.isSellingPlanGroupEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanGroupEdge"')
  return SellingPlanGroupEdge_possibleTypes.includes(obj.__typename)
}



var SellingPlanGroupOption_possibleTypes = ['SellingPlanGroupOption']
module.exports.isSellingPlanGroupOption = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanGroupOption"')
  return SellingPlanGroupOption_possibleTypes.includes(obj.__typename)
}



var SellingPlanOption_possibleTypes = ['SellingPlanOption']
module.exports.isSellingPlanOption = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanOption"')
  return SellingPlanOption_possibleTypes.includes(obj.__typename)
}



var SellingPlanPercentagePriceAdjustment_possibleTypes = ['SellingPlanPercentagePriceAdjustment']
module.exports.isSellingPlanPercentagePriceAdjustment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanPercentagePriceAdjustment"')
  return SellingPlanPercentagePriceAdjustment_possibleTypes.includes(obj.__typename)
}



var SellingPlanPriceAdjustment_possibleTypes = ['SellingPlanPriceAdjustment']
module.exports.isSellingPlanPriceAdjustment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanPriceAdjustment"')
  return SellingPlanPriceAdjustment_possibleTypes.includes(obj.__typename)
}



var SellingPlanPriceAdjustmentValue_possibleTypes = ['SellingPlanFixedAmountPriceAdjustment','SellingPlanFixedPriceAdjustment','SellingPlanPercentagePriceAdjustment']
module.exports.isSellingPlanPriceAdjustmentValue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSellingPlanPriceAdjustmentValue"')
  return SellingPlanPriceAdjustmentValue_possibleTypes.includes(obj.__typename)
}



var ShippingRate_possibleTypes = ['ShippingRate']
module.exports.isShippingRate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isShippingRate"')
  return ShippingRate_possibleTypes.includes(obj.__typename)
}



var Shop_possibleTypes = ['Shop']
module.exports.isShop = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isShop"')
  return Shop_possibleTypes.includes(obj.__typename)
}



var ShopPolicy_possibleTypes = ['ShopPolicy']
module.exports.isShopPolicy = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isShopPolicy"')
  return ShopPolicy_possibleTypes.includes(obj.__typename)
}



var ShopPolicyWithDefault_possibleTypes = ['ShopPolicyWithDefault']
module.exports.isShopPolicyWithDefault = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isShopPolicyWithDefault"')
  return ShopPolicyWithDefault_possibleTypes.includes(obj.__typename)
}



var StoreAvailability_possibleTypes = ['StoreAvailability']
module.exports.isStoreAvailability = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStoreAvailability"')
  return StoreAvailability_possibleTypes.includes(obj.__typename)
}



var StoreAvailabilityConnection_possibleTypes = ['StoreAvailabilityConnection']
module.exports.isStoreAvailabilityConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStoreAvailabilityConnection"')
  return StoreAvailabilityConnection_possibleTypes.includes(obj.__typename)
}



var StoreAvailabilityEdge_possibleTypes = ['StoreAvailabilityEdge']
module.exports.isStoreAvailabilityEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStoreAvailabilityEdge"')
  return StoreAvailabilityEdge_possibleTypes.includes(obj.__typename)
}



var StringConnection_possibleTypes = ['StringConnection']
module.exports.isStringConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStringConnection"')
  return StringConnection_possibleTypes.includes(obj.__typename)
}



var StringEdge_possibleTypes = ['StringEdge']
module.exports.isStringEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStringEdge"')
  return StringEdge_possibleTypes.includes(obj.__typename)
}



var SubmissionError_possibleTypes = ['SubmissionError']
module.exports.isSubmissionError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmissionError"')
  return SubmissionError_possibleTypes.includes(obj.__typename)
}



var SubmitAlreadyAccepted_possibleTypes = ['SubmitAlreadyAccepted']
module.exports.isSubmitAlreadyAccepted = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmitAlreadyAccepted"')
  return SubmitAlreadyAccepted_possibleTypes.includes(obj.__typename)
}



var SubmitFailed_possibleTypes = ['SubmitFailed']
module.exports.isSubmitFailed = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmitFailed"')
  return SubmitFailed_possibleTypes.includes(obj.__typename)
}



var SubmitSuccess_possibleTypes = ['SubmitSuccess']
module.exports.isSubmitSuccess = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmitSuccess"')
  return SubmitSuccess_possibleTypes.includes(obj.__typename)
}



var SubmitThrottled_possibleTypes = ['SubmitThrottled']
module.exports.isSubmitThrottled = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmitThrottled"')
  return SubmitThrottled_possibleTypes.includes(obj.__typename)
}



var Trackable_possibleTypes = ['Article','Collection','Page','Product','SearchQuerySuggestion']
module.exports.isTrackable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTrackable"')
  return Trackable_possibleTypes.includes(obj.__typename)
}



var Transaction_possibleTypes = ['Transaction']
module.exports.isTransaction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransaction"')
  return Transaction_possibleTypes.includes(obj.__typename)
}



var UnitPriceMeasurement_possibleTypes = ['UnitPriceMeasurement']
module.exports.isUnitPriceMeasurement = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnitPriceMeasurement"')
  return UnitPriceMeasurement_possibleTypes.includes(obj.__typename)
}



var UrlRedirect_possibleTypes = ['UrlRedirect']
module.exports.isUrlRedirect = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUrlRedirect"')
  return UrlRedirect_possibleTypes.includes(obj.__typename)
}



var UrlRedirectConnection_possibleTypes = ['UrlRedirectConnection']
module.exports.isUrlRedirectConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUrlRedirectConnection"')
  return UrlRedirectConnection_possibleTypes.includes(obj.__typename)
}



var UrlRedirectEdge_possibleTypes = ['UrlRedirectEdge']
module.exports.isUrlRedirectEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUrlRedirectEdge"')
  return UrlRedirectEdge_possibleTypes.includes(obj.__typename)
}



var UserError_possibleTypes = ['UserError']
module.exports.isUserError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserError"')
  return UserError_possibleTypes.includes(obj.__typename)
}



var Video_possibleTypes = ['Video']
module.exports.isVideo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVideo"')
  return Video_possibleTypes.includes(obj.__typename)
}



var VideoSource_possibleTypes = ['VideoSource']
module.exports.isVideoSource = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVideoSource"')
  return VideoSource_possibleTypes.includes(obj.__typename)
}
