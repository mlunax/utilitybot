# Some little utility bot for little usage  

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
