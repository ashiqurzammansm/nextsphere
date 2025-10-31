'use client';

import { DefaultSeo } from 'next-seo';

export default function SEO() {
    return (
        <DefaultSeo
            openGraph={{
                type: 'website',
                url: 'https://nextsphere.app',
                title: 'NextSphere Technologies — Code. Create. Inspire.',
                description: 'We build web & mobile apps that inspire.',
            }}
            titleTemplate="%s | NextSphere Technologies"
            defaultTitle="NextSphere Technologies — Code. Create. Inspire."
        />
    );
}
