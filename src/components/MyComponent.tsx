/* Core */
import { type PropsWithChildren } from 'react';

export const MyComponent = (props: PropsWithChildren) => {
    return <h1>{props.children}</h1>;
};
