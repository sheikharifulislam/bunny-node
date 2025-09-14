// lint-staged.config.mjs
export default {
    '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
    '*.{js,json,md}': ['prettier --write'],
};
