module.exports = {
    extends: [
        'eslint:recommended',
    ],
    rules: {
        indent: [ 'error', 'tab' ],
        'linebreak-style': [ 'error', 'unix' ],
        quotes: [ 'error', 'single' ],
        semi: [ 'error', 'always' ],
        'quote-props': [ 'error', 'as-needed' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'key-spacing': [ 'error', { beforeColon: false } ],
        'comma-spacing': [ 'error', { before: false, after: true } ],
    }
};
