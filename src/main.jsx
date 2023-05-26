import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from './Components/Store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'
import './index.css'


const persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate loading={null} persistor={persistor} >
        <App />

      </PersistGate>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
      )
