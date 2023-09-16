// import { useMatches } from "@remix-run/react";
// import { Suspense } from "react";

// function CartDrawer() {
//   const [root] = useMatches();

//   // Cart data is deferred
//   // Use Suspense to unblock UI rendering and Await to resolve when data arrives
//   return (
//     <Suspense fallback={<CartLoading />}>
//       <Await resolve={root.data?.cart}>
//         {(cart) => <Cart cart={cart} />}
//       </Await>
//     </Suspense>
//   );
// }
