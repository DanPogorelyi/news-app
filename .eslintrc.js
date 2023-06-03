module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],

    rules: {
        indent: ['error', 4],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': ['error',
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'max-len': ['error',
            { code: 100, ignoreComments: true, ignoreTrailingComments: true },
        ],
        'jsx-a11y/no-static-element-interactions': 'off', // TODO: fix
        'jsx-a11y/click-events-have-key-events': 'off', // TODO: fix
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['src/**/*(*.)@(spec|test).[tj]s?(x)'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
