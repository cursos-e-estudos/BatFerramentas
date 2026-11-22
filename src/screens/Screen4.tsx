import { useFocusEffect } from "@react-navigation/native";
import { CameraView } from "expo-camera";
import { useCallback, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CardLogo, Colors } from "../components";

export default function Screen4() {
	const [lanternOn, setLanternOn] = useState(false);

	useFocusEffect(
		useCallback(() => {
			return () => setLanternOn(false);
		}, []),
	);

	return (
		<View style={[styles.container, {backgroundColor: lanternOn ? Colors.terceira : Colors.segunda,}]}>
			<TouchableOpacity onPress={() => setLanternOn(!lanternOn)}>
				
				<CardLogo texto={lanternOn ? "Desligar Sinal" : "Ligar Sinal"} />
			</TouchableOpacity>
			

		
			<CameraView
				style={{width: 0, height: 0}}
				enableTorch={lanternOn}
				facing="back"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
});
