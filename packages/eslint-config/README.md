# eslint-config

## install
```bash
npx install-peerdeps --dev @joengsh/eslint-config-react
# noted: only install prettier when using cra
yarn add -D eslint-config-prettier prettier
```

## setup
```javascript
module.exports = {
  extends: ["@joengsh/eslint-config-react"],
};

// when using cra

module.exports = {
  extends: ["@joengsh/eslint-config-react/cra"],
};

```