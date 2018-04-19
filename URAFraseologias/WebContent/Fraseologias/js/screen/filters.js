var idUpdate;
var isHomologacao = false;

var url = "http://10.200.14.202:8080";

if (!isHomologacao) {
	url = "http://localhost:8082";
}


function promptDescriptionLoad(){
		
	$("#idTable").empty();
	
	var option = $("#appsName").val();
	
		$.ajax({
					type : "GET",
					url : url+"/URAFraseologias/rest/menu/optionsLoad/"+option,
					contentType : "application/json; charset=UTF-8",
					success : function(data) {
						tableHead();
						$.each(data, function(index, value) {
							
							idUpdate = data[index].phrases.idUpdate;
							
							$("tbody").append(
											"<tr>"
												+ "<td>" + data[index].phrases.idPromptName + "</td>"
												+ "<td class=\"colPromptName\">" + data[index].phrases.promptName + "</td>"
												+ "<td class=\"colPromptContent\">" + data[index].phrases.description + "</td>"
											+ "</tr>")
						})
					},
					error : function() {
						$("#mensagem").empty();
						$("body").append(
								"<div>"
										+ "<p>"
										+ "<label for=\"msg\" id=\"mensagem\">Internal error.</label>"
										+ "</p>"
										+ "</div>")
					}
				});
}

function tableHead(){
	$("#idTable").empty();
	$("#idTable").append(
			"<h1>Descrição dos prompts da aplicação:</h1>"
			+"<br />"
			+"<br />"
			+"<table id=\"idTable\" border=\"2\">"
				+"<thead>"
					+"<tr>"
						+"<th class=\"colPromptTitle\">ID</th>"
						+"<th class=\"colPromptTitle\">NOME DE PROMPT</th>"
						+"<th class=\"colContentTitle\" colspan=\"2\">CONTEUDO</th>"
					+"</tr>"
				+"</thead>"
			+"<tbody>"
			+"</tbody>"
		+"</table>"
	)
}

function actionMenuLoad(){
	
	var option = $("#actionMenu").val();
	
	if(option == "cadastrar"){
		newApplicationRegister();
	} else if (option == "inserir") {
		promptNewRegsiter();
	} else if(option == "atualizar"){
		updateScreen();
	} else if(option == "deletar"){
		deleteScreen();
	} else{
		alert('ESCOLHA UMA OPÇÃO VÁLIDA.')
	}	
}

function promptNewRegsiter(){
	$("#idTable").empty();
	$("#idTable").append(
			"<h1>Cadastrar novo prompt:</h1>"
			+"<br />"
			+"<br />"
			+"<table id=\"idTableRegistrer\" border=\"2\">"
				+"<thead>"
					+"<tr>"
						+"<th class=\"colPromptTitle\">ID</th>"
						+"<th class=\"colPromptTitle\">NOME DE PROMPT</th>"
						+"<th class=\"colContentTitle\" colspan=\"2\">CONTEUDO</th>"
					+"</tr>"
				+"</thead>"
				+"<tbody>"
					+"<tr>"
						+"<td>"
							+"<input id=\"positionPromptName\" onkeyup=\"regexId(this);\"></input>" 
						+"</td>"
						+"<td>"
							+"<input id=\"idPromptName\" onkeyup=\"regexPromptName(this);\" type=\"text\"></input>" 
						+"</td>"	
						+"<td>"
							+"<input id=\"idDescription\" onkeyup=\"regexDescription(this);\" type=\"text\"></input>" 
					+"</td>"				
						+"<td>"
							+"<button id=\"btnRegister\" onclick=\"register()\">Inserir</button>" 
						+"</td>"
					+"</tr>"
				+"</tbody>"
			+"</table>"
		)
	
}

function updateScreen(){
	
	$("#idTable").empty();
	$("#idTableRegistrer").empty();
	
	$("#idTable").append(
		"<h1>Atualização dos prompts:</h1>"
		+"<br />"
		+"<br />"
		+"<table id=\"idTableUpdate\" border=\"2\">"
		 +"<thead>"
			+"<tr>"
				+"<th class=\"colPromptTitle\">ID</th>"
				+"<th class=\"colPromptTitle\">NOME DE PROMPT</th>"
				+"<th class=\"colContentTitle\" colspan=\"2\">CONTEUDO</th>"
			+"</tr>"
		+"</thead>"
		+"<tbody>"
			+"<tr>"
				+"<td>"
					+"<input id=\"positionPromptName\" onkeyup=\"regexId(this);\"></input>" 
				+"</td>"
				+"<td>"
					+"<input id=\"idPromptName\" onkeyup=\"regexPromptName(this);\" type=\"text\"></input>" 
				+"</td>"	
				+"<td>"
					+"<input id=\"idDescription\" onkeyup=\"regexDescription(this);\" type=\"text\"></input>" 
				+"</td>"				
				+"<td>"
					+"<button id=\"btnUpdate\" onclick=\"update()\">Confirmar</button>" 
					+"</td>"
				+"</tr>"
			+"</tbody>"
		+"</table>"
	)
}

function deleteScreen(){
	
	$("#idTable").empty();
	$("#idTableRegistrer").empty();
	$("#idTableUpdate").empty();
	
	$("#idTable").append(
		"<h1>Exclusão da descrição dos prompts:</h1>"
		+"<br />"
		+"<br />"
	    +"<table id=\"idTableDelete\" border=\"2\">"
		+"<thead>"
			+"<tr>"
				+"<th class=\"colPromptTitle\" colspan=\"2\">ID</th>"
			+"</tr>"
		+"</thead>"
		+"<tbody>"
			+"<tr>"
				+"<td>"
					+"<input id=\"positionPromptName\" onkeyup=\"regexId(this);\"></input>" 
				+"</td>"				
				+"<td>"
					+"<button id=\"btnDelete\" onclick=\"deletePrompt()\">Confirmar</button>" 
				+"</td>"
			+"</tr>"
		+"</tbody>"
		+"</table>"
	)
}

function regexId(num) {
	var er = /[^0-9 ]/;
	er.lastIndex = 0;
	var campo = num;

	if (er.test(campo.value)) {
		campo.value = "";
	}
}

function regexPromptName(str) {
    var er = /[^0-9.a-z]/;
	er.lastIndex = 0;
	var campo = str;

	if (er.test(campo.value)) {
		campo.value = "";
	}
}

function regexDescription(str) {
    var er = /[^A-Za-z.,!?"* ]/;
	er.lastIndex = 0;
	var campo = str;

	if (er.test(campo.value)) {
		campo.value = "";
	}
}
