import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

export default function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={id} />
            <p className="checkoutProduct__title">{title}</p>
            <div className="checkout__price">{price}$</div>
            <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <span key={i}>⭐</span>
                    ))}
                <button
                    className="checkoutProduct__button"
                    onClick={removeFromBasket}
                >
                    Remove from Basket
                </button>
            </div>
        </div>
    );
}
