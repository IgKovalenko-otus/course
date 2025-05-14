import {fixupConfigRules} from '@eslint/compat';

import bestPractices from './configs/best-practices.mjs';
import errors from './configs/errors.mjs';
import es6 from './configs/es6.mjs';
import imports from './configs/imports.mjs';
import style from './configs/style.mjs';
import variables from './configs/variables.mjs';

export default [
    ...style,
    ...bestPractices,
    ...errors,
    ...fixupConfigRules(...imports),
    ...es6,
    ...variables,
];
