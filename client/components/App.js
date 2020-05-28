import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../actions/actionCreator'

import Main from './Main'

function mapStateTOProps(state){
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateTOProps,mapDispatchToProps)(Main)

export default App