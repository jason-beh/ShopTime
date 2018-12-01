import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import {
  createNavigator,
  SwitchRouter,
  createNavigationContainer,
  SceneView
} from 'react-navigation';

class Screen1 extends React.Component {
  render() {
    return (
      <View>
        <Text> Screen1 </Text>
      </View>
    );
  }
}

class Screen2 extends React.Component {
  render() {
    return (
      <View>
        <Text> Screen2 </Text>
      </View>
    );
  }
}

class Screen3 extends React.Component {
  render() {
    return (
      <View>
        <Text> Screen3 </Text>
      </View>
    );
  }
}

class Screen4 extends React.Component {
  render() {
    return (
      <View>
        <Text> Screen4 </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    height: 56,
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txt: {
    padding: 20,
    fontSize: 15
  }
};
function createCustomNavigator(routeConfigMap, config = {}) {
  let router = SwitchRouter(routeConfigMap, config);
  let NavigatorComponent = createNavigator(NavigationView, router, config);
  return createNavigationContainer(NavigatorComponent);
}
class NavigationView extends React.Component {
  componentDidMount() {
    console.log('componentDidMount', this.props);
  }
  render() {
    let { state } = this.props.navigation;
    let activeKey = state.routes[state.index].key;
    let descriptor = this.props.descriptors[activeKey];
    let ScreenComponent = descriptor.getComponent();
    return (
      <View style={{ flex: 1 }}>
        <SceneView
          component={ScreenComponent}
          navigation={descriptor.navigation}
          screenProps={this.props.screenProps}
        />
        <View style={styles.tab}>
          {state.routes.map(({ routeName, key }) => (
            <Button
              key={key}
              onPress={() => this.props.navigation.navigate(routeName)}
              title={routeName}
            />
          ))}
        </View>
      </View>
    );
  }
}
export default createCustomNavigator({
  Screen1,
  Screen2,
  Screen3,
  Screen4
});
