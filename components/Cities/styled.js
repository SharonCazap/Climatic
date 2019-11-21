import React from 'react'
import styled from 'styled-components'


const Container = styled.View`
    display: flex;
    height: 600px;
    background-color: #f2f2f2;
`
const ContCities = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #ebc6b2;
    border: 1px solid #fff;
    height: 100px;
`

const Text = styled.Text`
    font-size: 32px;
    color: #1a1a1a;
    font-weight: 500;
    text-align: left;
`
const Grados = styled.Text`
    font-size: 32px;
    color: #1a1a1a;
    font-weight: 500;
    text-align: center;
`

export { Container, Text, ContCities, Grados}