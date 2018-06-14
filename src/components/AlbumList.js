// Need to have React imported since jsx gets transpiled
// by babel into React.whatever functions
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

// For class component, need a render method that returns jsx
class AlbumList extends Component {
    // initialize state. this is the only time we say state =, everywhere
    // else use this.setState
    state = {
        albums: [],
    };

    // will execute before jsx appears on screen
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            // when we call setState the render method for just the
            // AlbumList component gets called again
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        // need to give React a key so it knows if an item changed and
        // has to re-render. Can NOT just use array index because
        // not guaranteed to be consistent (say if api response changed order)
        <AlbumDetail key={album.title} record={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
