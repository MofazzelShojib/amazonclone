import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">

            <div className="home_container">

                <img className="home_image"
                     src="https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg"
                     alt=""
                />

                <div className="home_row">

                    <Product title="this is the product info give proper info of the product here"
                             image="https://www.cellsii.com/images/detailed/23/Cetaphil-Gentle-Skin-Cleanser-Face-_-Body-Price-in-bd.jpg"
                             price={500}
                             rating={4}
                    />

                    <Product title="this is the product info"
                             image="https://www.cellsii.com/images/detailed/23/Cetaphil-Gentle-Skin-Cleanser-Face-_-Body-Price-in-bd.jpg"
                             price={500}
                             rating={4}
                    />

                    
                    <Product title="this is the product info"
                             image="https://www.cellsii.com/images/detailed/23/Cetaphil-Gentle-Skin-Cleanser-Face-_-Body-Price-in-bd.jpg"
                             price={500}
                             rating={4}
                    />


                </div>

                <div className="home_row">

                    <Product title="this is the product info"
                             image="https://www.cellsii.com/images/detailed/23/Cetaphil-Gentle-Skin-Cleanser-Face-_-Body-Price-in-bd.jpg"
                             price={500}
                             rating={4}
                    />

                    <Product title="this is the product info"
                             image="https://www.cellsii.com/images/detailed/23/Cetaphil-Gentle-Skin-Cleanser-Face-_-Body-Price-in-bd.jpg"
                             price={500}
                             rating={4}
                    />

                    
                    <Product title="this is the product info"
                             image="https://www.cellsii.com/images/detailed/23/Cetaphil-Gentle-Skin-Cleanser-Face-_-Body-Price-in-bd.jpg"
                             price={500}
                             rating={4}
                    />


                </div>

                <div className="home_row">

                    <Product title="this is the product info"
                             image="https://www.cellsii.com/images/detailed/23/Cetaphil-Gentle-Skin-Cleanser-Face-_-Body-Price-in-bd.jpg"
                             price={500}
                             rating={4}
                    />

                    <Product title="this is the product info"
                             image="https://www.cellsii.com/images/detailed/23/Cetaphil-Gentle-Skin-Cleanser-Face-_-Body-Price-in-bd.jpg"
                             price={500}
                             rating={4}
                    />

                    
                    <Product title="this is the product info"
                             image="https://www.cellsii.com/images/detailed/23/Cetaphil-Gentle-Skin-Cleanser-Face-_-Body-Price-in-bd.jpg"
                             price={500}
                             rating={4}
                    />


                </div>


            </div>
          
            
        </div>
    );
}

export default Home;
