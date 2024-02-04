import { Notification } from '@mantine/core';
import { useNuiEvent } from "../hooks/useNuiEvent";
import type { NotifyProps } from '../typings/notification';
import toast, { Toaster } from 'react-hot-toast';

export default function Notify() {
 useNuiEvent<NotifyProps>('notify', (data) => { 
  var color = data.type == 'default' ? 'dark' : data.type == 'error' ? 'red' : data.type == 'inform' ? 'blue' : data.type == 'info' ? 'blue' : data.type == 'success' ? 'green' : data.type == 'warning' ? 'orange.6' : data.type == undefined ? 'default' : data.type
  
    toast(
      (t) => (
        <Notification withCloseButton={false} radius="md" color={color} bg={color}>
          {data.message}
        </Notification>
      ), {
        style: {
          padding: 0,
          margin: 0,
          background: 'transparent',
          boxShadow: 'none',
        },
        position: 'center-left',
        duration: data.duration
      }
    );
  });

  return <Toaster reverseOrder={true}/>;
}
