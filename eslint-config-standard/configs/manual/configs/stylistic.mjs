import stylistic from '@stylistic/eslint-plugin';

export default [
    {
        name: 'manualStylistic',
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/max-len': 'off',

            '@stylistic/semi': ['error', 'always'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/object-curly-spacing': ['error', 'never'],
            '@stylistic/space-before-function-paren': 'error',
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/arrow-parens': ['error', 'always'],
            '@stylistic/padding-line-between-statements': [
                'error',
                {blankLine: 'always', prev: 'directive', next: '*'},
                {blankLine: 'always', prev: '*', next: 'directive'},
                {blankLine: 'always', prev: 'var', next: '*'},
                {blankLine: 'always', prev: '*', next: 'return'},
            ],
            '@stylistic/space-infix-ops': ['error', {
                int32Hint: false,
            }],
            '@stylistic/indent': ['error', 4, {
                SwitchCase: 1,
            }],
        },
    },
];
