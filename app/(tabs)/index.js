import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CoursesScreen from "../screens/CoursesScreen";
import QuizScreen from "../screens/QuizScreen";
import ProgressScreen from "../screens/ProgressScreen";
import CommunityScreen from "../screens/CommunityScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Define Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Quizzes" component={QuizScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
    </Tab.Navigator>
  );
}

// Main App Component with single NavigationContainer
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={TabNavigator} 
          options={{ headerShown: false }} // Disable header for the TabNavigator
        />
        {/* Add more Stack.Screen components if needed for additional screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
