import {useEffect, useState} from 'react';
import type {App} from '../api/type';

const Collections = () => {
  const [collections, setCollections] = useState<
    Array<App.Shopify.Storefront.Collection>
  >([]);

  return (
    <div className="collections-container">
      <h1>Collections</h1>
      {collections.map((collection) => (
        <div key={collection.id} className="">
          <h2>{collection.id}</h2>
        </div>
      ))}
    </div>
  );
};

export default Collections;
