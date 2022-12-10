import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const FilterChip = props => {
  const OnClick = () => {
    if (props.getData !== undefined && props.getData !== null) {
      props.getData(props.label);
    }
  };

  return (
    <View>
      {!props.invisible && props.checked && (
        <Pressable
          style={{
            position: 'relative',
            borderRadius: 8,
            backgroundColor: '#e8def8',
            width: windowWidth / 2 - 24,
            flexDirection: 'row',
            paddingLeft: 8,
            paddingTop: 6,
            paddingRight: 16,
            paddingBottom: 6,
            marginLeft: 8,
            marginRight: 8,
            boxSizing: 'border-box',
            alignItems: 'center',
            justifyContent: 'center',
            height: 32,
          }}
          onPress={OnClick}>
          <Image
            style={styles.checkbox}
            resizeMode="cover"
            source={require('../../assets/images/icon.png')}
          />
          <Text style={styles.checked}>{props.label}</Text>
        </Pressable>
      )}

      {!props.invisible && !props.checked && (
        <Pressable
          style={{
            position: 'relative',
            borderRadius: 8,
            borderStyle: 'solid',
            borderColor: '#79747e',
            borderWidth: 1,
            width: windowWidth / 2 - 24,
            flexDirection: 'row',
            paddingHorizontal: 12,
            paddingVertical: 6,
            boxSizing: 'border-box',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: 8,
            marginRight: 8,
            height: 32,
          }}
          onPress={OnClick}>
          <Text style={styles.unchecked}>{props.label}</Text>
        </Pressable>
      )}

      {props.invisible && (
        <View
          style={{
            position: 'relative',
            borderRadius: 8,
            borderColor: 'transparent',
            borderWidth: 1,
            width: windowWidth / 2 - 24,
            flexDirection: 'row',
            paddingHorizontal: 12,
            paddingVertical: 6,
            boxSizing: 'border-box',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: 8,
            marginRight: 8,
          }}
          onPress={OnClick}></View>
      )}
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  unchecked: {
    position: 'relative',
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'OpenSans_400Regular',
    color: '#49454f',
    textAlign: 'center',
  },
  checkbox: {
    position: 'relative',
    width: 18,
    height: 18,
    flexShrink: 0,
  },
  checked: {
    position: 'relative',
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'OpenSans_400Regular',
    color: '#1d192b',
    textAlign: 'center',
    marginLeft: 8,
  },
});

export {FilterChip};
