import { CartForm, Money } from '@shopify/hydrogen';
import type { ProductQuery } from 'storefrontapi.generated';
import ProductForm from './ProductForm';

type Props = {
  product: NonNullable<ProductQuery['product']>;
  isTop: boolean;
  selectedVariant: NonNullable<ProductQuery['product']>['variants']['nodes'][0];
};

export default function MobileProductDetails(props: Props) {
  const { product, selectedVariant } = props;
  return (
    <div
      style={{
        zIndex: 10,
        position: 'relative',
      }}
      className="box md:hidden space-y-4 shadow-lg px-5 py-5 white-background-blur rounded-t-3xl"
    >
      <ProductForm
        isTop={props.isTop}
        selectedVariant={selectedVariant}
        product={product}
      />
    </div>
  );
}
