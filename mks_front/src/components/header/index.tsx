"use client"
import styled from "styled-components"
import { Cart } from "./cart"
import { Logo } from "./logo"

interface HeaderProps {

}

const TagHeader = styled.header`
    background: #0F52BA;
    width: 100vw;
    height: 101px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 88px;
    padding-left: 65px;
`
const Logo1 = styled.span`
    color: #FFFF;
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
`
const Logo2 = styled.span`
    color: #FFFF;
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    margin-left: 10px;
    margin-bottom: 5px;
`

export function Header(props : HeaderProps){
    return(
        <TagHeader>
            <Logo />
            <Cart />
        </TagHeader>
    )
}
