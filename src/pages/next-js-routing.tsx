import Head from 'next/head';
import { useRouter } from 'next/router';

/* Components */
import { Links } from '@/components';

export default function NextjsRouting() {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Nextjs Routing</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Links />
            <main>
                <p>
                    Interact with any of the links and look at the "Actions" tab below (if in
                    storybook)
                </p>
                <p>
                    This is the router read by this page (functions not serialized; check the
                    console for the full object):
                </p>
                <pre>
                    <code>{JSON.stringify(router, null, 2)}</code>
                </pre>
            </main>
        </div>
    );
}
