import PropTypes from 'prop-types';
import { useState } from 'react';

import "./Shop.css"
import Item from "../item/Item";
import { useEffect } from 'react';

function Shop({addToCart}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setItems(json));
    }, []);

    return (
        <div className="items-container"> 
            {items.length != 0 ? 
                items.map((item) => <Item key={item.id} item={item} cart={false} cartFunc={addToCart}/>) : 
                "Loading..."}
        </div>
    );
}

Shop.PropTypes = {
    addToCart: PropTypes.func.isRequired,
}

export default Shop;