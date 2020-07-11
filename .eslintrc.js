'use strict';

module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'brace-style': 'error',
    camelcase: [
      'error',
      {
        properties: 'never'
      }
    ],
    'comma-style': 'error',
    'dot-notation': [
      'error', {
        allowKeywords: true
      }
    ],
    'ember/classic-decorator-hooks': 'error',
    'ember/classic-decorator-no-classic-methods': 'error',
    'ember/no-jquery': 'error',
    indent: [
      'off',
      2, {
        SwitchCase: 1,
        VariableDeclarator: {
          var: 1,
          let: 1,
          const: 1
        }
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: false,
        overrides: {
          case: {
            after: true
          },
          const: {
            after: true
          },
          default: {
            after: true
          },
          else: {
            after: true
          },
          from: {
            after: true
          },
          import: {
            after: true
          },
          return: {
            after: true
          }
        }
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_layers'
        ],
        allowAfterThis: true
      }
    ],
    'no-unneeded-ternary': 'error',
    'no-useless-call': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-shorthand': [
      'error',
      'properties', {
        avoidQuotes: true
      }
    ],
    'one-var': [
      'error',
      'always'
    ],
    'prefer-const': [
      'error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'prefer-template': 'error',
    'quote-props': [
      'error',
      'as-needed'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'space-before-blocks': 'error',
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'spaced-comment': [
      'error',
      'always', {
        block: {
          balanced: true
        }
      }
    ],
    'template-curly-spacing': 'off',
    'vars-on-top': 'error',
    yoda: 'error'
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      }
    }
  ]
};
