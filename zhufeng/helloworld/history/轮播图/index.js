import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Slider from './components/Slider'
let IMAGE_DATA =[
{src:require('./images/1.jpg'),alt:'1.jpg'},
{src:require('./images/2.jpg'),alt:'2.jpg'},
{src:require('./images/3.jpg'),alt:'3.jpg'}
]

ReactDOM.render(<Slider
     items={IMAGE_DATA}
     speed={1.2}
     delay={1.5}
     arrows={true}
     dots={true}
     pause={true}
     auto={true}
    />, document.getElementById('root'));
registerServiceWorker();
