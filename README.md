# Some little utility bot for little usage  

## How to start

1. Download the Node.js in version v10.9.0
2. `npm install` in main folder
3. `npm start` in main folder

### Turn off bot? 
`CTRL+C`

## Configurations

> config.json

All things in the main are required for the bot to work properly  

Copy `config.json.example` to `config.json`.  

```
"main":{
        "token": "write your bot token here"
    },

    "userJoin":{
        "welcome_msg": ["first", "2nd", "3rd $user", "4th $guild", "$userm Heyooo"],
        "welcome_channel": "channel for sending welcome msges"
    }
```  
`$user` - username
`$userm` - ping the user
`$guild` - guild name
