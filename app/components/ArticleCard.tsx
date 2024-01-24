import type {Article} from '@shopify/hydrogen/storefront-api-types';
import {Colors} from '../ft-lib/shared';
import {RemixLink} from '../components/RemixLink';
import {Text} from '../ft-lib/Text';
import {Image} from '@shopify/hydrogen';
import {useRootLoaderData} from '../root';

export default function ArticleCard({
  blogHandle,
  article,
  loading,
}: {
  blogHandle: string;
  article: Article;
  loading?: HTMLImageElement['loading'];
}) {
  const rootData = useRootLoaderData();
  const {locale} = rootData;
  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  return (
    <div>
      <RemixLink to={`/blogs/${blogHandle}/${article.handle}`}>
        {article.image && (
          <div className="card-image">
            <Image
              alt={article.image.altText || article.title}
              className="object-cover w-full rounded-[30px]"
              data={article.image}
              aspectRatio="3/2"
              loading={loading}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        )}
        <Text
          type="h6"
          style={{
            color: Colors.secondary,
          }}
          className={`mt-4 mb-4 ${
            isArabic ? 'arTextAlignItems' : 'enTextAlignItems'
          }`}
        >
          {article.title}
        </Text>
        <div
          className={`flex justify-between ${
            isArabic ? 'arFlexDirection' : 'enFlexDirection'
          }`}
        >
          <Text
            type="h7"
            style={{
              color: Colors.secondary,
            }}
            className="md:text-base lg:text-base"
          >
            {article.author?.name}
          </Text>
          <Text
            type="p3"
            style={{
              color: Colors.secondary,
            }}
            className="md:text-base lg:text-base"
          >
            {article.publishedAt}
          </Text>
        </div>
      </RemixLink>
    </div>
  );
}
