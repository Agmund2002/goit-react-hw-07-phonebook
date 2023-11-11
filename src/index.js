import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    main: '#cfc6c6',
    txt: '#262626',
    accent: '#455af7',
    negative: '#e60000',
  },
  spacing: value => `${value * 4}px`,
  animation: '250ms cubic-bezier(0.4, 0, 0.2, 1);',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
