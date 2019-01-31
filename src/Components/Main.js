import React, { Component } from 'react'
import Title from './Title'
import AddPhoto from './AddPhoto'
import PhotoWall from './Photowall'
import { Route } from 'react-router-dom'
import {removePosts} from '../redux/actions'

class Main extends Component {
    constructor() {
        super()
    }

    componentDidMount(){
        this.props.removePosts(1)
    }

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <Title title={'Photowall'} />
                        {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/> */}
                        <PhotoWall {...this.props} />
                    </div>

                )} />

                {/* <Route path= "/AddPhoto" render = {({history}) => (
                <AddPhoto onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost)
                    history.push('/')
                }}/>
            )}/> */}
            </div>
        )
    }

}


export default Main