-- Resource Metadata
fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'MD Scripts | Mekz Development'
description 'Simple notifications using mantine notifications with my styled ui for fivem'
version '1.0.0'


shared_scripts {
    '@ox_lib/init.lua',
    'config.lua'
}

client_scripts {
    'client/main.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/main.lua'
} 

ui_page 'web/build/index.html'

files {
    'web/build/index.html',
    'web/build/**/*',
}