import React from 'react'
import CTAButton from '../components/CTAButton'
import { LoaderArgs, json } from '@shopify/remix-oxygen'
import CollectionController from '../ft-lib/ft-server/controllers/CollectionController'
import { useLoaderData, useNavigate, useNavigation } from '@remix-run/react';
import LazyImage from '../ft-lib/LazyImage';
import resizeImage from '../ft-lib/resizeImages';
import { Colors } from '../ft-lib/shared';
import FTicons from '../ft-lib/FTicon';

export async function loader({ context }: LoaderArgs) {
    const collections = await CollectionController.getAllCollections();
    return json({ collections })
}

export default function Collections() {
    const { collections } = useLoaderData<typeof loader>();
    const navigate = useNavigate();
    return (
        <div className='collection-container grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-5 container'>
            {collections.nodes.map((collection) => {
                return (
                    <div className='collection-card relative flex justify-start items-end h-72 w-full' key={collection.id}>
                        <div
                            style={{
                                backgroundColor: Colors.secondary,
                                borderRadius: '12px',
                            }}
                            className='collection-card__image w-full h-full shadow'>
                            {collection.image?.url ?
                                <LazyImage
                                    style={{
                                        borderRadius: '12px',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    src={resizeImage(collection.image?.url, 600)} /> : (
                                    <FTicons
                                        name='image'
                                        className='w-full h-full'
                                    />
                                )
                            }
                        </div>
                        <div
                            style={{
                                zIndex: 99,
                            }}
                            className='collection-card__content space-y-3 absolute p-3'>
                            {collection.title &&
                                <h2
                                    style={{
                                        color: Colors.textSecondary,
                                    }}
                                    className='ft-text-main text-xl md:text-2xl '>{collection.title}</h2>}
                            <CTAButton
                                className='text-base md:text-xl'
                                onClick={() => {
                                    navigate(`/collections/${collection.handle}`)
                                }}
                            >View Collection</CTAButton>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}