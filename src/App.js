import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Basket from './components/Basket';  

function App() {
  const [items, setItems]= React.useState([]);
  const [basketItem, setbasketItem]= React.useState([]);
  const [basketOpened, setBasketOpened] = React.useState(false);
React.useEffect(()=>{
  fetch('https://63c31568b0c286fbe5f8bccf.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    setItems(json);
  });
}, []);
const onAddToBasket = (obj) => {
  setbasketItem([...basketItem, obj]);
}
  return <div className="wrapper">
    {basketOpened ? <Basket items={basketItem} onClose={()=> setBasketOpened(false)} /> : null}
    <Header onClickBasket={()=> setBasketOpened(true)} />
    <div className="content">
      <img src="./img/photo.svg" />
      <div className="contentItem">
        <h1>All Sneakers</h1>
        <div className="search">
           <img src="/img/search.svg" alt="Search" />
          <input placeholder="Search..." />
        </div>
      </div>

      <div className="sneakers">      
        
        {items.map((item)=>(
          <Card 
            title={item.title} 
            price={item.price} 
            imageUrl={item.imageUrl}
          
            onPlus={(obj) => onAddToBasket(obj)}
          />
        ))}
      </div>
    </div>
  </div>
}

export default App;
