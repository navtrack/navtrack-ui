import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccountScreen from "../screens/create-account/CreateAccountScreen";
import ForgotPasswordScreen from "../screens/forgot-password/ForgotPasswordScreen";
import { LogInScreen } from "../screens/log-in/LogInScreen";

const Stack = createNativeStackNavigator();

export const UnauthenticatedScreens = {
  LogIn: "Login",
  CreateAccount: "CreateAccount",
  ForgotPassword: "ForgotPassword"
};

export const UnauthenticatedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Group>
        <Stack.Screen
          name={UnauthenticatedScreens.LogIn}
          component={LogInScreen}
        />
        <Stack.Screen
          name={UnauthenticatedScreens.CreateAccount}
          component={CreateAccountScreen}
        />
        <Stack.Screen
          name={UnauthenticatedScreens.ForgotPassword}
          component={ForgotPasswordScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
