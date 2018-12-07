import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  createNavigator,
  SwitchRouter,
  createAppContainer,
  SceneView
} from 'react-navigation';

export default function createCustomNavigator(routeConfigMap, config = {}) {
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
        <View style={styles.tab}>
          {state.routes.map(({ routeName, key }) => (
            <TouchableOpacity
              key={key}
              onPress={() => this.props.navigation.navigate(routeName)}
              style={{ flex: 1 }}
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

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  tabText: {
    fontFamily: 'Montserrat-Bold',
    color: '#999999',
    fontSize: 11,
    paddingBottom: 17,
    paddingTop: 17,
    textAlign: 'center',
    letterSpacing: 1
  },
  tabTextActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#0070D6',
    color: 'black'
  }
};
