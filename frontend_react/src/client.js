import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

// const {createClient} = require('@sanity/client')

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: 'v2021-10-21',
    useCdn: true,
    token:process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
// function urlFor(source) {
//     return builder.image(source)
//   }