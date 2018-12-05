import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  createNavigator,
  SwitchRouter,
  createAppContainer,
  SceneView,
  createStackNavigator
} from 'react-navigation';
import Featured from './src/screens/Home.js';
import Categories from './src/screens/Categories.js';
import Brands from './src/screens/Brands.js';
import AppHeader from './src/components/AppHeader.js';
import Search from './src/screens/Search.js';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabText: {
    fontFamily: 'Montserrat-Bold',
    color: '#999999',
    fontSize: 11,
    padding: 45,
    paddingBottom: 17,
    paddingTop: 17
  },
  tabTextActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#0070D6',
    color: 'black'
  }
};
function createCustomNavigator(routeConfigMap, config = {}) {
  let router = SwitchRouter(routeConfigMap, config);
  let NavigatorComponent = createNavigator(NavigationView, router, config);
  return createAppContainer(NavigatorComponent);
}
class NavigationView extends React.Component {
  render() {
    let { state } = this.props.navigation;
    let activeKey = state.routes[state.index].key;
    let descriptor = this.props.descriptors[activeKey];
    let ScreenComponent = descriptor.getComponent();
    return (
      <View style={{ flex: 1 }}>
        <AppHeader />
        <View style={styles.tab}>
          {state.routes.map(({ routeName, key }) => (
            <TouchableOpacity
              key={key}
              onPress={() => this.props.navigation.navigate(routeName)}
            >
              {routeName == activeKey ? (
                <Text style={[styles.tabText, styles.tabTextActive]}>
                  {routeName.toUpperCase()}
                </Text>
              ) : (
                <Text style={styles.tabText}>{routeName.toUpperCase()}</Text>
              )}
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

let HomeTabs = createCustomNavigator({
  Featured,
  Categories,
  Brands
});

export default createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: HomeTabs,
        navigationOptions: {
          header: null
        }
      },
      Search: {
        screen: Search,
        navigationOptions: {
          title: 'Search',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Medium',
            color: 'black',
            fontSize: 18
          }
        }
      }
    },
    {
      headerMode: 'screen'
    }
  )
);
