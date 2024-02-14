import {View, Text, StatusBar, SafeAreaView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeHeader from '../components/HomeHeader';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProductDetails = ({route, navigation}) => {
  const [singleProduct, setSingleProduct] = useState('');
  const [loader, setLoader] = useState(false);

  const {id} = route.params;
  console.log(singleProduct);
  const getAllData = async ids => {
    await axios
      .get(`https://dummyjson.com/products/${ids}`)
      .then(res => {
        // console.log(res.data);
        if (res) {
          setSingleProduct(res.data);
          setLoader(true);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (id) {
      getAllData(id);
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#000'} />
      <View style={{flex: 1, height: '100%', position: 'relative'}}>
        <HomeHeader back={true} />
        {loader == true ? (
          <View
            style={{
              flex: 1,
              marginTop: 50,
              padding: 10,
              width: '100%',
              alignItems: 'center',
            }}>
            <View style={{}}>
              {singleProduct?.thumbnail && (
                <Image
                  source={{uri: singleProduct?.thumbnail}}
                  style={{width: 350, height: 350, borderRadius: 10}}
                />
              )}
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 20,
                gap: 10,
                backgroundColor: '#F0E6FF',
                marginTop: 20,
                borderRadius: 10,
              }}>
              <View>
                <Text
                  style={{color: '#424242', fontSize: 17, fontWeight: '600'}}>
                  {singleProduct?.title}
                </Text>
                <Text>{singleProduct?.brand}</Text>
              </View>
              <View
                style={{
                  // flex: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{color: '#424242', fontSize: 17, fontWeight: '600'}}>
                  Rs.{singleProduct?.price}
                </Text>
                <Text>
                  <AntDesign name="star" size={22} color={'gold'} />{' '}
                  {singleProduct?.rating}
                </Text>
              </View>
              <View>
                <Text>{singleProduct?.description}</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text
                  style={{
                    backgroundColor: '#460996',
                    color: '#fff',
                    textAlign: 'center',
                    padding: 10,
                    borderRadius: 50,
                    elevation: 6,
                    marginTop: 20,
                    fontSize: 19,
                  }}>
                  {'<< back'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
    </SafeAreaView>
  );
};

export default ProductDetails;
