import { createContext, props } from "react";

const { createContext } = require("react");

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    const currency = "&#8377";
    const delivery_fee = "10";

    const value = {
        products , currency , delivery_fee
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider