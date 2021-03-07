import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoriesDetail = () => {
    const count = useContext(CategoryContext);
    return (
        <div>
            <p>Catagories Details count: {count}</p>
            <h5>Selected category: {count}</h5>
        </div>
    );
};

export default CategoriesDetail;