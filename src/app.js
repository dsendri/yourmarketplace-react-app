import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';

// Importing Theme Files CSS
import './styles/admin-theme/css/bootstrap.min.css';
import './styles/admin-theme/css/sb-admin.css';
import './styles/admin-theme/css/plugins/morris.css';
import './styles/font-awesome/css/font-awesome.min.css';
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'))