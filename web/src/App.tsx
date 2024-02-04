import React from 'react';
import { fetchNui } from "./utils/fetchNui";
import { theme } from "./theme";
import { MantineProvider } from "@mantine/core";
import Notify from './components/notifications';

const App: React.FC = () => {

  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ ...theme }}>
      <Notify />
    </MantineProvider>
  );
};

export default App;
