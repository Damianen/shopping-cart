import "./Item.css";

function Item() {
    return (
        <div className="item-container">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" height={200}/>
            <p className="item-title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
            <p className="item-price">$109.95</p>
            <button className="item-add">Add to Cart</button>
        </div>
    );
}

export default Item;