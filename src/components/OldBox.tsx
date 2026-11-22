import { View } from "react-native";
import { Colors } from "./Colors";
//TODO: criar todas essas variantes de forma mais resumida e com menos código onde for possível, talvez com um array de cores e um map
export const Box = {
	Red: () => (
		<BoxContainer style={{ backgroundColor: "red", borderColor: "pink" }} />
	),
	Blue: () => (
		<BoxContainer style={{ backgroundColor: "blue", borderColor: "cyan" }} />
	),
	Green: () => (
		<BoxContainer
			style={{ backgroundColor: "green", borderColor: "lightgreen" }}
		/>
	),
	Um: () => (
		<BoxContainer
			style={{ backgroundColor: Colors.primeira, borderColor: Colors.primeira }}
		/>
	),
	Dois: () => (
		<BoxContainer
			style={{ backgroundColor: Colors.segunda, borderColor: Colors.segunda }}
		/>
	),
	Tres: ({ children }: { children?: React.ReactNode }) => (
		<BoxContainer
			style={{ backgroundColor: Colors.terceira, borderColor: Colors.terceira }}
		>
			{children}
			{/*TODO: replicar essa implemetação de children em todas outras caixas */}
		</BoxContainer>
	),
	Quatro: ({ children }: any) => (
		<BoxContainer
			style={{ backgroundColor: Colors.quarta, borderColor: Colors.quarta }}
		>
			{children}
		</BoxContainer>
	),
	Cinco: () => (
		<BoxContainer
			style={{ backgroundColor: Colors.quinta, borderColor: Colors.quinta }}
		/>
	),
	Seis: () => (
		<BoxContainer
			style={{ backgroundColor: Colors.sexta, borderColor: Colors.sexta }}
		/>
	),
	Sete: () => (
		<BoxContainer
			style={{ backgroundColor: Colors.setima, borderColor: Colors.setima }}
		/>
	),
	Oito: () => (
		<BoxContainer
			style={{ backgroundColor: Colors.oitava, borderColor: Colors.oitava }}
		/>
	),
};

function BoxContainer({ children, style }: any) {
	return (
		<View
			style={[
				{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					margin: 5,
					borderWidth: 5,
					minWidth: 100,
					minHeight: 40,
				},
				style,
			]}
		>
			{children}
		</View>
	);
}

function Um() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.primeira,
			}}
		></View>
	);
}
function Dois() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.segunda,
			}}
		></View>
	);
}
function Tres({ children, style }: any) {
	return (
		<View
			style={[
				{
					width: 100,
					height: 100,
					backgroundColor: Colors.terceira,
				},
				style,
			]}
		>
			{children}
		</View>
	);
}
function Quatro() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.quarta,
			}}
		></View>
	);
}
function Cinco() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.quinta,
			}}
		></View>
	);
}
function Seis() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.sexta,
			}}
		></View>
	);
}
function Sete() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.setima,
			}}
		></View>
	);
}
function Oito() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.oitava,
			}}
		></View>
	);
}
