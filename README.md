## iniciar projeto
`npm init`

## instalar dependencias
`npm i -D typescript ts-node-dev @types/node`


## tsconfig
# criar e instalar as configurações

`npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true`

## editorconfig, eslint e prettier
### criar editorconfig com a extensão
### instalar eslint como dependencia
`npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`

## criar arquivo .eslintrc
`
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "prettier/prettier": "error"
  }
}
`
