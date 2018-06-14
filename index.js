import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () =>
    (
        // Setting flex:1 should prevent scrolling problems of child element
        // Does not look like still necessary in current version of react native
        // But for future reference in case
        <View style={{ flex: 1 }}>
            {/* headerText is a property of props being passed to Header */}
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );


AppRegistry.registerComponent('albums', () => App);
