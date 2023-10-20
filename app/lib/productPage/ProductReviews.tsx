import { Suspense } from 'react'
import { Await } from '@remix-run/react'
import { Review } from 'schema-dts'
import { ReviewWidget } from '~/app/ft-lib/apps/JudgeMe'
import { ProductQuery } from '~/storefrontapi.generated'

export default function ProductReviews(props: {
  product: ProductQuery['product']
  reviewWidget: Promise<ReviewWidget>
  widgetSettings: Promise<string>
}) {
  const externalId = props.product?.id.split('/').pop() || ''
  // const useReviews = useQuery('reviews', async () => {
  //   const judgeMeApi = new JudgeMeService()
  //   const reviews = await judgeMeApi.getProductReviews(externalId)
  //   return reviews
  // })

  // resolve the promises from the props

  console.log(props.reviewWidget, 'useReviews');
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Await resolve={props.reviewWidget}>
          {(reviewWidget) => {
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: reviewWidget.widget,
                }}
              />
            )
          }}
        </Await>
        <Await resolve={props.widgetSettings}>
          {(widgetSettings) => {
            return (
              <div
                dangerouslySetInnerHTML={{
                  // in order to let the script pass the csp we need to give a nonce to the script
                  __html: `${widgetSettings}`,
                }}
              />
            )
          }}
        </Await>
      </Suspense>
    </div>
  )
}