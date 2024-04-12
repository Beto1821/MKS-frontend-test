"use client"
import styled from "styled-components"
import Image from "next/image"
import { CartShoppingIcon } from "../../Icons/cartShoppingIcon"
import { useLocalStorage } from "../hooks/useLocalStorage"

interface CartProps {

}
const TagCart = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 90px;
    height: 45px;
    border-radius: 8px;
    background-color: #FFFFFF;
    border: none;
    box-shadow: none;
`

const TagCount = styled.span`
    font-size: 18px;
    font-weight: 700;
`

export function Cart(props : CartProps){
    const { value } = useLocalStorage('cart-items', [])
    return(
        <TagCart>
            <CartShoppingIcon/> 
            <TagCount>{value.length}</TagCount>
        </TagCart>
    )
}