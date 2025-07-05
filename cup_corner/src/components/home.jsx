import '../App.css'
import logo from '../assets/logo.png'
const Home = () => {
  return (
    <>
    <div className="hero" id='home'>
      <div className="nav-bar">
        <nav>
          <img src={logo} alt="" />
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>
      
        <h1>Brewed to Perfection</h1>
        <p>Freshly roasted coffee, handcrafted for you.</p>
        <button><a href="">Order Now</a></button>
      </div>
      <div className="menu" id='menu'>
      <div className='m-item'>
        <h3 className='item-n'>Cappuccino</h3>
        <p>Price: $15</p>
        <button>Buy</button>
      </div>
      <div className='m-item'>
        <h3 className='item-n'>Espresso</h3>
        <p>Price: $12</p>
        <button>Buy</button>
      </div>
      <div className='m-item'>
        <h3 className='item-n'>Americano</h3>
        <p>Price: $13</p>
        <button>Buy</button>
      </div>
      <div className='m-item'>
        <h3 className='item-n'>Latte</h3>
        <p>Price: $16</p>
        <button>Buy</button>
      </div>
      <div className='m-item'>
        <h3 className='item-n'>Mocha</h3>
        <p>Price: $17</p>
        <button>Buy</button>
      </div>
      <div className='m-item'>
        <h3 className='item-n'>Cold Brew</h3>
        <p >Price: $18</p>
        <button>Buy</button>
      </div>

      </div>
      <div className="footer">
        <footer>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="links">
            <ul>
            <li><a href="home">Home</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          </div>
        
        

        </footer>
        <p className="copy">© 2025 CoffeeTime. All rights reserved.</p>
      </div>

    </>
  )
}
export default Home