import {
    FlatList,
    Image,
    Text,    
    View,
    StyleSheet,
  } from 'react-native';
import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import apiCall from '../store/actionCreator';
import {HIGHLIGHT_ACTION_TYPES} from '../store/type'

export default function HomeScreen() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.apiReducer.data);
    const loading = useSelector((state) => state.apiReducer.loading);

    useEffect(() => {
        dispatch(apiCall('https://jsonplaceholder.typicode.com/posts', HIGHLIGHT_ACTION_TYPES));
    }, []);


    return (
        <View>
            <Image source={require('../assets/home.png')} style={{ width: '100%', objectFit: 'cover' }} />
            <View style={{padding : 10}}>
                <Text style={styles.customFont}>Highlights</Text>
            </View>
            <View>
                <FlatList/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    customFont : {
        fontFamily: 'IBMPlexMono-Bold',
        fontSize: 16,
        color: '#001A1A'
      },
})