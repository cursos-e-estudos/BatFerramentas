import { FontAwesome } from "@expo/vector-icons";
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../components";

const policyUrl =
	"https://github.com/cursos-e-estudos/BatFerramentas/blob/main/POLITICA-DE-PRIVACIDADE.md";
const privacyEmail = "paciencia.estudio@gmail.com";

const sections = [
	{
		title: "Responsável e contato",
		text: "O Bat Ferramentas é mantido como projeto de estudos e portfólio no repositório cursos-e-estudos/BatFerramentas. A tela atual do app identifica o perfil como Biel Souza. Para dúvidas ou solicitações de privacidade, escreva para paciencia.estudio@gmail.com.",
	},
	{
		title: "Informações tratadas pelo app",
		text: "O app não oferece cadastro ou login e não possui servidor ou banco de dados próprio para armazenar informações dos usuários. A versão auditada não contém SDK de anúncios, analytics ou relatórios de falhas nas dependências diretas declaradas.",
	},
	{
		title: "Senhas e área de transferência",
		text: "O gerador cria uma sequência no dispositivo e a mantém na memória da tela durante o uso. A implementação atual usa Math.random, que não é criptograficamente seguro; não use essas senhas para proteger contas ou informações importantes. Ao tocar em Copiar, o app grava a sequência na área de transferência do Android. O app não lê nem envia a senha a um servidor. O sistema ou outros apps com acesso permitido podem disponibilizar ou manter temporariamente o conteúdo copiado. A área de transferência é controlada pelo Android.",
	},
	{
		title: "Lanterna (Bat Sinal)",
		text: "O Bat Sinal usa a função de lanterna da câmera traseira. O app não implementa captura, gravação, armazenamento ou envio de fotos, vídeos ou áudio. O Android ou a biblioteca de câmera pode exigir permissão de câmera para controlar o flash. Se a permissão for negada, a lanterna poderá não funcionar.",
	},
	{
		title: "Imagem de perfil",
		text: "As telas de perfil carregam uma imagem hospedada pelo GitHub. Para exibi-la, o dispositivo faz uma solicitação HTTPS diretamente ao GitHub, que pode receber dados técnicos da conexão, como endereço IP e informações do pedido, conforme a política de privacidade do GitHub. O responsável pelo app não recebe esses registros por meio do código atual. Se a imagem não carregar, o app mostra iniciais.",
	},
	{
		title: "Links externos e compartilhamento",
		text: "Os links para GitHub, LinkedIn e o repositório só são abertos quando a pessoa toca neles. Esses serviços passam a tratar os dados da navegação segundo suas próprias políticas. O responsável não controla as práticas deles, não vende dados e não mantém dados de usuários em servidor próprio. Não há anúncios integrados nas dependências diretas declaradas.",
	},
	{
		title: "Armazenamento, retenção e exclusão",
		text: "O app não cria contas e não armazena as senhas em servidor próprio. A senha permanece na memória da tela durante o uso e, se copiada, na área de transferência até ser substituída ou removida conforme os controles do dispositivo. Como não há conta nem dados de conta armazenados pelo app, não há processo de exclusão de conta nesta versão. Dados tratados por GitHub ou LinkedIn são administrados pelos respectivos provedores.",
	},
	{
		title: "Segurança",
		text: "O app não transmite senhas geradas ao responsável pelo projeto. A solicitação da imagem de perfil usa HTTPS. Nenhum app pode garantir a segurança do sistema operacional, da área de transferência ou de serviços externos. Mantenha o Android atualizado e evite copiar informações sensíveis em dispositivos compartilhados.",
	},
	{
		title: "Crianças e alterações",
		text: "O app é um protótipo de estudos e portfólio, não projetado especificamente para crianças. A classificação e o público-alvo são declarados separadamente na Play Console. Esta política será revisada se o app ou as práticas de tratamento mudarem. Última atualização: 22 de novembro de 2026.",
	},
	{
		title: "Seus direitos",
		text: "Envie dúvidas ou solicitações de privacidade para paciencia.estudio@gmail.com. Quando leis de proteção de dados, como a LGPD, forem aplicáveis, os direitos e procedimentos dependerão do tipo de dado e do agente responsável. Para dados tratados diretamente pelo GitHub, LinkedIn ou pelo Android, use também os canais próprios desses serviços.",
	},
];

