import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearItems } from "./CreateSlice";


function CartItems(){
    const cartItems = useSelector(state=>state.cart.cartItems)
    const totalAmount = cartItems.reduce((total, item)=>total + item.price * item.quantity, 0)
    const dispatch = useDispatch()

    function handleRemove(itemId){
        dispatch(removeItemFromCart(itemId))

    }

    function handleDecrease(itemId){
        dispatch(decreaseItemQuantity(itemId))
    }

    function handleIncrease(itemId){
        dispatch(increaseItemQuantity(itemId))
    }

    function handleClear(){
        dispatch(clearItems())
    }


    return(
        <div className="container">
            <div>{totalAmount ? <div>Total Cart Amount: ${totalAmount}</div>: ''} </div>
            {cartItems.map((item, index)=>(
                <div className="row">
                    <div className="col-4">
                        <div key={index} className="box">
                        <div className="cart-item">
                            <div className="plant"><img src={item.imageUrl}/></div>
                            <div>
                                <div className="name">{item.name}</div>
                                <div>${item.price}</div>
                                <div className="quantity-section">
                                    <button onClick={()=>handleDecrease(item.id)}> - </button>
                                    <span> {item.quantity} </span>
                                    <button onClick={()=>handleIncrease(item.id)}> + </button>
                                </div>
                                <div className="price">${item.price * item.quantity}</div>
                                <button 
                                    className="delete-btn" 
                                    onClick={()=>handleRemove(item.id)}
                                    > 
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div> 
            ))}
            <div>{totalAmount && <button className="clear-btn" onClick={handleClear}> Clear cart </button>}</div>
        </div>
    )
}

export default CartItems