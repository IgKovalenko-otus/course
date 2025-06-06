import tsEslint from 'typescript-eslint';

export default [
    {
        name: 'manualTypeScript',

        languageOptions: {
            parserOptions: {
                parser: tsEslint.parser,
                ecmaVersion: 2022,
                sourceType: 'project',
                project: {},
            },
        },

        rules: {
            '@typescript-eslint/no-unused-vars': ['error', {caughtErrors: 'none', varsIgnorePattern: '[eE]num'}],
            '@typescript-eslint/consistent-type-imports': 'error',

            '@stylistic/type-annotation-spacing': ['error', {
                before: false,
                after: true,

                overrides: {
                    arrow: {
                        before: true,
                        after: true,
                    },
                },
            }],
            // Per the docs, the root no-unused-vars should be disabled:
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
            'no-unused-vars': 'off',

            // https://github.com/typescript-eslint/typescript-eslint/blob/1cf9243/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
            'no-undef': 'off',

            // For easier migration
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/consistent-indexed-object-style': 'off',
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-member-accessibility': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/parameter-properties': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/ban-ts-ignore': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
            '@typescript-eslint/no-empty-object-type': [
                'error',
                {
                    allowInterfaces: 'with-single-extends',
                },
            ],

        },
    },
];
