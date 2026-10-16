import * as Clipboard from "expo-clipboard";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardLogo, CardTextInput, Colors, MyButton } from "../components";
import {CameraView} from "expo-camera";

export default function Screen4() {

	const [lanternOn, setLanternOn] = useState(false);

	return (
		<View style={[styles.container, {backgroundColor: lanternOn ? Colors.terceira : Colors.segunda,}]}>
			<TouchableOpacity onPress={() => setLanternOn(!lanternOn)}>
				
				<CardLogo texto={lanternOn ? "Desligar Lanterna" : "Ligar Lanterna"} />
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
