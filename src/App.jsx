import React, {useState} from 'react'
import dhl_brand from './assets/dhl-brand.png'
import './App.css'

function App() {
  
  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };

  const [toggle, setToggle] = useToggle();

  return (
    <div className="App">
      <header>
        <nav id='nav'>
          <div className="top-nav">
            <div className="nav-brand">
              <img src={dhl_brand} alt="DHL Logo" />
            </div>
            <div className="top-rt-nav">
              <a href="#">Help and Support</a>
              <a href="#">Find a Location</a>
            </div>
          </div>
          <hr className='nav-middle-line' />

          <div className="bottom-nav">
            <div className="bottom-lf-nav">
              <a className='nav-link' href="#">Home</a>
              <div className="dropdown">
                <button className='dropbtn' onClick={ setToggle }>
                  Ship
                </button>
                { toggle && (   
                <div className="dropdown-content">
                  <div className="dropdown-content-lt">
                    <a href="#">Get a Rate and Time Quote</a>
                    <a href="#">Schedule a Pickup</a>
                    <a href="#">Schedule a Pickup</a>
                    <a href="#">Delivery Services</a>
                  </div>
                </div>
                )}
              </div>
              

            </div>
            <div className="bottom-rt-nav">
              <a className='nav-link' href="#">Register</a>
              <a className='nav-link' href="#">Login</a>
            </div>
          </div>
        </nav>
        
      </header>
    </div>
  )
}

export default App
