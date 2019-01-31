import Main from './Main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removePosts } from '../redux/actions'

function mapStateToProps(state) {
        return {
            posts: state
        }
    }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removePosts}, dispatch)
}
const App = connect(mapStateToProps,mapDispatchToProps)(Main)

export default App