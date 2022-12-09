# prettier-config

## install
```bash
npx install-peerdeps --dev @joengsh/prettier-config
```

## setup
```javascript
// .prettierrc
"@joengsh/prettier-config"
```

## upage
```json
{
  // ...
  "scripts":{
    // ...other scripts
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx}'"
  }
}