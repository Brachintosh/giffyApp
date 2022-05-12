import React from 'react'
import codeLogo from '../assets/programming1.png';
import './FooterStyle.css';

const FooterBrand = () => {
  return (
    <>
      <footer> 
        <div className="containerFooter">

            <img alt="icon-code" src={codeLogo} width="24px" height="24px" />
            <span>developed by <a href='https://github.com/Brachintosh/' target='_blank' style={{color: '#343434'}} >@brachintosh</a></span>

        </div>
    </footer>
    </>
  )
}

export default FooterBrand
