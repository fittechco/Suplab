import { json, type LoaderFunctionArgs } from '@shopify/remix-oxygen'
import React, { useEffect, useState } from 'react'
import { ON_METAOBJECT } from './about'
import { Form, useLoaderData } from '@remix-run/react'
import type { App } from '../api/type'
import LazyImage from '../ft-lib/LazyImage'
import resizeImage from '../ft-lib/resizeImages'
import arrayToObject from '../ft-lib/ArrayToObject'
import { Colors } from '../ft-lib/shared'
import CTAButton from '../components/CTAButton'

export async function loader({ context }: LoaderFunctionArgs) {
    const metaobject = await context.storefront.query(CONTACTQUERY, {
        cache: {
            maxAge: 60 * 60 * 24,
            staleWhileRevalidate: 60 * 60 * 24,
        },
    })
    return json({
        metaobject,
    })
}

export default function Contact() {
    const { metaobject } = useLoaderData<typeof loader>()
    const contactSection = metaobject.metaobject as App.HomePageTemplate.ContactSection
    const fields = arrayToObject({ array: contactSection.fields })
    const [formData, setFormData] = useState<{
        [key: string]: string | number | boolean | null
    } | null>(null)
    const handleFormDataChange = (args: {
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    }) => {
        setFormData((prev) => ({
            ...prev,
            [args.event.target.name]: args.event.target.value,
        }))
    }

    return (
        <div className='contact-container w-full h-full'>
            <div className='contact-wrapper flex flex-col md:flex-row-reverse gap-5 w-full h-full container'>
                <div
                    style={{
                        backgroundColor: Colors.primary,
                        borderRadius: '12px',
                    }}
                    className="contact-location flex-1 ">
                    {fields.image?.reference.image.url &&
                        <LazyImage
                            alt='Suplab Store Supplements Contact'
                            className='object-cover min-h-[420px]'
                            src={resizeImage(fields.image?.reference.image.url, 800)}
                        />}
                </div>
                <div className='contact-form flex-1 space-y-4 md:space-y-6'>
                    <div className='contact-header w-full'>
                        <h1
                            style={{
                                color: Colors.text,
                            }}
                            className='ft-text-main text-3xl'>Contact</h1>
                    </div>
                    <div
                        className='form-inputs flex flex-col gap-5 w-full'>
                        <div className='name'>
                            <label htmlFor='name'>
                                <input
                                    onChange={(e) => {
                                        handleFormDataChange({ event: e })
                                    }}
                                    type='text' className='w-full p-2' placeholder='Name' name='contact[name]' id='name' />
                            </label>
                        </div>
                        <div className='email w-full'>
                            <label htmlFor='email'>
                                <input
                                    onChange={(e) => {
                                        handleFormDataChange({ event: e })
                                    }}

                                    className='w-full p-2' type='text' placeholder='Email' name='contact[email]' id='email' />
                            </label>
                        </div>
                        <div className='phone w-full'>
                            <label htmlFor='phone'>
                                <input
                                    onChange={(e) => {
                                        handleFormDataChange({ event: e })
                                    }}
                                    className='w-full p-2' type='text' placeholder='Phone' name='contact[phone]' id='phone' />
                            </label>
                        </div>
                        <div className='message w-full'>
                            <label htmlFor='message' className=''>
                                <textarea
                                    onChange={(e) => {
                                        handleFormDataChange({ event: e })
                                    }}
                                    className='w-full p-2' name='contact[message]' placeholder='Message' id='message' />
                            </label>
                        </div>
                    </div>
                    <div className='CTA submit'>
                        <CTAButton
                            onClick={async () => {
                                await fetch('/api/contact', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        formData,
                                    })
                                }).then(res => res.json())
                                    .then(res => console.log(res))
                            }}
                            fullWidth>
                            Submit
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CONTACTQUERY = `#graphql
    query ContactMetaobject {
        metaobject(handle: { handle: "contact-section", type: "contact_section" }) {
            type
            fields {
                key
                value
                type
                references(first: 20) {
                    nodes {
                        ... on Metaobject {
                            type
                            fields {
                                key
                                value
                                type
                                reference {
                                    ... on MediaImage {
                                        image {
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                reference {
                    ... on MediaImage {
                        image {
                            url
                        }
                    }
                    ... on Collection {
                        handle
                        title
                        products(first: 20) {
                            nodes {
                                title
                                handle
                                description
                                priceRange {
                                    minVariantPrice {
                                        amount
                                        currencyCode
                                    }
                                }
                                images(first: 20) {
                                    nodes {
                                        url
                                    }
                                }
                                featuredImage {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
` as const
