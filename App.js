import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListItems from "./src/screens/ListItems";
import ListItems5 from "./src/screens/ListItems5";
import InitialScreen from "./src/screens/InitialScreen";
import InitialScreen2 from "./src/screens/InitialScreen2";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListItems,
    List5: ListItems5,
    Initial: InitialScreen,
    Initial2: InitialScreen2,
  },
  {
    initialRouteName: "Initial2",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
