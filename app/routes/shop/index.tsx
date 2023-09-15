import React, { useEffect, useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { LoaderArgs, json } from '@shopify/remix-oxygen';

function Shop() {
    <div>
        <h1>Shop</h1>
        <h1>Shop</h1>
        <h1>Shop</h1>
        <h1>Shop</h1>
        <h1>Shop</h1>
        <h1>Shop</h1>
        <h1>Shop</h1>
    </div>
}

export async function loader({ context }: LoaderArgs) {
    return json({
        message: 'Hello World',
    });
}

export default Shop;