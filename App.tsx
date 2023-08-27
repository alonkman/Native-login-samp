
import { AppRegistry, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/Screens/Login";
import { useEffect, useState } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "./app/Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalorieCalculator from "./app/Screens/CalorieCalculator";
import Recipes from "./app/Screens/Recipes";
import Questions from "./app/Screens/Questions";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"; 
import SignUp from "./app/Screens/SignUp";
import Profile from "./app/Screens/Profile";


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const auth = getAuth();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={"#006400"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CalorieCalculator"
        component={CalorieCalculator}
        options={{
          headerShown: false,
          tabBarLabel: "Calculator",
          tabBarIcon: ({ color, size }) => (
            <Icon name="calculator" color={"#006400"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={Recipes}
        options={{
          headerShown: false,
          tabBarLabel: "Recipes",
          tabBarIcon: ({ color, size }) => (
            <Icon name="book" color={"#006400"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Questions"
        component={Questions}
        options={{
          headerShown: false,
          tabBarLabel: "Questions",
          tabBarIcon: ({ color, size }) => (
            <Icon name="file" color={"#006400"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={"#006400"} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe; // simulate 2 seconds loading
  }, []);

 

  return (
    <NavigationContainer>
      {user ? (
        <HomeTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
