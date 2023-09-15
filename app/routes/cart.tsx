// import { ActionArgs, json } from '@shopify/remix-oxygen';
// import {
//     type CartQueryData,
//     CartForm,
//   } from '../../hydrogen';
//   import invariant from 'tiny-invariant';
  
//   export async function action({request, context}: ActionArgs) {
//     const {cart} = context;
  
//     const formData = await request.formData();
//     const {action, inputs} = CartForm.getFormInput(formData);
  
//     let result: CartQueryData;
  
//     switch(action) {
//       case CartForm.ACTIONS.LinesAdd:
//         result = await cart.addLines(inputs.lines);
//         break;
//       case CartForm.ACTIONS.LinesUpdate:
//         result = await cart.updateLines(inputs.lines);
//         break;
//       case CartForm.ACTIONS.LinesRemove:
//         result = await cart.removeLines(inputs.lineIds);
//         break;
//       default:
//         invariant(false, `${action} cart action is not defined`);
//     }
  
//     // The Cart ID might change after each mutation, so update it each time.
//     const headers = cart.setCartId(result.cart.id);
  
//     return json(
//       result,
//       {status: 200, headers},
//     );
//   }
  