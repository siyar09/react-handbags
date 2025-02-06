import './App.css'
import Button from './components/Button'
import Product from './components/Product'
import Tile from './components/Tile'
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button buttonText='to the collection'></Button>
        <Button buttonText='shop all bags'></Button>
        <Button buttonText='pre-orders'></Button>
      </nav>
      <main>
        <Product productLabel='Best Seller' productImage={bag1} productName='The handy bag' productPrice='400'></Product>
        <Product productLabel='Best Seller' productImage={bag2} productName='The stylisch bag' productPrice='250'></Product>
        <Product productLabel='New collection' productImage={bag3} productName='The simple bag' productPrice='300'></Product>
        <Product productLabel='New collection' productImage={bag4} productName='The trendy bag' productPrice='150'></Product>
      </main>
      <footer>
        <Tile tileTitel="The brand">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptas.</p>
        </Tile>
        <Tile tileImage={brand} tileImageDescription="The brand"/>
        <Tile tileImage={our_story} tileImageDescription="The designers"/>
        <Tile tileTitel="Our story">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptas.</p>
        </Tile>
      </footer>
    </>
  )
}

export default App
