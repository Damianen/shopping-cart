import "./Item.css";
import PropTypes from 'prop-types';

function Item({item, cartFunc, cart}) {
    return (
        <div className="item-container">
            <div className="img-container">   
                <img src={item.image} width={130}/>
            </div>
            <p className="item-title">{item.title}</p>
            <p className="item-price">${item.price}</p>
            <button className="item-add" onClick={() => cartFunc(item)}>{cart ? 'Remove From' : 'Add To'} Cart</button>
        </div>
    );
}

Item.PropTypes = {
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    cart: PropTypes.bool.isRequired
}

export default Item;