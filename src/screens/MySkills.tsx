import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../components";

const skillGroups = [
	{
		name: "Desenvolvimento mobile",
		skills: [
			{ name: "React Native", level: "Intermediário", segments: 6 },
			{ name: "Expo", level: "Intermediário", segments: 6 },
			{ name: "React Navigation", level: "Em desenvolvimento", segments: 4 },
		],
	},
	{
		name: "Linguagens e interface",
		skills: [
			{ name: "JavaScript", level: "Intermediário", segments: 6 },
			{ name: "TypeScript", level: "Em desenvolvimento", segments: 4 },
			{ name: "React Native UI", level: "Intermediário", segments: 5 },
		],
	},
	{
		name: "Ferramentas",
		skills: [
			{ name: "Git e GitHub", level: "Intermediário", segments: 6 },
			{ name: "Android e Expo Go", level: "Em desenvolvimento", segments: 4 },
		],
	},
];

export default function MySkills() {
	const [avatarFailed, setAvatarFailed] = useState(false);

	return (
		<ScrollView
			style={styles.screen}
			contentContainerStyle={styles.content}
			showsVerticalScrollIndicator={false}
		>
			<View style={styles.header}>
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
				<View style={styles.headingCopy}>
					<Text style={styles.eyebrow}>PORTFÓLIO · 2026</Text>
					<Text style={styles.name}>Biel Souza</Text>
					<Text style={styles.subtitle}>Mapa de habilidades</Text>
				</View>
			</View>

			<View style={styles.levelLegend}>
				<Text style={styles.legendTitle}>NÍVEL ATUAL</Text>
				<Text style={styles.legendCopy}>Em evolução, projeto a projeto.</Text>
			</View>

			{skillGroups.map((group, groupIndex) => (
				<View key={group.name} style={styles.group}>
					<View style={styles.groupHeading}>
						<View style={styles.groupIndex}>
							<Text style={styles.groupIndexText}>
								{String(groupIndex + 1).padStart(2, "0")}
							</Text>
						</View>
						<Text style={styles.groupTitle}>{group.name}</Text>
					</View>
					<View style={styles.skillList}>
						{group.skills.map((skill) => (
							<View key={skill.name} style={styles.skillRow}>
								<View style={styles.branch}>
									<View style={styles.branchLine} />
									<View style={styles.branchNode} />
								</View>
								<View style={styles.skillBody}>
									<View style={styles.skillLabels}>
										<Text style={styles.skillName}>{skill.name}</Text>
										<Text style={styles.skillLevel}>{skill.level}</Text>
									</View>
									<View
										accessibilityLabel={`${skill.name}: ${skill.level}`}
										accessibilityRole="progressbar"
										accessibilityValue={{
											min: 0,
											max: 10,
											now: skill.segments,
										}}
										style={styles.meter}
									>
										{Array.from({ length: 10 }, (_, index) => (
											<View
												key={`${skill.name}-${index}`}
												style={[
													styles.meterSegment,
													index < skill.segments
														? styles.meterSegmentActive
														: styles.meterSegmentInactive,
												]}
											/>
										))}
									</View>
								</View>
							</View>
						))}
					</View>
				</View>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.segunda,
	},
	content: {
		flexGrow: 1,
		paddingHorizontal: 22,
		paddingTop: 28,
		paddingBottom: 36,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: Colors.quarta,
	},
	avatarFrame: {
		width: 76,
		height: 76,
		padding: 3,
		marginRight: 16,
		borderRadius: 38,
		borderWidth: 1,
		borderColor: Colors.sexta,
		backgroundColor: Colors.terceira,
	},
	avatar: {
		width: "100%",
		height: "100%",
		borderRadius: 35,
	},
	avatarFallback: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 35,
		backgroundColor: Colors.quarta,
	},
	avatarInitials: {
		color: Colors.oitava,
		fontSize: 23,
		fontWeight: "700",
	},
	headingCopy: {
		flex: 1,
	},
	eyebrow: {
		color: Colors.sexta,
		fontSize: 10,
		fontWeight: "700",
	},
	name: {
		marginTop: 5,
		color: Colors.oitava,
		fontSize: 24,
		fontWeight: "700",
	},
	subtitle: {
		marginTop: 3,
		color: Colors.oitava,
		fontSize: 13,
		opacity: 0.72,
	},
	levelLegend: {
		marginTop: 20,
		marginBottom: 8,
		paddingHorizontal: 14,
		paddingVertical: 12,
		borderLeftWidth: 3,
		borderLeftColor: Colors.sexta,
		backgroundColor: Colors.primeira,
	},
	legendTitle: {
		color: Colors.quinta,
		fontSize: 10,
		fontWeight: "700",
	},
	legendCopy: {
		marginTop: 4,
		color: Colors.oitava,
		fontSize: 13,
	},
	group: {
		marginTop: 24,
	},
	groupHeading: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	groupIndex: {
		width: 32,
		height: 28,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 10,
		borderRadius: 6,
		backgroundColor: Colors.terceira,
	},
	groupIndexText: {
		color: Colors.setima,
		fontSize: 11,
		fontWeight: "700",
	},
	groupTitle: {
		flex: 1,
		color: Colors.oitava,
		fontSize: 15,
		fontWeight: "700",
	},
	skillList: {
		paddingLeft: 15,
	},
	skillRow: {
		minHeight: 66,
		flexDirection: "row",
	},
	branch: {
		width: 22,
		alignItems: "center",
		marginRight: 8,
	},
	branchLine: {
		position: "absolute",
		top: 0,
		bottom: 0,
		width: 1,
		backgroundColor: Colors.quarta,
	},
	branchNode: {
		zIndex: 1,
		width: 9,
		height: 9,
		marginTop: 8,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: Colors.sexta,
		backgroundColor: Colors.segunda,
	},
	skillBody: {
		flex: 1,
		paddingBottom: 10,
	},
	skillLabels: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 8,
	},
	skillName: {
		flexShrink: 1,
		color: Colors.oitava,
		fontSize: 13,
		fontWeight: "600",
	},
	skillLevel: {
		color: Colors.sexta,
		fontSize: 11,
	},
	meter: {
		flexDirection: "row",
		gap: 4,
		marginTop: 8,
	},
	meterSegment: {
		flex: 1,
		height: 4,
		borderRadius: 2,
	},
	meterSegmentActive: {
		backgroundColor: Colors.sexta,
	},
	meterSegmentInactive: {
		backgroundColor: Colors.quarta,
	},
});
