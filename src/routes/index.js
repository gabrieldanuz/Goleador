import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuPrincipal from '../MenuPrincipal';
import Goleador from '../Goleador';

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
        <Stack.Screen 
        name="Goleador"
        component={Goleador}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="MenuPrincipal"
        component={MenuPrincipal}
        options={{headerShown: false}}
        />
     </Stack.Navigator>
     
  )
}