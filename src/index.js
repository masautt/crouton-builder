import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from  "styled-components";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTerminal, faMicrochip, faArrowRight, faArrowLeft, faKeyboard, faKey, faTabletAlt, faVolumeUp, faClipboard, faHome} from '@fortawesome/free-solid-svg-icons'
library.add(faTerminal, faMicrochip, faKeyboard, faKey, faTabletAlt, faArrowLeft, faArrowRight,  faVolumeUp, faClipboard, faHome);

const OverrideCSS = styled.body`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

ReactDOM.render(<OverrideCSS><App /></OverrideCSS>, document.getElementById('root'));

