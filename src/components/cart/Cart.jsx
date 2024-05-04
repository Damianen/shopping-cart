import PropTypes from 'prop-types';

import "../shop/Shop.css"
import Item from "../item/Item";

function Cart({items, removeFromCart}) {
    
    return (
        <div className="items-container"> 
            {items.length != 0 ? 
                items.map((item) => <Item key={items.indexOf(item)} item={item} cart={true} cartFunc={removeFromCart}/>) : 
                "Cart is empty"}
        </div>
    );
}

Cart.PropTypes = {
    items: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;