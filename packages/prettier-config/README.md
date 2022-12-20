# prettier-config

## install
```bash
npx install-peerdeps --dev @joengsh/prettier-config
```

## setup
```javascript
// .prettierrc
"@joengsh/prettier-config"

// .prettierrc.js
module.exports = {
  ...require('@joengsh/prettier-config'),
};
```

## usage
```json
{
  // ...
  "scripts":{
    // ...other scripts
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx}'"
  }
}