import React, { useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import type {
  FooterQuery,
  HeaderQuery,
  ShopLayoutQuery,
} from 'storefrontapi.generated';
type Props = {
  children: React.ReactNode;
  layout: {
    shop: ShopLayoutQuery['shop'];
    header: HeaderQuery;
    footer: FooterQuery;
  };
  // key?: string;
};

const Layout = (props: Props) => {
  const announcementBarHeight = 28;
  return (
    <div
      style={{
        height: '100%',
        minHeight: '100vh',
      }}
      className="flex flex-col justify-between"
    >
      <Header layout={props.layout} />
      <div
        style={{
          marginTop: 100 + announcementBarHeight,
        }}
        className="content"
      >
        {props.children}
      </div>
      <Footer layout={props.layout} />
    </div>
  );
};

export default Layout;
