import React,{useEffect} from 'react';
import {Provider} from 'react-redux';
import configStore from '../../redux/store';

const { store } = configStore({});

const Home = () => {
    return (
        <Provider store={store}>
            <div>Home</div>
        </Provider>
    )
}

export default Home;