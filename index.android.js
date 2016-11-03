import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';
import {
  SideMenu
} from 'react-native-elements'
import {Scene, Router} from 'react-native-router-flux';
import {observable} from 'mobx';
import {observer} from 'mobx-react/native';
import App from './Components/App';
import MenuComponent from './Components/MenuComponent';
import menuButton from './Components/NavigationItems';

@observer
export default class WorkMonitor extends Component {
  constructor () {
    super()
    this.state = { toggled: false }
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }
  @observable toggle = false;
  toggleSideMenu () {
    this.toggle = !this.toggle;
    (this.toggle)? this._drawer.openDrawer(): this._drawer.closeDrawer();
  }
  render() {
    return (
      <DrawerLayoutAndroid
        ref={(ref) => this._drawer = ref}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={300}
        renderNavigationView={()=><MenuComponent/>}
        >
        <Router>
          <Scene key="root" >
            <Scene key="activity" component={App} title="Activity" initial={true} toggleSideMenu={this.toggleSideMenu}/>
          </Scene>
        </Router>
      </DrawerLayoutAndroid>
    );
  }
}


AppRegistry.registerComponent('WorkMonitor', () => WorkMonitor);
