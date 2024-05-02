import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='page home-page'>
      <div className='container pt-5'>
        <div className='py-5 row text-center d-flex justify-content-center align-items-center text-white'>
          <h1>ParkEZFine</h1>
        </div>
        <div className='row d-flex align-items-center justify-items-center'>
          <form className='bg-white col-md-6 col-sm-8 m-auto p-4 container'>
            <p className='pt-4'>Please enter your ticket number.</p>
            <div>
              <input
                className='form-control'
                placeholder='Enter your ticket number'
                required
              />
            </div>
            <div className='row'>
              <div className='d-grid gap-2 d-md-block pt-3'>
                <button
                  onClick={() =>
                    (window.location.href =
                      'https://buy.stripe.com/fZe16g0TfePB13i3cc')
                  }
                  className='btn btn-primary'
                  type='button'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className='footer'>
        <div className='container py-2'>
          <div className='row'>
            <div className='col-3'>
              <p>&copy; ParkEZFine</p>
            </div>
            <div className='col-6'></div>
            <div className='col-3 mr-auto'>
                          <Link to='/terms'>Terms and Conditions</Link>
                          <Link to='/privacy'>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home