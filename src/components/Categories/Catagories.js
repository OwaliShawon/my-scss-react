import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';

const Catagories = () => {
    const count = useContext(CategoryContext);
    return (
        <div>
            <h3>Categories Count: {count}</h3>
            <CategoriesDetail></CategoriesDetail>
        </div>
    );
};

export default Catagories;