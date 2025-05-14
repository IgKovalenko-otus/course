export default [
    {
        name: 'eslintManualRules',

        rules: {

            'no-useless-concat': 'off',
            'no-plusplus': 'off',

            'no-underscore-dangle': ['error', {
                allow: ['_uid'],
                allowAfterThis: false,
                allowAfterSuper: false,
                enforceInMethodNames: true,
            }],

            'no-script-url': 'warn',
            'no-shadow': 'warn',
            'no-shadow-restricted-names': 'warn',

            'no-console': ['error', {
                allow: ['warn', 'error'],
            }],

            'no-param-reassign': 'off',

            'no-restricted-syntax': ['error', {
                selector: 'ExportNamedDeclaration > TSEnumDeclaration',
                message: 'export enum запрещен',
            }, {
                selector: 'ExportDefaultDeclaration > :not(CallExpression[callee.name=/define*/])',
                message: 'дефолтный экспорт запрещен',
            }, {
                selector: 'TSEnumDeclaration[const=true]',
                message: 'объявление enum не должно быть константным',
            }],

            'prefer-template': 'off',
            'class-methods-use-this': 'off',
            'consistent-return': 'off',
            'default-case': 'off',

            camelcase: 'warn',
            curly: ['error', 'all'],

            'object-shorthand': ['error', 'always', {
                avoidQuotes: false,
            }],

        },
    }, {
        files: ['**/*.js'],

        rules: {
            'no-restricted-syntax': 'warn',
        },
    },
];
