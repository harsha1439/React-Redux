import React from 'react'
import {render} from 'react-dom'
// Import CSS
import './styles/style.styl'
// Import  components
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'


import {Router, Route, IndexRoute, browserHistory} from 'react-router'

//store
import {Provider} from 'react-redux'
import store, {history} from './store'

const router = (
    <Provider store={store} >
        <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}  > </Route>
        </Route>
    </Router>
    </Provider> 
)

render(router, document.getElementById('root'))