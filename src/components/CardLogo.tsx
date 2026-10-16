import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "./Colors";

export default function CardLogo({ texto }: { texto: string }) {
	return (
		<View style={styles.container}>
			<Icon
				name="bat"
				size={170}
				color={Colors.quinta}
				style={{ margin: -20 }}
			/>
			<Text style={{ fontSize: 20, color: Colors.quinta, fontWeight: "bold" }}>
				{texto ? texto : "BatSenhas"}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.primeira,
		borderColor: Colors.quinta,
		borderWidth: 2,
		borderRadius: 10,
		maxHeight: 200,
		minWidth: 250,
	},
});
