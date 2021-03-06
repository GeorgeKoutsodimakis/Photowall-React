import React, { Component } from 'react'
import AddPhoto from './AddPhoto'
import PhotoWall from './Photowall'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Single from './Single'


class Main extends Component {
    state = { loading: true }

    componentDidMount() {
        this.props.startLoadingPosts().then(() => {
            this.setState({ loading: false })
        })
        this.props.startLoaddinComments()

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1><Link to="/"> Photowall</Link></h1>
                <Route exact path="/" render={() => (<div><PhotoWall {...this.props} /> </div>)} />
                <Route path="/AddPhoto" render={({ history }) => (<div><AddPhoto {...this.props} onHistory={history} /></div>)} />
                <Route path='/single/:id' render={(params) => (
                    <Single loading={this.state.loading} {...this.props} {...params} />
                )} />
            </div>
        )
    }

}


export default Main