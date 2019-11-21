import React from 'react'
import { Container, Titulo, TextSunRise, TextSunSet, PuestaSol, Grados, SunRiseHour, SunSetHour, ImageClima, DiasSiguientes, ImageDiasSiguientes, ContainerDiasSiguientes, ContainerDiasSigTemp, TempSiguientesMax, TempSiguientesMin } from './styled'
import { withNavigation } from 'react-navigation';
import { TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import { jsxAttribute } from "@babel/types"

import dayjs from "dayjs"
import 'dayjs/locale/es'
import { AuthSession } from 'expo';


const Grilla = (props) => {
    const { navigate } = props.navigation

    const { title, sun_rise, sun_set, consolidated_weather } = props.data

    // console.log('consolidated array: ',consolidated_weather)

    const temp = consolidated_weather[0].the_temp

    const imageClima = consolidated_weather[0].weather_state_abbr

    // const sunRise = dayjs(sun_rise).locale('es').format('HH:mm')
    // const sunSet = dayjs(sun_set).locale('es').format('HH:mm')

    return (
        <Container>
            <TouchableHighlight onPress={() => navigate('Details')}>
                <Icon name="bars" size={30} color="#fff" style= {{marginLeft: 20, marginTop: 20}}/>
            </TouchableHighlight>

            <Titulo>{title}</Titulo>
            <ImageClima source={{ uri: `https://www.metaweather.com/static/img/weather/png/64/${imageClima}.png` }} />
            <Grados>{Math.round(temp)}&#176;</Grados>

            {/* <PuestaSol>
                <TextSunRise>Amanecer</TextSunRise>
                <TextSunSet>Atardecer</TextSunSet>
            </PuestaSol>
            <PuestaSol>
                <SunRiseHour>{sunRise}</SunRiseHour>
                <SunSetHour>{sunSet}</SunSetHour>
            </PuestaSol> */}

            {consolidated_weather.map(element => {
                return (
                    <ContainerDiasSiguientes key={element.id}>
                        <DiasSiguientes>{dayjs(element.applicable_date).format('dddd')}</DiasSiguientes>
                        <ContainerDiasSigTemp>
                            <TempSiguientesMax>{Math.round(element.max_temp)}&#176;</TempSiguientesMax>
                            <ImageDiasSiguientes source={{ uri: `https://www.metaweather.com/static/img/weather/png/64/${element.weather_state_abbr}.png` }} />
                            <TempSiguientesMin>{Math.round(element.min_temp)}&#176;</TempSiguientesMin>
                        </ContainerDiasSigTemp>
                    </ContainerDiasSiguientes>
                )
            })}
        </Container>
    )
}

export default withNavigation(Grilla);