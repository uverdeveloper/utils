$(document).ready(function(){
    $("#appSelect").click(function(){
       /* chosenApp();*/
    });
   });

function chosenApp(){

	cleanAppFilters();

	var uraApp = $("#apps").val();

	if(uraApp == "avi"){
		loadAVIAudioNomenclatures();
	}
	if(uraApp == "oidigitalcontrole"){
		loadOiDigitalControleAudioNomenclatures();
	}

function loadAVIAudioNomenclatures(){
	$("body").append(
		"<table id=\"avitable\" border=\"2\">"+
				"<tbody>"+
				"<tr>"+
					"<td class=\"colPromptTitle\">NOME DE PROMPT</td>"+
					"<td class=\"colContentTitle\">CONTEUDO</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0001.wav</td>"+
					"<td class=\"colContent\">Um momento.</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0002.wav</td>"+
					"<td class=\"colContent\">Um momento.</td>"+
				"</tr>"+
								"<tr>"+
					"<td class=\"colPromptName\">0003.wav</td>"+
					"<td class=\"colContent\">Serviço indisponível, retornaremos o contato mais tarde.</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0004.wav</td>"+
					"<td class=\"colContent\">Eu não consegui te entender. Obrigado por ligar.</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0005.wav</td>"+
					"<td class=\"colContent\">Achei..!</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0006.wav</td>"+
					"<td class=\"colContent\">Olá, estou falando com</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0007.wav</td>"+
					"<td class=\"colContent\">Obrigado pela atenção, tchau.</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0008.wav</td>"+
					"<td class=\"colContent\">Por favor, aguarde enquanto eu transfiro a sua ligação. Um dos meus colegas continuará o seu atendimento.</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0009.wav</td>"+
					"<td class=\"colContent\">Alô... !</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0010.wav</td>"+
					"<td class=\"colContent\">Eu tô falando com...? </td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0011.wav</td>"+
					"<td class=\"colContent\">Eu gostaria de saber ,se estou falando com ...?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0012.wav</td>"+
					"<td class=\"colContent\">Tenho informações importantes para ...</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0013.wav</td>"+
					"<td class=\"colContent\">Quem tá falando é a IVI , agente virtual da Liq. Você é um de nossos funcionários?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0014.wav</td>"+
					"<td class=\"colContent\">Você é um de nossos funcionários</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0015.wav</td>"+
					"<td class=\"colContent\">Obrigado pela atenção, tchau.!</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0016.wav</td>"+
					"<td class=\"colContent\">Desculpa, foi engano...</td>"+
				"</tr>"+
				"</tbody>"+
			"</table>"
				)
			}

function loadOiDigitalControleAudioNomenclatures(){
	$("body").append(
		"<table id=\"oidigitalcontroletable\" border=\"2\">"+
				"<tbody>"+
				"<tr>"+
					"<td class=\"colPromptTitle\">NOME DE PROMPT</td>"+
					"<td class=\"colContentTitle\">CONTEUDO</td>"+
				"</tr>"+
								"<tr>"+
					"<td class=\"colPromptName\">0001.wav</td>"+
					"<td class=\"colContent\">Oi.</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0002.wav</td>"+
					"<td class=\"colContent\">Oi ... aqui é o Léo, agente virtual da Oi. Só para você saber, essa ligação está sendo gravada.</td>"+
				"</tr>"+
								"<tr>"+
					"<td class=\"colPromptName\">0003.wav</td>"+
					"<td class=\"colContent\">Estou ligando por que analisei que nos últimos 3 meses você gastou</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0004.wav</td>"+
					"<td class=\"colContent\">em recarga. Agora temos novos planos com benefícios melhores do que o do seu plano atual, como quatro vírgula cinco giga de internet por 6 meses, chamadas ilimitadas Oi e 100 minutos para outras operadoras. Tudo isso por apenas R$ 39,90... gostou?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0005.wav</td>"+
					"<td class=\"colContent\">Tenho uma oferta especial para seu perfil de consumo ... você pode ficar tranquilo e se comunicar muito mais rápido .... Agora temos novos planos com benefícios melhores do que o do seu plano atual, como quatro vírgula cinco giga de internet por 6 meses, chamadas ilimitadas Oi e 100 minutos para outras operadoras, tudo isso por apenas R$ 39,90 ... gostou?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0006.wav</td>"+
					"<td class=\"colContent\">Qual o melhor período para eu retornar a ligação e falar com o responsável, pela manhã, a tarde ou noite?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0007.wav</td>"+
					"<td class=\"colContent\">Obrigado pela atenção, tchau.</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0008.wav</td>"+
					"<td class=\"colContent\">Ok, se mudar de idéia, depois liga pra gente no asterisco meia meia zero, tá? Obrigado, tchau!</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0009.wav</td>"+
					"<td class=\"colContent\">Ok, se mudar de idéia, depois liga pra gente no asterisco 660, tá? Obrigado, tchau!</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0010.wav</td>"+
					"<td class=\"colContent\">Vou te explicar melhor....com esse plano você terá dois vírgula cinco giga internet + bônus de 2 giga por 6 meses, ou seja, totalizando quatro vírgula cinco giga de internet 4G. Chamadas ilimitadas pra Oi e 100 minutos pra outras operadoras, SMS ilimitados pra Oi. Aplicativos, Oi Jornais, Oi Esportes e Oi Gastronomia. Tudo isso por apenas R$ 39,90, gostou?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0011.wav</td>"+
					"<td class=\"colContent\">Entendi, temos um outro plano mais adequado ao seu perfil. Esse plano tem um vírgula cinco giga de internet 4G + bônus de 1 giga por 6 meses, chamadas ilimitadas para Oi e 0,30 centavos por minuto para outras operadoras, SMS ilimitado para Oi, 2 milhões de pontos de Oi WiFi e acesso aos aplicativos Oi Jornais, Oi Gastronomia e Oi Esportes. Tudo isso por apenas R$ 34,90 gostou?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0012.wav</td>"+
					"<td class=\"colContent\">Tudo bem, tenho outro plano que tem 3 giga de internet 4G + bônus de 2 giga por 6 meses, chamadas ilimitadas para qualquer operadora do Brasil, SMS ilimitados para Oi, 2 milhões de pontos de Oi Wifi, e acesso aos aplicativos Oi Jornais, Oi Gastronomia e Oi Revistas. Tudo isso por apenas R$ 54,90 gostou?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0013.wav</td>"+
					"<td class=\"colContent\">Ótimo ... vou transferir para nosso especialista, ele vai te explicar todas as vantagens detalhadas do plano ... antes só preciso confirmar se esse pagamento pode ser feito diretamente no seu cartão de crédito, pode ser?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0014.wav</td>"+
					"<td class=\"colContent\">Tenho certeza que podemos oferecer planos mais adequados para você, quer saber mais?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0015.wav</td>"+
					"<td class=\"colContent\">Olha, eu só tenho esses planos. Mas o que você pode fazer é o seguinte: pensa melhor e depois liga pra gente no asterisco 6 6 0, tá? Obrigado, tchau!</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0016.wav</td>"+
					"<td class=\"colContent\">Olha, eu só tenho esses planos. Mas o que você pode fazer é o seguinte: pensa melhor e depois liga pra gente no asterisco 660, tá? Obrigado, tchau!</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0017.wav</td>"+
					"<td class=\"colContent\">Você costuma usar a internet do seu celular para acessar aplicativos como What's App e Facebook, não é mesmo?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0018.wav</td>"+
					"<td class=\"colContent\">Então, já que você gasta com recargas um valor mensal médio próximo a R$ 25,00 e gosta de usar a internet no seu celular, temos um plano ideal pra você. É o Controle Mais Básico, ele tem dois vírgula cinco giga de internet 4G e bônus de 1 Giga por 6 meses, além de chamadas ilimitadas para Oi e 100 minutos para outras operadoras, tudo isso por apenas R$ 39,90 mensais, sem precisar se preocupar mais com saldo ou recarga! E ai, gostou?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0019.wav</td>"+
					"<td class=\"colContent\">Então, já que você gasta com recargas um valor mensal médio próximo a R$ 25,00 e faz mais ligações para números da Oi, temos um plano ideal para você. É o Controle Mais Básico, ele tem dá chamadas ilimitadas pra Oi e 100 minutos para outras operadoras, além de dois vírgula cinco giga de internet e 1 giga de bônus por 6 meses. Tudo isso por apenas R$ 39,90 mensais, sem precisar se preocupar mais com saldo ou recarga! E aí, gostou?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0020.wav</td>"+
					"<td class=\"colContent\">Olha, eu só tenho esses planos. Mas o que você pode fazer é o seguinte: pensa melhor e depois liga pra gente no asterisco 660, tá? Obrigado, tchau!</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0021.wav</td>"+
					"<td class=\"colContent\">Então, já que você gasta com recargas um valor mensal médio próximo a R$ 25,00 e faz mais ligações para números da Oi, temos um plano ideal pra você. É o Controle Mais Básico, ele tem de chamadas ilimitadas pra Oi e 100 minutos pra outras operadoras, além de dois vírgula cinco giga de internet e 1 giga de bônus por 6 meses. Tudo isso por apenas R$ 39,90 mensais, sem precisar se preocupar mais com saldo ou recarga! E aí, gostou?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0022.wav</td>"+
					"<td class=\"colContent\">Então, já que você gasta com recargas um valor mensal médio próximo a R$ 25,00 e faz mais ligações para outras operadoras, temos um plano ideal para você. É o Controle Mais Básico, ele tem chamadas ilimitadas para Oi e 100 minutos pra outras operadoras, além de 2,5 giga de internet e 1 giga de bônus por 6 meses. Tudo isso por apenas R$ 39,90 mensais, sem precisar se preocupar mais com saldo ou recarga! E aí, gostou?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0023.wav</td>"+
					"<td class=\"colContent\">É bem rápido só mais um minuto....</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0024.wav</td>"+
					"<td class=\"colContent\">Qual o melhor período para eu retornar a ligação ... pela manhã, a tarde ou noite?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0025.wav</td>"+
					"<td class=\"colContent\">Ok, eu ligo novamente nesse período, não esqueça de pegar o cartão de crédito para agilizar nosso contato .... Obrigado, tchau!</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0026.wav</td>"+
					"<td class=\"colContent\">Não tem problema ... você pode fazer a alteração do plano com o cartão de crédito de alguém da sua casa, se você tiver essas informações podemos fazer agora ... pode ser?</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0027.wav</td>"+
					"<td class=\"colContent\">Entendo ... mas para você não perder essa oportunidade tenho a opção de pagamento no boleto também. É um boleto digital, enviado pelo celular. Nosso especialista de vendas vai te explicar melhor ...</td>"+
				"</tr>"+
				"<tr>"+
					"<td class=\"colPromptName\">0028.wav</td>"+
					"<td class=\"colContent\">aqui é o Léo, agente virtual da Oi. Só para você saber, essa ligação está sendo gravada.</td>"+
				"</tr>"+
				
				"</tbody>"+
			"</table>"
				)
			}

			function cleanAppFilters(){
				$("table").empty();
			}
}