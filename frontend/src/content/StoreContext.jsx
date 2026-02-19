import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cardItem,setCardItem] = useState({});
    const addToCart = (itemId) => {
        if(!cardItem[itemId]) {
            setCardItem((prev) => ({...prev,[itemId]:1}))
        }else{
            setCardItem((prev) => ({...prev,[itemId]:prev[itemId] + 1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCardItem((prev) => ({...prev,[itemId]: prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cardItem) {
            if(cardItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cardItem[item];
                }
            }
        }    
        return totalAmount;
    }

    useEffect(() => {
        console.log(cardItem);
    },[cardItem])

    const contextValue = {
        food_list,
        cardItem,
        setCardItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;