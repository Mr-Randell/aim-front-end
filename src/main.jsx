import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App'
import './index.css'
import { store } from './redux/store';
import { ContextProvider } from "./contexts/ContextProvider";
import { AuthProvider } from './contexts/AuthProvider';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <ContextProvider>
            <App />
          </ContextProvider>
        </AuthProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
)
