import React from 'react'
import { Container, Text, ContCities, Grados } from './styled'
import { withNavigation } from 'react-navigation';
import { jsxAttribute } from "@babel/types"
import dayjs from "dayjs"
import 'dayjs/locale/es' 


const City = (props) => {
    const { navigate } = props.navigation

    const { title, consolidated_weather } = props.data

    const temp = consolidated_weather[0].the_temp

    return (
        <Container>
            <ContCities>
                <Text>{title}</Text>
                <Grados>{Math.round(temp)}&#176;</Grados>
            </ContCities>
        </Container>
    )
}

export default withNavigation(City);