import "./Home.css";
import Product from "./Product";

export default function Home(params) {
    return (
        <>
            <div className="home">
                <div className="home__container">
                    <div className="home__row">
                        <Product
                            id="12312341"
                            title="Person Holding Paper Bag and Face Mask"
                            price={17.97}
                            rating={5}
                            image="https://images.pexels.com/photos/3987245/pexels-photo-3987245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <Product
                            id="12312342"
                            title="Person Holding Paper Bag and Face Mask"
                            price={12.97}
                            rating={2}
                            image="https://images.pexels.com/photos/3987245/pexels-photo-3987245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <Product
                            id="12312342"
                            title="Person Holding Paper Bag and Face Mask"
                            price={76}
                            rating={2}
                            image="https://images.pexels.com/photos/3987245/pexels-photo-3987245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="12312342"
                            title="Person Holding Paper Bag and Face Mask"
                            price={19}
                            rating={7}
                            image="https://images.pexels.com/photos/3987245/pexels-photo-3987245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />

                        <Product
                            id="12312342"
                            title="Person Holding Paper Bag and Face Mask"
                            price={33}
                            rating={3}
                            image="https://images.pexels.com/photos/3987245/pexels-photo-3987245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />

                        <Product
                            id="12312342"
                            title="Person Holding Paper Bag and Face Mask"
                            price={234}
                            rating={2}
                            image="https://images.pexels.com/photos/3987245/pexels-photo-3987245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="12312342"
                            title="Person Holding Paper Bag and Face Mask"
                            price={1775}
                            rating={1}
                            image="https://images.pexels.com/photos/3987245/pexels-photo-3987245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
