// const path = require('path');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import { loadConfigFromFile, mergeConfig } from 'vite';
import path from 'path';
import { type StorybookViteConfig } from '@storybook/builder-vite';

console.log(path.resolve(__dirname, '../src'));

const config: StorybookViteConfig = {
    stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-next'],
    framework: '@storybook/react',
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
    core: {
        builder: '@storybook/builder-vite',
    },
    async viteFinal(config, { configType }) {
        const viteConfig = await loadConfigFromFile(
            {
                command: configType === 'DEVELOPMENT' ? 'serve' : 'build',
                mode: '',
            },
            path.resolve(__dirname, '../vite.config.ts'),
        );

        if (!viteConfig) throw new Error('vite.conf.ts not found');

        // return the customized config
        return mergeConfig(config, {
            // customize the Vite config here
            ...viteConfig.config,
        });

        // webpackFinal: async (config) => {
        //     config.resolve.modules = [
        //         ...(config.resolve.modules || []),
        //         path.resolve(__dirname, '../src'),
        //     ];

        //     return config;
        // },

        // webpackFinal: async (config) => {
        //     config.resolve.plugins = [
        //         ...(config.resolve.plugins || []),
        //         new TsconfigPathsPlugin({
        //             extensions: config.resolve.extensions,
        //         }),
        //     ];

        //     return config;
        // },
    },
};

export default config;
