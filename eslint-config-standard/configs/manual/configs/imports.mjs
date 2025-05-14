import importNewlines from 'eslint-plugin-import-newlines';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
    {
        name: 'manualImports',
        plugins: {
            'simple-import-sort': simpleImportSort,
            'import-newlines': importNewlines,
        },
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
                typescript: [],
                node: [],
            },
            'import/resolver': {
                typescript: {},
            },
        },
        rules: {
            'import/dynamic-import-chunkname': ['error', {
                importFunctions: ['dynamicImport'],
                webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
            }],

            'import/extensions': ['error', 'ignorePackages', {
                '': 'never',
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                json: 'never',
            }],
            'import/prefer-default-export': 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/no-dynamic-require': 'off',
            'import/order': 'off',
            'import-newlines/enforce': ['error', {
                items: 2,
                'max-len': 1000,
                semi: true,
            }],
            'simple-import-sort/imports': 'error',
        },

    },
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.vue'],

        rules: {
            'import/no-duplicates': 'error',

            'simple-import-sort/imports': ['error', {
                groups: [
                    ['^@nuxt', '^@vue', '^@', '.*nuxt', 'vue.*', '^[a-zA-Z0-9.-]+$', '^~'],
                    ['^constants', 'constants', '.mock', 'props', '.enum', 'enums', '^./logic'],
                    [
                        '^types',
                        'types$',
                        'handlers',
                        'work',
                        'models',
                    ],
                    ['utils', 'composables'],
                    ['.vue$'],
                ],
            }],
        },
    },
];
