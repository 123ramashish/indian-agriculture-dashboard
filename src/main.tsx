import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import {  createTheme,MantineProvider } from '@mantine/core';
const theme = createTheme({
  /**  mantine theme override here */
});
createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>,
)