export default function PrivacyPolicy() {
	return (
		<ScrollView
			style={styles.screen}
			contentContainerStyle={styles.content}
			showsVerticalScrollIndicator={false}
		>
			<Text style={styles.eyebrow}>BAT FERRAMENTAS · PRIVACIDADE</Text>
			<Text style={styles.title}>Política de Privacidade</Text>
			<Text style={styles.updated}>Última atualização: 22 de novembro de 2026</Text>

			<View style={styles.actions}>
				<TouchableOpacity
					accessibilityRole="link"
					accessibilityLabel="Abrir versão online da Política de Privacidade"
					activeOpacity={0.75}
					onPress={() => Linking.openURL(policyUrl)}
					style={styles.actionButton}
				>
					<FontAwesome name="external-link" size={16} color={Colors.primeira} />
					<Text style={styles.actionText}>Versão online</Text>
				</TouchableOpacity>
				<TouchableOpacity
					accessibilityRole="link"
					accessibilityLabel={`Enviar e-mail para ${privacyEmail}`}
					activeOpacity={0.75}
					onPress={() => Linking.openURL(`mailto:${privacyEmail}`)}
					style={styles.emailButton}
				>
					<FontAwesome name="envelope-o" size={16} color={Colors.setima} />
					<Text style={styles.emailText}>Contato de privacidade</Text>
				</TouchableOpacity>
			</View>

			{sections.map((section) => (
				<View key={section.title} style={styles.section}>
					<Text style={styles.sectionTitle}>{section.title}</Text>
					<Text style={styles.body}>{section.text}</Text>
				</View>
			))}

			<Text style={styles.footer}>
				A ficha da Google Play e a seção Segurança dos dados devem corresponder ao comportamento real do app, ao AAB publicado e a todos os SDKs incluídos.
			</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.segunda,
	},
	content: {
		paddingHorizontal: 22,
		paddingTop: 28,
		paddingBottom: 36,
	},
	eyebrow: {
		color: Colors.sexta,
		fontSize: 11,
		fontWeight: "700",
		letterSpacing: 0.6,
	},
	title: {
		marginTop: 8,
		color: Colors.oitava,
		fontSize: 26,
		fontWeight: "700",
	},
	updated: {
		marginTop: 7,
		color: Colors.oitava,
		fontSize: 13,
		opacity: 0.7,
	},
	actions: {
		gap: 10,
		marginTop: 22,
		marginBottom: 10,
	},
	actionButton: {
		minHeight: 48,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		paddingHorizontal: 16,
		borderRadius: 8,
		backgroundColor: Colors.setima,
	},
	actionText: {
		color: Colors.primeira,
		fontSize: 15,
		fontWeight: "700",
	},
	emailButton: {
		minHeight: 46,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		paddingHorizontal: 16,
		borderWidth: 1,
		borderColor: Colors.quarta,
		borderRadius: 8,
		backgroundColor: Colors.primeira,
	},
	emailText: {
		color: Colors.setima,
		fontSize: 14,
		fontWeight: "600",
	},
	section: {
		marginTop: 22,
		paddingTop: 16,
		borderTopWidth: 1,
		borderTopColor: Colors.quarta,
	},
	sectionTitle: {
		marginBottom: 8,
		color: Colors.oitava,
		fontSize: 17,
		fontWeight: "700",
	},
	body: {
		color: Colors.oitava,
		fontSize: 14,
		lineHeight: 22,
		opacity: 0.86,
	},
	footer: {
		marginTop: 24,
		padding: 14,
		borderRadius: 8,
		backgroundColor: Colors.primeira,
		color: Colors.oitava,
		fontSize: 13,
		lineHeight: 20,
		opacity: 0.8,
	},
});