/* Core */
import Link from 'next/link';

export const Links = () => (
    <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/next-js-routing'>Next.js Routing Example</Link>
        </li>
        <li>
            <Link href='/global-style-imports'>Global Style Imports Example</Link>
        </li>
        <li>
            <Link href='/css-modules'>Css Module Example</Link>
        </li>
        <li>
            <Link href='/scss-modules'>Scss Module Example</Link>
        </li>
        <li>
            <Link href='/styled-jsx'>Styled JSX Example</Link>
        </li>
        <li>
            <Link href='/absolute-imports'>Absolute Import Example</Link>
        </li>
        <li>
            <Link href='/typescript'>Typescript Example</Link>
        </li>
    </ul>
);
