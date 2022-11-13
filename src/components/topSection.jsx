import React from "react";
import styled from "styled-components";

const TextSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #1756dd32;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 50;
`;

const Logo = styled.h1`
    margin: 0;
    font-size: 72px;
    color: #fff;
    font-weight: 700;
    font-size: 80px;
    padding-top: 15%;
`;

const Project = styled.h2`
    margin: 0;
    color: #03FBE7;
    font-weight: 900;
    font-size: 40px;
    margin-top: 0.5em;
`;

const Slogan = styled.h4`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 25px;
    margin-top: 1em;
`;

const Button = styled.button`
    outline: none;
    text-decoration: none;
    border: none;
    background-color: #17EED3;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border-radius: 3px;
    padding: 8px 15px;
    margin-top: 2em;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;

    &:hover {
        background-color: transparent;
        border: 2px solid #17EED3;
    }
`

export function TopSection() {
    return <TextSectionContainer>
        <Logo>DevExt</Logo>
        <Project>Project Alpha</Project>
        <Slogan>Creating a user timeless experience.</Slogan>
        <Button as="a" href="https://github.com">Explore</Button>
    </TextSectionContainer>
}