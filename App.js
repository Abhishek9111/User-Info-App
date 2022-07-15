
import React,{ useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Axios from 'axios';
import {
  Button
} from 'native-base'

const App =()=>{

  const [details,setDetails] = useState(null)
  
  const fetchDetails = async()=>{
    try {
      
      const {data} = await Axios.get('https://randomuser.me/api')   //destructuring to directly access the data instead of navigating in object

      const details = data.results[0]

      setDetails[details]

    } catch (error) {
      console.log(error)
    }
  }

  return(
    <>
    <Text>Hi</Text>
    </>

  )
}

export default App;
