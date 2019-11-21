import React, { useState, useEffect } from 'react'
import { Image, Text, View, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation';

import Grilla from '../components/Grilla';


// export default class Home extends Component {
//     render () {
//         let screenWidth = Dimensions.get('window').width;
//         let screenHeight = Dimensions.get('window').height; 
//         return(
//             <ScrollView
//                 horizontal={true}
//             >
//                 <View style={{
//                     flex: 1,
//                     marginop:20,
//                     width:screenWidth,
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}>

//                 </View>
//             </ScrollView>
//         )
//     }
// }
const Home = (props) => {
    const { navigate } = props.navigation

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.metaweather.com/api/location/468739/`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            setData(json)
            //console.log(json)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <ScrollView>
            {!isLoading && <Grilla data={data}/> }
        </ScrollView>
    )
}

export default withNavigation(Home)
