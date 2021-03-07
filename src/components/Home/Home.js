import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Catagories from '../Categories/Catagories';

const Home = () => {
    const count = useContext(CategoryContext);
    return (
        <div>
            <h1>Home Count: {count}</h1>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;