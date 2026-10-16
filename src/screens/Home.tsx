import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
	Image,
	Linking,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Colors } from "../components";

const links = [
	{
		label: "GitHub",
		detail: "Projetos e código",
		url: "https://github.com/souvitorgabriel",
		icon: "github" as const,
	},
	{
		label: "LinkedIn",
		detail: "Experiência profissional",
		url: "https://www.linkedin.com/in/gabriel-souza-mobiledev",
		icon: "linkedin" as const,
	},
	{
		label: "BatSenhas",
		detail: "Repositório deste projeto",
		url: "https://github.com/cursos-e-estudos/BatSenhas",
		icon: "external-link" as const,
	},
];

export default function Home() {
	const [avatarFailed, setAvatarFailed] = useState(false);

	return (
		<ScrollView
			style={styles.screen}
			contentContainerStyle={styles.content}
			showsVerticalScrollIndicator={false}
		>
			<View style={styles.intro}>
				<View style={styles.avatarFrame}>
					{!avatarFailed ? (
						<Image
							accessibilityLabel="Foto de perfil de Biel Souza"
							source={{ uri: "https://github.com/souvitorgabriel.png?size=256" }}
							style={styles.avatar}
							onError={() => setAvatarFailed(true)}
						/>
					) : (
						<View style={styles.avatarFallback}>
							<Text style={styles.avatarInitials}>BS</Text>
						</View>
					)}
				</View>
				<Text style={styles.eyebrow}>DESENVOLVEDOR MOBILE</Text>
				<Text style={styles.name}>Biel Souza</Text>
				<Text style={styles.bio}>
					O Batman desse projeto de estudo.
				</Text>
				<View style={styles.availability}>
					<View style={styles.availabilityDot} />
					<Text style={styles.availabilityText}>Aberto a conexões e projetos</Text>
				</View>
			</View>

			<View style={styles.linksSection}>
				<Text style={styles.sectionEyebrow}>ENCONTRE-ME</Text>
				<Text style={styles.sectionTitle}>Vamos nos conectar.</Text>
				{links.map((link) => (
					<LinkRow key={link.label} {...link} />
				))}
			</View>
		</ScrollView>
	);
}

function LinkRow({
	label,
	detail,
	url,
	icon,
}: (typeof links)[number]) {
	return (
		<TouchableOpacity
			accessibilityLabel={`${label}: ${detail}`}
			accessibilityRole="link"
			activeOpacity={0.75}
		onPress={() => Linking.openURL(url)}
			style={styles.linkRow}
		>
			<View style={styles.linkIcon}>
				<FontAwesome name={icon} size={19} color={Colors.setima} />
			</View>
			<View style={styles.linkCopy}>
				<Text style={styles.linkTitle}>{label}</Text>
				<Text style={styles.linkDetail}>{detail}</Text>
			</View>
			<FontAwesome name="arrow-up" size={14} color={Colors.sexta} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.segunda,
	},
	content: {
		flexGrow: 1,
		paddingHorizontal: 24,
		paddingTop: 42,
		paddingBottom: 36,
	},
	intro: {
		alignItems: "center",
		paddingBottom: 36,
	},
	avatarFrame: {
		width: 132,
		height: 132,
		padding: 5,
		marginBottom: 26,
		borderRadius: 66,
		borderWidth: 1,
		borderColor: Colors.sexta,
		backgroundColor: Colors.terceira,
	},
	avatar: {
		width: "100%",
		height: "100%",
		borderRadius: 60,
	},
	avatarFallback: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 60,
		backgroundColor: Colors.quarta,
	},
	avatarInitials: {
		color: Colors.oitava,
		fontSize: 34,
		fontWeight: "700",
	},
	eyebrow: {
		color: Colors.sexta,
		fontSize: 12,
		fontWeight: "700",
	},
	name: {
		marginTop: 10,
		color: Colors.oitava,
		fontSize: 38,
		fontWeight: "700",
	},
	bio: {
		maxWidth: 300,
		marginTop: 12,
		color: Colors.oitava,
		fontSize: 16,
		lineHeight: 24,
		textAlign: "center",
		opacity: 0.78,
	},
	availability: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		marginTop: 20,
		paddingHorizontal: 13,
		paddingVertical: 9,
		borderRadius: 20,
		backgroundColor: Colors.primeira,
	},
	availabilityDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: Colors.setima,
	},
	availabilityText: {
		color: Colors.oitava,
		fontSize: 12,
	},
	linksSection: {
		width: "100%",
		maxWidth: 520,
		alignSelf: "center",
	},
	sectionEyebrow: {
		color: Colors.quinta,
		fontSize: 11,
		fontWeight: "700",
	},
	sectionTitle: {
		marginTop: 7,
		marginBottom: 16,
		color: Colors.oitava,
		fontSize: 23,
		fontWeight: "700",
	},
	linkRow: {
		minHeight: 72,
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
		paddingHorizontal: 15,
		paddingVertical: 12,
		borderWidth: 1,
		borderColor: Colors.quarta,
		borderRadius: 8,
		backgroundColor: Colors.primeira,
	},
	linkIcon: {
		width: 40,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 13,
		borderRadius: 20,
		backgroundColor: Colors.terceira,
	},
	linkCopy: {
		flex: 1,
	},
	linkTitle: {
		color: Colors.oitava,
		fontSize: 15,
		fontWeight: "700",
	},
	linkDetail: {
		marginTop: 4,
		color: Colors.oitava,
		fontSize: 12,
		opacity: 0.65,
	},
});
