import React, { useState, useEffect } from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight } from 'react-native'
import { withNavigation } from "react-navigation"

import City from '../components/Cities';

const Details = (props) => {
    const { navigate } = props.navigation

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.metaweather.com/api/location/44418/`);
            console.log("response: ", response)
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            setData(json)
            // console.log(json)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView>
            {/* { <TouchableHighlight
                onPress={() => navigate('Home')}
            >
                <Text>Home</Text>
            </TouchableHighlight>} */}

            {!isLoading && <City data={data}/>}

        </ScrollView>
    )
}


export default withNavigation(Details)
