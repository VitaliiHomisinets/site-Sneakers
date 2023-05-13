import React from 'react'
import styles from './Card.module.scss';

function Card({title, imageUrl, price, onPlus}){
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    };
    React.useEffect(()=>{
        setIsAdded(isAdded);
    }, [isAdded]);
    return(
        <div className={styles.card}>
            <img width={140} height={115} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className={styles.cardAbout}>
                <div className={styles.cardText}>
                    <span>Price:</span>
                    <b>{price},00 $</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btnDone.svg' : '/img/btnPlus.svg'} alt="Plus" /> 
            </div>
        </div>
    );
}
export default Card;