import React, { useEffect, useState } from 'react';

import ModalProduct from './ModalProduct';

const ModalProductDetails=(props)=>{
    const {show,product,onHide}=props;
   return (
    <>
          {
            product  ? <ModalProduct onHide={onHide} product={product} show={show}/> :<div></div>
          }    
    </>
  );
}
export default ModalProductDetails;