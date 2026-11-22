# Política de Privacidade — Bat Ferramentas

**Última atualização: 22 de novembro de 2026**

Esta política descreve como o aplicativo **Bat Ferramentas** trata informações. O app é um projeto de estudos e portfólio. Ela se aplica à versão Android publicada pelo responsável pelo projeto e deve ser atualizada quando o código, as dependências ou as práticas de tratamento mudarem.

## Responsável e contato

O aplicativo é mantido como projeto de estudos e portfólio no repositório [cursos-e-estudos/BatFerramentas](https://github.com/cursos-e-estudos/BatFerramentas). A tela atual do app identifica o perfil como Biel Souza.

Para dúvidas ou solicitações de privacidade, entre em contato pelo e-mail [paciencia.estudio@gmail.com](mailto:paciencia.estudio@gmail.com). O endereço também é o contato de suporte informado pelo responsável pelo app.

O repositório também possui uma página pública de [issues](https://github.com/cursos-e-estudos/BatFerramentas/issues) para comentários gerais. Não publique senhas, documentos, dados pessoais ou informações confidenciais nesse canal público.

## Informações tratadas pelo aplicativo

O app não oferece cadastro ou login e não possui um servidor ou banco de dados próprio para armazenar informações dos usuários. A versão auditada não contém, no código do app ou nas dependências declaradas diretamente, SDK de anúncios, analytics ou relatórios de falhas.

As funções atuais tratam informações da seguinte maneira:

### Senhas geradas e área de transferência

O gerador cria uma sequência localmente no dispositivo e a mantém na memória da tela enquanto ela está aberta. O código atual usa `Math.random`; essa geração **não é criptograficamente segura** e não deve ser apresentada como tal. Não recomendamos usar essas senhas para proteger contas ou informações importantes.

Se a pessoa tocar em **Copiar**, o app grava a sequência na área de transferência do sistema. O app não lê o conteúdo da área de transferência, não envia essa senha para um servidor e não a grava em uma conta ou banco de dados próprio. A área de transferência é controlada pelo Android: o sistema ou outros apps com acesso permitido podem disponibilizar ou manter temporariamente o conteúdo copiado. A pessoa pode substituir ou limpar o conteúdo usando os controles do dispositivo.

### Lanterna (Bat Sinal)

O Bat Sinal usa a função de lanterna da câmera traseira do dispositivo. O app não implementa captura, gravação, armazenamento ou envio de fotos, vídeos ou áudio. O Android ou a versão da biblioteca de câmera pode exigir permissão de câmera para controlar o flash. Se a permissão for negada, a função da lanterna poderá não funcionar. O app não usa esse recurso para enviar conteúdo da câmera ao responsável pelo projeto.

### Imagem de perfil

As telas de perfil carregam uma imagem hospedada pelo GitHub a partir de `github.com/souvitorgabriel.png`. Para exibi-la, o dispositivo faz uma solicitação HTTPS diretamente ao GitHub. Como em outras conexões web, o GitHub pode receber dados técnicos da conexão, como endereço IP, informações do pedido e dados técnicos disponibilizados pela plataforma, e tratá-los conforme os [termos e a política de privacidade do GitHub](https://docs.github.com/pt/site-policy/privacy-policies/github-general-privacy-statement).

O responsável pelo app não recebe, por meio do código atual, os registros técnicos dessa solicitação mantidos pelo GitHub. Se a imagem não carregar, o app mostra iniciais no lugar dela.

### Links externos

O app oferece links para GitHub, LinkedIn e para o repositório do projeto. Esses links só são abertos quando a pessoa toca neles. A abertura pode transferir o usuário ao aplicativo ou site do terceiro, que passa então a tratar os dados segundo suas próprias políticas. O responsável pelo Bat Ferramentas não controla as práticas desses serviços.

## Compartilhamento, publicidade e rastreamento

O responsável pelo projeto não vende nem compartilha com terceiros dados armazenados em um servidor próprio, pois a versão auditada não mantém esse tipo de armazenamento. Não há anúncios integrados nas dependências diretas declaradas no `package.json`.

As conexões diretas descritas acima são exceções importantes: o GitHub recebe a solicitação necessária para carregar a imagem de perfil; e GitHub ou LinkedIn recebem a navegação quando a pessoa escolhe abrir um link. Consulte as políticas desses provedores para entender como eles tratam os dados recebidos.

Esta descrição reflete a inspeção do código-fonte e das dependências diretas declaradas no repositório em 22 de novembro de 2026. Bibliotecas transitivas, requisitos do Android, alterações futuras ou serviços externos podem ter tratamentos próprios. O responsável deve revisar o AAB final e as informações dos SDKs antes de preencher a seção **Segurança dos dados** da Play Console.

## Armazenamento, retenção e exclusão

O app não cria contas e não armazena as senhas geradas em um servidor do responsável. A senha permanece na memória da tela durante o uso e, se copiada, na área de transferência do sistema até que seja substituída ou removida conforme os controles do dispositivo. O responsável pelo app não tem como apagar remotamente o conteúdo da área de transferência.

Como não há conta de usuário nem dados de conta armazenados pelo app, não há um processo de exclusão de conta a oferecer nesta versão. Dados técnicos tratados por GitHub ou LinkedIn são administrados pelos respectivos provedores, sujeitos às políticas e ferramentas deles.

## Segurança

O app não transmite senhas geradas ao responsável pelo projeto. A solicitação para carregar a imagem de perfil usa HTTPS. Nenhum aplicativo pode garantir a segurança do sistema operacional, da área de transferência ou dos serviços externos; mantenha o Android atualizado e evite copiar informações sensíveis em dispositivos compartilhados.

## Crianças

O app é um protótipo de estudos e portfólio, não foi projetado especificamente para crianças. A classificação e o público-alvo devem ser declarados separadamente na Play Console. Se o público ou as funções mudarem, esta política e a avaliação das regras aplicáveis também deverão ser revistas.

## Alterações nesta política

Esta política poderá ser revisada quando o app ou as práticas de tratamento mudarem. A versão vigente ficará publicada nesta página, com a data da última atualização no início do documento. Mudanças relevantes devem também ser refletidas nas declarações da Play Console e, quando necessário, comunicadas dentro do app.

## Seus direitos e legislação aplicável

As solicitações relacionadas à privacidade podem ser encaminhadas pelo canal de contato indicado acima. Quando leis de proteção de dados, como a Lei Geral de Proteção de Dados Pessoais (LGPD), forem aplicáveis, os direitos do titular e os procedimentos para exercê-los dependerão do tipo de dado e do agente responsável pelo tratamento. Para dados tratados diretamente pelo GitHub, LinkedIn ou pelo sistema Android, use também os canais próprios desses serviços.

---

Esta política não substitui as declarações exigidas no Play Console. A ficha da Play e a seção **Segurança dos dados** devem corresponder ao comportamento real do app, do AAB final e de todos os SDKs incluídos.