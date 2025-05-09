export default [
    {
        files: ['**/*.ts', '**/*.d.ts'],

        languageOptions: {
            ecmaVersion: 5,
            sourceType: 'script',

            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },

        rules: {
            '@stylistic/member-delimiter-style': ['error', {
                singleline: {
                    delimiter: 'comma',
                    requireLast: false,
                },

                multiline: {
                    delimiter: 'none',
                },
            }],

            '@typescript-eslint/naming-convention': ['error', {
                selector: 'variable',
                modifiers: ['const'],
                format: ['camelCase', 'UPPER_CASE'],
            }, {
                selector: ['classProperty'],
                types: ['boolean'],
                format: ['PascalCase'],
                prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
            }, {
                selector: 'variable',
                types: ['boolean'],
                format: ['PascalCase', 'UPPER_CASE'],
                prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'IS_', 'SHOULD_', 'HAS_', 'CAN_', 'DID_', 'WILL_'],
            }, {
                selector: 'typeLike',
                format: ['PascalCase'],
            }, {
                selector: 'interface',
                format: ['StrictPascalCase'],
                prefix: ['I'],

                filter: {
                    regex: 'Window|DI',
                    match: false,
                },
            }, {
                selector: 'enum',
                format: ['StrictPascalCase'],

                filter: {
                    regex: 'TKey',
                    match: false,
                },
            }, {
                selector: 'enumMember',
                format: ['PascalCase'],

                filter: {
                    regex: '^T_.+$|^[A-Z]{2}_[A-Z]{2}$',
                    match: false,
                },
            }],

            'import/no-unresolved': 'off',
            'no-shadow': 'off',
            'no-restricted-globals': ['error'],
            'no-useless-constructor': 'off',

            'no-empty-function': ['error', {
                allow: ['constructors'],
            }],
        },
    },
    {
        rules: {
            'no-empty': [
                'error',
                {
                    allowEmptyCatch: true,
                },
            ],
            '@typescript-eslint/no-unsafe-function-type': 'off',
        },
    },
];
