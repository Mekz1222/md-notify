local function SendNotify(text, notifytype, duration)
    if not Config.NotifyTypesEnabled then notifytype = Config.DefaultColor or 'default' end
    if not notifytype or notifytype == 'default' then notifytype = Config.DefaultColor or 'default' end
    if type(text) == 'string' then
        SendNUIMessage({
            action = 'notify',
            data = {
                message = text,
                type = notifytype,
                duration = duration
            }
        })
    elseif type(text) == 'table' then
        SendNUIMessage({
            action = 'notify',
            data = {
                message = text.description or text.title,
                type = notifytype or text.type,
                duration = text.duration or duration
            }
        })
    end
end

exports('SendNotify', SendNotify)

local function eventNotify(text, notifyType, duration, subTitle, notifyPosition, notifyStyle, notifyIcon, notifyIconColor)
    SendNotify(text, notifyType, duration, subTitle, notifyPosition, notifyStyle, notifyIcon, notifyIconColor)
end

RegisterNetEvent('md-notify:SendNotify', eventNotify)

RegisterNetEvent('QBCore:Notify', eventNotify)