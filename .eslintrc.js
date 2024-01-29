module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": [
            "error",
            {
              "trailingComma": "all",
              "tabWidth": 12,
              "semi": false,
              "singleQuote": true,
              "bracketSpacing": true,
              "eslintIntegration": true,
              "printWidth": 120
            }
          ],
        "prettier/prettier": "error",
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/no-misused-promises": "off",
        "no-async-promise-executor": "off",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/naming-convention": "off"
    }
}
