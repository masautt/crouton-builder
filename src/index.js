import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTerminal, faMicrochip, faKeyboard, faKey, faTabletAlt, faVolumeUp, faClipboard, faBox} from '@fortawesome/free-solid-svg-icons'

library.add(faTerminal, faMicrochip, faKeyboard, faKey, faTabletAlt, faVolumeUp, faClipboard, faBox);

ReactDOM.render(<App />, document.getElementById('root'));

