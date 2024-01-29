import {type Storefront, type I18nBase} from '@shopify/hydrogen';
import MetaobjectService from '../services/metaobjectService';

class MetaobjectController {
  storefront: Storefront<I18nBase>;
  constructor(props: {storefront: Storefront<I18nBase>}) {
    this.storefront = props.storefront;
  }

  async getMetaobjectByHandle(args: {
    handle: string;
    type: string;
    language: string;
    country: string;
  }) {
    const {handle, type, language, country} = args;
    const MS = new MetaobjectService({storefront: this.storefront});
    const metaobject = await MS.getMetaobjectByHandle({
      handle,
      type,
      language,
      country,
    });
    return metaobject;
  }
}

export default MetaobjectController;
