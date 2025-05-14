import vue from 'eslint-plugin-vue';
import globals from 'globals';
import vueParser from 'vue-eslint-parser';

export default [
    {
        name: 'vue/base/setup-for-vue',
        files: ['*.vue', '**/*.vue'],
        plugins: {
            vue,
        },
        languageOptions: {
            parser: vueParser,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            'vue/comment-directive': 'error',
            'vue/jsx-uses-vars': 'error',
        },
        processor: 'vue/vue',
    },
    {
        name: 'manualVue',
        rules: {
            'vue/match-component-file-name': ['error', {
                extensions: ['vue'],
                shouldMatchCase: false,
            }],

            'vue/no-deprecated-v-on-native-modifier': 'error',
            'vue/require-v-for-key': 'warn',
            'vue/require-name-property': 'error',
            'vue/multi-word-component-names': 'warn',
            'vue/component-name-in-template-casing': ['error', 'PascalCase'],
            'vue/html-indent': ['error', 4],
            'vue/attribute-hyphenation': ['error', 'always'],
            'vue/require-explicit-emits': 'error',
            'vue/no-template-shadow': 'error',

            'vue/attributes-order': ['error', {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    'UNIQUE',
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'EVENTS',
                    'OTHER_ATTR',
                    'CONTENT',
                ],
            }],

            'vue/html-self-closing': ['error', {
                html: {
                    void: 'never',
                    normal: 'never',
                    component: 'always',
                },

                svg: 'always',
                math: 'always',
            }],

            'vue/script-indent': ['error', 4, {
                baseIndent: 1,
                switchCase: 1,
            }],

            'vue/prefer-true-attribute-shorthand': ['error', 'always'],

            'vue/max-attributes-per-line': ['error', {
                singleline: 1,
                multiline: 1,
            }],

            'vue/block-lang': ['error', {
                script: {
                    lang: 'ts',
                },

                style: {
                    lang: 'scss',
                },
            }],
        },
    },
    {
        files: ['**/*.vue'],

        rules: {
            '@stylistic/indent': 'off',

            'no-restricted-syntax': [
                'error',
                'ForInStatement',
                'LabeledStatement',
                'WithStatement',
                'Literal[value="null"]',
            ],

            'vue/require-default-prop': 'off',
        },
    },
];
