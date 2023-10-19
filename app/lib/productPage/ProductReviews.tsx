import { Await } from '@remix-run/react'
import { Suspense } from 'react'
import { Review } from 'schema-dts'
import { ReviewWidget } from '~/app/ft-lib/apps/JudgeMe'
import { ProductQuery } from '~/storefrontapi.generated'

export default function ProductReviews(props: {
  product: ProductQuery['product']
  reviewWidget: Promise<ReviewWidget>
  widgetSettings: Promise<string>
}) {
  const externalId = props.product?.id.split('/').pop() || ''

  // Resolve the promises from the props using Promise.all
  const extractWidgetsPromises = async () => {
    const [reviewWidget, widgetSettings] = await Promise.all([
      props.reviewWidget,
      props.widgetSettings,
    ]);
    return { reviewWidget, widgetSettings };
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={extractWidgetsPromises()}>
        {({ reviewWidget, widgetSettings }) => {
          return (
            <div>
              <div dangerouslySetInnerHTML={{ __html: reviewWidget.widget }} />
              <div dangerouslySetInnerHTML={{ __html: widgetSettings }} />
            </div>
          )
        }}
      </Await>
    </Suspense>
  )
}
