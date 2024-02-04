local function SendNotify(source, text)
    TriggerClientEvent('md-notify:SendNotify', source, text)
end

exports('SendNotify', SendNotify)