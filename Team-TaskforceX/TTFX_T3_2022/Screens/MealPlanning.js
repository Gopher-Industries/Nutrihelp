import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  FlatList,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FilterChip} from './Components/FilterChip';

const windowWidth = Dimensions.get('window').width;

const MealPlanning = () => {
  const navigation = useNavigation();
  const [none, setNone] = useState(true);
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [desert, setDesert] = useState(false);

  const DATA = [
    {
      label: 'None',
      checked: none,
      getData: {getName},
      invisible: false,
    },
    {
      label: 'Breakfast',
      checked: breakfast,
      getData: {getName},
      invisible: false,
    },
    {
      label: 'Lunch',
      checked: lunch,
      getData: {getName},
      invisible: false,
    },
    {
      label: 'Dinner',
      checked: dinner,
      getData: {getName},
      invisible: false,
    },
    {
      label: 'Desert',
      checked: desert,
      getData: {getName},
      invisible: false,
    },
    {
      label: 'Invisible',
      checked: false,
      invisible: true,
    },
  ];

  const Item = ({label, checked, invisible}) => (
    <FilterChip
      label={label}
      checked={checked}
      getData={getName}
      invisible={invisible}
    />
  );

  const renderItem = ({item}) => (
    <Item
      label={item.label}
      checked={item.checked}
      getData={item.getName}
      invisible={item.invisible}
    />
  );

  function getName(label) {
    switch (label) {
      case 'None':
        {
          if (none === false) {
            setBreakfast(false);
            setLunch(false);
            setDinner(false);
            setDesert(false);
          }
          if (!none || breakfast || lunch || dinner || desert) {
            setNone(!none);
          }
        }
        break;
      case 'Breakfast':
        {
          if (breakfast === false) {
            setNone(false);
          } else if (!lunch && !dinner && !desert) {
            setNone(true);
          }
          setBreakfast(!breakfast);
        }
        break;
      case 'Lunch':
        {
          if (lunch === false) {
            setNone(false);
          } else if (!breakfast && !dinner && !desert) {
            setNone(true);
          }
          setLunch(!lunch);
        }
        break;
      case 'Dinner':
        {
          if (dinner === false) {
            setNone(false);
          } else if (!breakfast && !lunch && !desert) {
            setNone(true);
          }
          setDinner(!dinner);
        }
        break;
      case 'Desert':
        {
          if (desert === false) {
            setNone(false);
          } else if (!breakfast && !lunch && !dinner) {
            setNone(true);
          }
          setDesert(!desert);
        }
        break;
    }
  }

  return (
    <View style={styles.mealPlanningView}>
      <Pressable style={styles.topAppBarPressable}>
        <Pressable
          style={styles.leadingIconPressable}
          onPress={() => navigation.navigate('DailyNutritionPlan')}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require('../assets/images/leadingicon.png')}
          />
          <Text style={styles.headlineText}>Meal Planning</Text>
        </Pressable>
      </Pressable>

      <Text style={styles.paragraphText}>
        Select which recipes our nutritionist will automatically recommend based
        on your preferences and health?
      </Text>

      <FlatList
        style={styles.list}
        paddingTop={1}
        data={DATA}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ItemSeparatorComponent={() => (
          <View style={{height: 16, marginHorizontal: 16}} />
        )}
      />

      <Pressable
        style={styles.buttonPressable}
        onPress={() => navigation.navigate('Permissions')}>
        <Text style={styles.continueLabel}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  paragraphText: {
    position: 'relative',
    letterSpacing: -0.2,
    lineHeight: 24,
    fontFamily: 'OpenSans_400Regular',
    color: '#000',
    textAlign: 'left',
    height: 74,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 68,
  },
  mealPlanningView: {
    position: 'relative',
    backgroundColor: '#fffbfe',
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  column: {
    flexShrink: 1,
  },
  buttonPressable: {
    position: 'absolute',
    bottom: 32,
    left: 16,
    borderRadius: 100,
    backgroundColor: '#8273a9',
    width: windowWidth - 32,
    overflow: 'hidden',
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingVertical: 10,
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  continueLabel: {
    position: 'relative',
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'OpenSans_400Regular',
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  leadingIconPressable: {
    position: 'relative',
    marginTop: 52,
    marginLeft: 16,
    width: 24,
    height: 24,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  headlineText: {
    position: 'absolute',
    top: 36,
    left: 0,
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'OpenSans_400Regular',
    color: '#000',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    width: 328,
  },

  list: {
    position: 'relative',
    marginTop: 25,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default MealPlanning;
