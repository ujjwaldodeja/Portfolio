import React from "react";
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
      <div className='contact'>
        {/* <a>Email: ujjwaldodeja@gmail.com</a>
        <a>Mobile Number: 0620205695</a> */}
        <div className ="linkedin">
         <Link to="https://www.linkedin.com/in/ujjwal-dodeja-aba2b0261"className='logo-button'>  
          <svg height="32" viewBox="0 0 72 72" width="32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
            <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"/>
            <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/>
            </g>
            </svg>
        </Link>
        </div>

        <div className="mail">
        <Link to ={"mailto:ujjwaldodeja@gmail.com"} className='logo-button'>
        <svg
              className="svg-icon"
              style={{
                width: '32',
                height: '32',
                verticalAlign: 'middle',
                overflow: 'hidden',
                fill: "#FFFFFF"
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
          <path
            d="M921.6 102.4H102.4C46.08 102.4 0 148.48 0 204.8v614.4c0 56.32 46.08 102.4 102.4 102.4h819.2c56.32 0 102.4-46.08 102.4-102.4V204.8c0-56.32-46.08-102.4-102.4-102.4z m0 716.8h-102.4V368.64l-307.2 194.56-307.2-194.56V819.2H102.4V204.8h61.44L512 419.84 860.16 204.8H921.6v614.4z"/>
        </svg>
        </Link>ujjwaldodeja@gmail.com
      </div>

      </div>
    );
  };
  
  export default Contact;