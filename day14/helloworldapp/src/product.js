import React from 'react';

class Product extends React.Component{
    render(){
        return(

            <div>

                <p>welcome to the Products Page</p>
                <br/><hr/>

                <p>1) Gerbera</p>
                <img src="/images/flowers/gerbera.jpg" width="100" height="100" />
                <p> Description : white colorfull wedding flower </p>
                <p> Quantity available: 45000</p>
                <br/>
                <p>2) Marigold</p>
                <img src="/images/flowers/marigold.jpg" width="100" height="100" />
                <p> Description : yellow Wedding flower </p>
                <p> Quantity available: 3000</p>
                <br/>
                <p>3) Jasmine</p>
                <img src="/images/flowers/jasmine.jpg" width="100" height="100" />
                <p> Description : worship flower </p>
                <p> Quantity available: 4900</p>
                <br/>
                <p>4) Lily</p>
                <img src="/images/flowers/lily.jpg" width="100" height="100" />
                <p> Description : delicate flower </p>
                <p> Quantity available: 70000</p>
                <br/>
                <p>5) Rose</p>
                <img src="/images/flowers/rose.jpg" width="100" height="100" />
                <p> Description : valentine flower </p>
                <p> Quantity available: 187000</p>

                <br/>

            </div>
        );
    }
}

export default Product;