import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AllData from '../components/AllData';
import HomeHeader from '../components/HomeHeader';
import LoaderKit from 'react-native-loader-kit';

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [loader, setLoader] = useState(false);
  // console.log('AllData=>', userData);

  const getAllData = async () => {
    await axios
      .get('https://dummyjson.com/products')
      .then(res => {
        //   console.log(res.data.products);
        if (res) {
          setUserData(res.data.products);
          setLoader(true);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#000'} />
      <View style={{flex: 1, height: '100%', position: 'relative'}}>
        <HomeHeader />
        <View style={{marginTop: 50}}>
          {loader === true ? (
            <FlatList
              data={userData}
              renderItem={({item}) => <AllData data={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              //   ListHeaderComponent={<HomeHeader />}
            />
          ) : (
            <View
              style={{
                width: '100%',
                height: '100%',
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size={44} color="#0000ff" />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
