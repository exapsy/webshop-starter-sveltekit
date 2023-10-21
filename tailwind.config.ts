import {join} from 'path';
import type {Config} from 'tailwindcss';

// 1. Import the Skeleton plugin
import {skeleton} from '@skeletonlabs/tw-plugin';

const config = {
    // 2. Opt for dark mode to be handled via the class method
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        // 3. Append the path to the Skeleton package
        join(require.resolve(
                '@skeletonlabs/skeleton'),
            '../**/*.{html,js,svelte,ts}'
        )
    ],
    theme: {
        fontFamily: {
            sans: ['Ubuntu', 'serif'],
        },
        extend: {},
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
        }
    },
    plugins: [
        // 4. Append the Skeleton plugin (after other plugins)
        skeleton
    ]
} satisfies Config;

export default config;

