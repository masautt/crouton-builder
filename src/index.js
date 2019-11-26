import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTerminal, faMicrochip, faArrowRight, faArrowLeft, faKeyboard, faKey, faTabletAlt, faVolumeUp, faClipboard, faHome} from '@fortawesome/free-solid-svg-icons'

library.add(faTerminal, faMicrochip, faKeyboard, faKey, faTabletAlt, faArrowLeft, faArrowRight,  faVolumeUp, faClipboard, faHome);

ReactDOM.render(<App />, document.getElementById('root'));

