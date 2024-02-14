import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const AllData = ({data}) => {
  const navigation = useNavigation();
  const id=data&&data.id
  return (
    <Pressable
      style={{width: '100%', padding: 10}}
      onPress={() => navigation.navigate('ProductDetails', {id})}>
      <View
        style={{
          backgroundColor: '#F0E6FF',
          padding: 10,
          borderRadius: 5,
          elevation: 6,
          flex: 1,
          flexDirection: 'row',
          // gap: 20,
          width: '100%',
        }}>
        <View style={{width: '40%'}}>
          <Image
            source={{uri: data.thumbnail}}
            style={{width: 150, height: 150, borderRadius: 5}}
          />
        </View>
        <View
          style={{width: '60%', paddingHorizontal: 20, paddingVertical: 10}}>
          <View>
            <Text style={{color: '#424242', fontSize: 17, fontWeight: '600'}}>
              {data.title}
            </Text>
            <Text>{data.brand}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{color: '#424242', fontSize: 17, fontWeight: '600'}}>
              Rs.{data.price}
            </Text>
            <Text>
              <AntDesign name="star" size={22} color={'gold'} /> {data.rating}
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#460996',
              color: '#fff',
              textAlign: 'center',
              padding: 5,
              borderRadius: 50,
              elevation: 6,
            }}>
            {'More >>'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default AllData;

const styles = StyleSheet.create({});
