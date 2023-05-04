import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListItems from "./src/screens/ListItems";
import ListItems5 from "./src/screens/ListItems5";
import InitialScreen from "./src/screens/InitialScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListItems,
    List5: ListItems5,
    Initial: InitialScreen,
  },
  {
    initialRouteName: "Initial",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
