[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
# MD Scripts | Notifications
Simple notifications using mantine notifications with my styled ui for FiveM

![image](https://github.com/Mekz1222/md-notify/assets/53654750/10cb14cb-1565-431f-8a5d-4dd83f5a4148)


# Configuration
| Name  | Value type | Description |
| ------------- | ------------- | ------------- |
| Config.NotifyTypesEnabled  | boolean (true or false)  | Enables inform/error/success/warning/default or mantine colors, if you want to disable colors and use default color dark set this to false  |
| Config.DefaultColor  | string or false  | Replace the default color with [Mantine color](https://mantine.dev/theming/colors/#default-colors)  |


# Exports
| Export Name  | Parameter(s) | Type |
| ------------- | ------------- | ------------- |
| exports['md-notify']:SendNotify  | Msg/MsgTable, Type or mantine color, Duration  | Client  |
| exports['md-notify']:SendNotify   | Source/Player id, Msg/MsgTable, Type or mantine color, Duration  | Server  |

MsgTable can contain the duration and type, is like ox_lib notify table and i maked it cause compability by replacing the ox_lib function calls.

# Replacing other functions or notifys
You can replace all `lib.notify(` to `exports['md-notify']:SendNotify(` if you want replace them to call my notifys.

# QB Compability

Replace @qb-core/client/functions.lua lines 83 : 106
```lua
function QBCore.Functions.Notify(text, texttype, length)
    if type(text) == 'table' then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = ttext,
            caption = caption
        })
    else
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = text
        })
    end
end
```

to this

```lua
function QBCore.Functions.Notify(text, texttype, length)
    exports['md-notify']:SendNotify(text, texttype, length)
end
```

# ESX Legacy Compability

Replace @es_extended/client/functions.lua lines 60 : 66
```lua
function ESX.ShowNotification(message, notifyType, length)
    if GetResourceState("esx_notify") ~= "missing" then
        return exports["esx_notify"]:Notify(notifyType, length, message)
    end


    print("[^1ERROR^7] ^5ESX Notify^7 is Missing!")
end
```

to this

```lua
function ESX.ShowNotification(message, notifyType, length)
    exports['md-notify']:SendNotify(message, notifyType, length)
end
```

# QBox Compability

Replace @qbx_core/client/functions.lua lines 12 : 36
```lua
function Notify(text, notifyType, duration, subTitle, notifyPosition, notifyStyle, notifyIcon, notifyIconColor)
    local title, description
    if type(text) == "table" then
        title = text.text or 'Placeholder'
        description = text.caption or nil
    elseif subTitle then
        title = text
        description = subTitle
    else
        description = text
    end
    local position = notifyPosition or positionConfig


    lib.notify({
        id = title,
        title = title,
        description = description,
        duration = duration,
        type = notifyType,
        position = position,
        style = notifyStyle,
        icon = notifyIcon,
        iconColor = notifyIconColor
    })
end
```

to this

```lua
function Notify(text, notifyType, duration, subTitle, notifyPosition, notifyStyle, notifyIcon, notifyIconColor)
    exports['md-notify']:SendNotify(text, notifyType, duration)
end
```

# Notify types

Now available types is success, info, inform, error and warning

Default

![kuva](https://github.com/Mekz1222/md-notify/assets/53654750/0f6e3a45-616c-496a-b5b8-7676ab1ea078)

Success

![kuva](https://github.com/Mekz1222/md-notify/assets/53654750/a9846e92-0561-42db-8f00-933eb345abb6)

Error

![kuva](https://github.com/Mekz1222/md-notify/assets/53654750/29768e10-4b84-45b5-8ee5-16dfc0f2571c)

Info/Inform

![kuva](https://github.com/Mekz1222/md-notify/assets/53654750/108cb6b7-87a3-47e9-95b1-14bda7350a52)

Warning

![kuva](https://github.com/Mekz1222/md-notify/assets/53654750/fe37eb19-2247-4378-9db8-e0b9e5651867)





## Colors

If you dont want to use default types or want to use other color you can use mantine default color scheme. Example. teal.6

[Mantine colors](https://mantine.dev/theming/colors/#default-colors)

Example

![kuva](https://github.com/Mekz1222/md-notify/assets/53654750/91c4ea83-d2f2-462d-8d9f-0563518f6206)

