/* Core */
import Head from 'next/head';

/* Components */
import { Links, MyComponent } from '@/components';

export default function AbsoluteImports() {
    return (
        <div>
            <Head>
                <title>Absolute Imports</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Links />
            <main>
                This uses an absolute import: <MyComponent>Im absolutely imported</MyComponent>
            </main>
        </div>
    );
}
