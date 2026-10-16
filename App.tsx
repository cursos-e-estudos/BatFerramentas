import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainNavigator from "./src/screens/MainNavigator";

export default function App() {
	return (
		<GestureHandlerRootView style={styles.container}>
			<SafeAreaView style={styles.container}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.container}
				>
					<ScrollView contentContainerStyle={styles.scroll}>
						<NavigationContainer>
							<MainNavigator />
						</NavigationContainer>
					</ScrollView>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scroll: {
		flexGrow: 1,
		justifyContent: "center",
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 12,
		borderRadius: 8,
		marginBottom: 16,
	},
});
