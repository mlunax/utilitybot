# Some little utility bot for little usage  

### How to install

1. Download the Node.js in version v10.9.0
2. `npm install` in main folder

### How to start the bot

`npm start` in main folder

### Turn off the bot? 
`CTRL+C` in bot console

## Configurations

> config.json

All things in the main are required for the bot to work properly  

Copy `config.json.example` to `config.json`.  

```
"main":{
        "token": "write your bot token here",
        "prefix": "your prefix here"
    },

    "permissions":{
        "admin_role_name": "administrator role name"
    },

    "userJoin":{
        "welcome_msg": ["first", "2nd", "3rd <user>", "4th <guild>", "<userm> Heyooo"],
        "welcome_channel": "channel for sending welcome msges"
    }
```  
`<user>` - username
`<userm>` - ping the user
`<guild>` - guild name
