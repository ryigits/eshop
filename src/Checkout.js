import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
export default function Checkout(params) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
    return (
        <>
            <div className="checkout">
                <div className="checkout__left">
                    <div>
                        <h2 className="checkout__title">
                            Your Shopping Basket
                        </h2>
                        {basket.map((item) => (
                            <div key={item.id}>
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </>
    );
}
