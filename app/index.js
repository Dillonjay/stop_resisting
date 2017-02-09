// Import React and React dom
import React from 'react';
import ReactDom from 'react-dom'

// Import our component from our component folder. 
import { App } from './component_folder.js'

ReactDom.render(<App />, document.getElementById('app'))