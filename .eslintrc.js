module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
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
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
    },
    globals: {
        __IS_DEV__: true,
    },
};
