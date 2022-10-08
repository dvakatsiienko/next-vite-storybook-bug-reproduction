import Head from 'next/head';

import { Links } from '@/components';

export default function Typescript() {
    return (
        <div>
            <Head>
                <title>Typescript</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Links />
            <main>This is a page using typescript</main>
        </div>
    );
}
