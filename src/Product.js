import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <>
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        {price}
                        <strong>$</strong>
                    </p>
                    <p className="product__rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                    </p>
                </div>
                <img src={image} alt="product_image" />
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </>
    );
}
