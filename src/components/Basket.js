function Basket({onClose, items=[]}) {
    return(
        <div className="basketShadow">
        <div className="basket">
        <h2>
          Basket <img onClick={onClose} className="removeBtn" src="/img/btnRemove.svg" alt="Close" />
        </h2>

          <div className="items">
           
            {items.map((obj)=>(
              
             
              
              
              <div className="basketItem">
              <div style={{backgroundImage:`url(${obj.imageUrl})`}} className="basketItemImg"></div>
                <div className="basketText">
                  <p>{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
              <img className="removeBtn" src="/img/btnRemove.svg" alt="Remove" />
            </div>
     
         
            
            ))
           }
            </div>
        
        <div className="basketTotalBlock">
           <ul>
          <li>
            <span>All:</span>
            <div></div>
            <b>690.00 $</b>
          </li>
          <li>
            <span>Discount: </span>
            <div></div>
            <b>30.00 $ </b>
          </li>
        </ul>
         <button className="mainBtn">
          Place an order
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        </div>
      </div>
    );
}
export default Basket;