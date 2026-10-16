//Imports de navegação
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";

// Cria o navegador sem passar nenhuma tipagem complexa de rotas
const TopTab = createMaterialTopTabNavigator();

import { Colors } from "../components";

//TODO: onde fica o theme de navigation
export default function MainNavigator() {
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
