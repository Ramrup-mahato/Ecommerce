import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = ({back}) => {
    const navigation=useNavigation()
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#460996',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: 20,
        position: 'absolute',
        zIndex: 2,
        elevation: 5,
      }}>
      {back === true ? (
        <TouchableOpacity onPress={()=>navigation.goBack()} >
          <Text style={{fontSize: 25, fontWeight: '700', color: '#fff'}}>
            {'<'}
          </Text>
        </TouchableOpacity>
      ) : (
        <Text style={{fontSize: 20, fontWeight: '700', color: '#fff'}}>
          Product
        </Text>
      )}
      {/* <Text style={{fontSize:15,color:'#fff'}}>Item:0</Text> */}
    </View>
  );
};

export default HomeHeader;
