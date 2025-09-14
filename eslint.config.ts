import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
    // TypeScript files
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json', // type-aware linting
            },
        },
        plugins: {
            '@typescript-eslint': typescript,
        },
        rules: {
            // TypeScript-specific rules
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            'prefer-const': 'error',

            // General JS rules
            'no-console': 'off',
            'no-unused-vars': 'off', // replaced by TS version
            'no-var': 'error',
            'object-shorthand': 'error',
            'prefer-arrow-callback': 'error',
            'no-duplicate-imports': 'error',
        },
    },

    // Dev, test, and spec files
    {
        files: ['dev/**/*.ts', '**/*.test.ts', '**/*.spec.ts'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'no-console': 'off',
        },
    },

    // Files/folders to ignore
    {
        ignores: [
            'dist/',
            'node_modules/',
            '*.js',
            '*.mjs',
            'coverage/',
            'eslint.config.ts', // avoid TSConfig error
        ],
    },

    // Prettier integration: disables conflicting ESLint rules
    prettier,
];
