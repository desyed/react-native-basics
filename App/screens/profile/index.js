import React from 'react';
import {View, Text, Button} from 'react-native';
class ProfileScreen extends React.Component {
  //   static navigationOptions = {
  //     headerTitle: <Text> custom Component Header</Text>,
  //     headerRight: (
  //       <Button
  //         onPress={() => alert('This is a button!')}
  //         title="Info"
  //         color="#000"
  //       />
  //     ),
  //   };

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <Text> custom Component Header</Text>,
      headerRight: (
        <Button
          // onPress={() => alert('This is a button!')}
          onPress={navigation.getParam('increaseCount')}
          title="Info"
          color="#000"
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount});
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    const {navigate} = this.props.navigation;
    const {count} = this.state;
    return (
      <View>
        <Text
          onPress={() =>
            navigate('Home', {name: 'Jane', title: 'home returned'})
          }>
          Go to home
        </Text>
        <Text>{count}</Text>
      </View>
    );
  }
}

export default ProfileScreen;
