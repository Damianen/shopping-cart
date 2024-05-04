import "./Shop.css"
import Item from "../item/Item";

function Shop() {
    const items = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className="items-container"> 
            {items.map((item) => {
                return <Item key={item}/>;
            })}
        </div>
    );
}

export default Shop;