import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomeScreen} from "../screens/WelcomeScreen";


const Tab = createBottomTabNavigator();



export function BottomNavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={WelcomeScreen} />

    </Tab.Navigator>
  );
}