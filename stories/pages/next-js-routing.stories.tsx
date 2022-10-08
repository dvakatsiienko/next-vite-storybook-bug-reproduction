import NextjsRouting from '../../src/pages/next-js-routing';

export default {
    title: 'Pages',
    component: NextjsRouting,
};

export const NextjsRoutingPage = () => <NextjsRouting />;

NextjsRoutingPage.parameters = {
    nextRouter: {
        route: 'this-is-a-story-override',
    },
};
