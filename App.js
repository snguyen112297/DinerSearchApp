import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/Home';
import Restaurant from './src/Restaurant'

const navigator = createStackNavigator(
  {
    Home: Home,
    Restaurant: Restaurant
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "DinerSearch"
    }
  }
)
export default createAppContainer(navigator)
