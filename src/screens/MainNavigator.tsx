//Imports de navegação
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Home from "./Home";
import MySkills from "./MySkills";

// Cria o navegador sem passar nenhuma tipagem complexa de rotas
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

import { Colors } from "../components";

//TODO: onde fica o theme de navigation
export default function MainNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.terceira,
				},
				headerTintColor: Colors.quinta,
				headerTitleStyle: {
					color: Colors.oitava,
					fontWeight: "700",
				},
				drawerStyle: {
					backgroundColor: Colors.primeira,
				},
				drawerActiveBackgroundColor: Colors.quarta,
				drawerActiveTintColor: Colors.setima,
				drawerInactiveTintColor: Colors.oitava,
				drawerLabelStyle: {
					fontSize: 15,
					fontWeight: "600",
				},
				drawerItemStyle: {
					marginHorizontal: 10,
					borderRadius: 8,
				},
				sceneContainerStyle: {
					backgroundColor: Colors.segunda,
				},
			}}
		>
			<Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="My Skills" component={MySkills} />
			<Drawer.Screen name="Top Tabs" component={TopTabComponent} />
		</Drawer.Navigator>
	);
}

function TopTabComponent()
{
	return (
		<TopTab.Navigator
			screenOptions={{
				// Barra de Abas (Tab Bar)
				tabBarStyle: {
					backgroundColor: Colors.primeira,
					height: 60,
				},
				tabBarActiveTintColor: Colors.setima,
				tabBarInactiveTintColor: Colors.oitava,

				tabBarItemStyle: {
					paddingTop: 18,
				},
				tabBarScrollEnabled: true,
				tabBarIndicatorStyle: {
					backgroundColor: Colors.quinta,
					height: "100%",
				},
			}}
		>
			<TopTab.Screen name="Bat Sinal" component={Screen4} />
			<TopTab.Screen name="Versão tutorial" component={Screen3} />
			<TopTab.Screen name="Cores 🟥🟩🟦" component={Screen2} />
		</TopTab.Navigator>
	);
}