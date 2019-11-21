import React from 'react'
import styled from 'styled-components'

const PuestaSol = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    background-color: #ebc6b2;
    padding: 5px 0;
`
const Container = styled.View`
    display: flex;
    background-color: #ebc6b2;
    height: 800px;
`
const Titulo = styled.Text`
    font-size: 48px;
    color: #2b2b2b;
    font-weight: 400;
    text-align: center;
    margin: 30px 0;
`
const Grados = styled.Text`
    font-size: 56px;
    color: #2b2b2b;
    margin: 30px 0 40px;
    font-weight: 400;
    text-align: center;
`
const ImageClima = styled.Image`
    width: 100px;
    height: 100px;
    margin: 0 auto;
`
const TextSunRise = styled.Text`
    font-size: 16px;
    color: white;
    font-weight: 500;
`
const SunRiseHour = styled.Text`
    font-size: 21px;
    color: #2b2b2b;
    margin-bottom: 8px;
    font-weight: 500;
`
const TextSunSet = styled.Text`
    font-size: 16px;
    color: #2b2b2b;
    font-weight: 500;
    text-align: right;
`
const SunSetHour = styled.Text`
    font-size: 21px;
    color: #2b2b2b;
    margin-bottom: 8px;
    font-weight: 500;
`
const ContainerDiasSiguientes = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #ebc6b2;
    padding: 10px 0;
    border-bottom-width: 1px;
    border-color: #2b2b2b;
`
const ContainerDiasSigTemp = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: #ebc6b2;
    padding-top: 6px;
    padding-bottom: 6px;
`
const ImageDiasSiguientes = styled.Image`
    width: 25px;
    height: 25px;
`
const DiasSiguientes = styled.Text`
    font-size: 18px;
    color: #2b2b2b;
    font-weight: 500;
    text-align: left;
`
const TempSiguientesMax = styled.Text`
    font-size: 18px;
    color: #2b2b2b;
    font-weight: 500;
    margin-left: 10px;
    margin-right: 10px;
`
const TempSiguientesMin = styled.Text`
    font-size: 18px;
    color: #777777;
    font-weight: 500;
    margin-left: 10px;
    margin-right: 10px;
`

export { Container, Titulo, TextSunRise, TextSunSet, PuestaSol, Grados, SunRiseHour, SunSetHour, ImageClima, DiasSiguientes, TempSiguientesMin, TempSiguientesMax, ImageDiasSiguientes, ContainerDiasSiguientes, ContainerDiasSigTemp }