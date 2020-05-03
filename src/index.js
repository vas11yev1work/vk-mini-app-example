import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import bridge from '@vkontakte/vk-bridge'

import '@vkontakte/vkui/dist/vkui.css'

bridge.send('VKWebAppInit', {})
    .then(() => console.log('OK'))
    .catch(() => console.log('ERROR'))
    .finally(() => console.log('FINALLY'))

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)
