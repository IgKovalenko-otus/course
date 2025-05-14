import path from 'node:path';
import {fileURLToPath} from 'node:url';

import {includeIgnoreFile} from '@eslint/compat';
import stylistic from '@stylistic/eslint-plugin';
import {defineConfig} from 'eslint/config';
import pluginVue from 'eslint-plugin-vue';
import tsEslint from 'typescript-eslint';

import airbnb from './eslint-config-standard/configs/airbnb/airbnb.mjs';
import manual from './eslint-config-standard/configs/manual/manualRules.mjs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const gitignorePath = path.resolve(dirname, '.gitignore');

export default defineConfig([
    includeIgnoreFile(gitignorePath),
    [
        {
            ignores: [
                '**/.yarn/**',
            ],
        },
        ...pluginVue.configs['flat/recommended'],
        ...tsEslint.configs.recommended,
        ...airbnb,
        ...manual,
        {
            name: 'New config',
            plugins: {
                '@stylistic': stylistic,
            },
        },
    ],
    {
        files: ['**/*.ts'],

        rules: {
            'no-restricted-syntax': [0, {
                selector: 'ExportNamedDeclaration > TSEnumDeclaration',
                message: 'export enum запрещен',
            }],
        },
    },
]);
