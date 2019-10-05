import React from 'react';
import {View, Text} from 'react-native';
class HomeScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return {
      title: params ? params.title : 'Home',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };
  render() {
    const {navigate, getParam} = this.props.navigation;
    return (
      <View>
        <Text onPress={() => navigate('Profile', {name: 'Jane'})}>
          goto profile --{getParam('name', 'name!')}
        </Text>
        <Text onPress={() => navigate('MyModal')}>open modal</Text>
      </View>
    );
  }
}
export default HomeScreen;
