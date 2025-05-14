import manualEslint from './configs/eslint.mjs';
import imports from './configs/imports.mjs';
import manualOverrides from './configs/overrides.mjs';
import manualStylistic from './configs/stylistic.mjs';
import manualTs from './configs/typescript.mjs';
import manualVue from './configs/vue.mjs';

export default [
    ...manualTs,
    ...manualStylistic,
    ...manualVue,
    ...imports,
    ...manualEslint,
    ...manualOverrides,
];
