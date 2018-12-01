import React from 'react';
import { View, Text, TouchableOpacity, Button, Dimensions } from 'react-native';
import {
  createNavigator,
  SwitchRouter,
  createAppContainer,
  SceneView
} from 'react-navigation';
import Home from './src/screens/Home.js';
import Categories from './src/screens/Categories.js';
import Brands from './src/screens/Brands.js';

let width = Dimensions.get('window').width;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    height: 56,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabText: {
    background: 'white',
    fontColor: 'black'
  }
};
function createCustomNavigator(routeConfigMap, config = {}) {
  let router = SwitchRouter(routeConfigMap, config);
  let NavigatorComponent = createNavigator(NavigationView, router, config);
  return createAppContainer(NavigatorComponent);
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
        <View style={styles.tab}>
          {state.routes.map(({ routeName, key }) => (
            <TouchableOpacity
              key={key}
              onPress={() => this.props.navigation.navigate(routeName)}
              title={routeName}
              style={styles.tabText}
            >
              <Text>{routeName}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <SceneView
          component={ScreenComponent}
          navigation={descriptor.navigation}
          screenProps={this.props.screenProps}
        />
      </View>
    );
  }
}
export default createCustomNavigator({
  Home,
  Categories,
  Brands
});
