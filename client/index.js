import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App.jsx';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </Provider>
);
