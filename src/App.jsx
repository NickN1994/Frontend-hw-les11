import './App.css'
import Button from "./components/Button.jsx";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button

                    buttontext='To the collection'
                    onClick={() => console.log('To the collection')}
                    disabled={false}
                />
                <Button
                    buttontext='Shopp all bags'
                    onClick={() => console.log('Shop all bags')}
                    disabled={false}
                />
                <Button

                    buttontext='Pre-orders'
                    onClick={() => console.log('Pre-Orders')}
                    disabled={true}
                />
            </nav>

            <main>


                <Product
                    label='Best Seller'
                    image={bag1}
                    alt='image best seller'
                    title='The handy bag'
                    price={400}
                />

                <Product
                    label='Best Seller'
                    image={bag2}
                    alt='image best seller'
                    title='The Stylish Bag'
                    price={250}
                />

                <Product
                    label='New Collection'
                    image={bag3}
                    alt='image best seller'
                    title='The Simple Bag'
                    price={250}
                />

                <Product
                    label='New Collection'
                    image={bag4}
                    alt='image best seller'
                    title='The Trendy Bag'
                    price={250}
                />

            </main>

            <footer>
                <Tile title='The Brand'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum nisl ut lectus
                        bibendum, vitae hendrerit odio posuere. Proin hendrerit, justo eget vestibulum fermentum, ex
                        velit commodo justo, vel imperdiet elit eros eget nunc. Vestibulum malesuada elit ac risus
                        efficitur, vel bibendum nisl cursus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum nisl ut lectus
                        bibendum, vitae hendrerit odio posuere. Proin hendrerit, justo eget vestibulum fermentum, ex
                        velit commodo justo, vel imperdiet elit eros eget nunc. Vestibulum malesuada elit ac risus
                        efficitur, vel bibendum nisl cursus.</p>
                </Tile>



                <Tile
                    image={brand}
                    alt='Merk'
                />

            </footer>

            <footer>

                <Tile
                    image={our_story}
                    alt='ons verhaal'
                />

                <Tile title='The Brand'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum nisl ut lectus
                        bibendum, vitae hendrerit odio posuere. Proin hendrerit, justo eget vestibulum fermentum, ex
                        velit commodo justo, vel imperdiet elit eros eget nunc. Vestibulum malesuada elit ac risus
                        efficitur, vel bibendum nisl cursus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum nisl ut lectus
                        bibendum, vitae hendrerit odio posuere. Proin hendrerit, justo eget vestibulum fermentum, ex
                        velit commodo justo, vel imperdiet elit eros eget nunc. Vestibulum malesuada elit ac risus
                        efficitur, vel bibendum nisl cursus.</p>
                </Tile>

            </footer>

        </>
    )
}

export default App
