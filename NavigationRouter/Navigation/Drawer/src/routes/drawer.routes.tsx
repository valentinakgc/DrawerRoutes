import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function DrawerRoutes(){
    return(
        <Navigator
        >
            <Screen
                name='Cadastro'
                component={ScreenA}
                options={{
                    drawerLabel: 'Cadastro',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='Login'
                component={ScreenB}
                options={{
                    drawerLabel: 'Login',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="login" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='Home'
                component={ScreenC}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="home" 
                            size={22}
                        />
                }}
            />
        </Navigator>
    )
}