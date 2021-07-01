import React from 'react';
import'./Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasketOutlined';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

  const [{basket, user}, dispatch] = useStateValue ();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();

    }
  }

  return (
    
    <div className="header">

      <Link to="/">

        <img className="header_logo" 
            src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
            alt=""
        />
            
      </Link>

      <div className="header_search">

         <input className="header_searchinput" type="text"/>

         <SearchIcon className="header_SearchIcon"/>

      </div>

      <div className="header_nav">

        <Link to={!user && "/login"}>

          <div onClick={handleAuthentication} className="header_option">

            <span className='hearder_optionlineOne'>'{user?.email}'</span>

            <span className='hearder_optionlineTwo'>{user ?
             'Sign Out' : 'Sign In'}
            </span>

          </div>
        
        </Link>
            

        <div className="header_option">

           <span className='hearder_optionlineOne'> Returns </span>

           <span className='hearder_optionlineTwo'> Orders </span>

        </div>

        <div className="header_option">
                  
           <span className='hearder_optionlineOne'> Your </span>

           <span className='hearder_optionlineTwo'> Prime </span>

        </div>
            
      </div>

      <Link to="/checkout">
            
        <div className="header_optionBasket">
                
           <ShoppingBasketIcon/>
           <span className="header_optionlinetwo header_BasketCount">{basket?.length}</span>
                
        </div>

      </Link>
            

    </div>
        
  );
}

export default Header;
