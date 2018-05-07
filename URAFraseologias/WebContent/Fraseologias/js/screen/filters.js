var idUpdate;
var trId = 1;

var tdProptNameLine = 1;
var tdPromptContentLine = 1;
var btnUpdateLine = 1;

$.getScript('../js/chooseEnvironment.js', function(){
	url = chooseEnvironment();	
});

function promptDescriptionLoad(){
	$("#mensagem").empty();	
	$("#idTable").empty();
	
	var option = $("#appsName").val();
	
	$.ajax(
			{
				type : "GET",
				url : url+"/URAFraseologias/rest/menu/optionsLoad/"+option,
				contentType : "application/json; charset=UTF-8",
				success : function(data) {
					tableHead();
										
						$.each(data, function(index, value) {
						
						  	
						idUpdate = data[index].phrases.idUpdate;
							
						$("tbody").append(
										"<tr id=\""+trId+"\" >"
											+ "<td class=\"colId\">" + data[index].phrases.idPromptName + "</td>"
											+ "<td id=\"colPromptName"+tdProptNameLine+"\" class=\"colPromptName\">" + data[index].phrases.promptName + "</td>"
											+ "<td id=\"colPromptContent"+tdPromptContentLine+"\" class=\"colPromptContent\">" + data[index].phrases.description + "</td>"
											+"<td class=\"colAction\"><button id=\"btnUpdate"+btnUpdateLine+"\" value=\""+trId+"\" onclick=\"updateScreen(this, idUpdate)\">Atualizar</button></td>"
										+ "</tr>"
										)
										trId += 1;
									tdProptNameLine += 1;
									tdPromptContentLine += 1;
									btnUpdateLine += 1;
									}
							  )	
						},
				error : function() {
					$("#mensagem").empty();
					$("body").append(
									"<div>"
										+ "<p>"
											+ "<label for=\"msg\" id=\"mensagem\">Internal error.</label>"
										+ "</p>"
									+ "</div>"
									)
								}
				}
			);
		}

function tableHead(){
	$("#idTable").empty();
	$("#mensagem").empty();
	$("#idTable").append(
			"<h1>Descrição dos prompts:</h1>"
			+"<br />"
			+"<br />"
			+"<table id=\"idTable\" border=\"2\">"
				+"<thead>"
					+"<tr>"
						+"<th class=\"colPromptTitle\">ID</th>"
						+"<th class=\"colPromptTitle\">NOME DE PROMPT</th>"
						+"<th class=\"colContentTitle\">CONTEUDO</th>"
						+"<th class=\"colContentTitle\">AÇÃO</th>"
					+"</tr>"
				+"</thead>"
			+"<tbody>"
			+"</tbody>"
		+"</table>"
		+"<button id=\"btnNewRegister\" onclick=\"promptNewRegsiter(idUpdate)\">Add +</button>"
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

function promptNewRegsiter(idUpdate){
	
	$("#mensagem").empty();
		
			$("tbody").append(
								"<tr>"
									+"<td>"
										+"<input id=\"positionPromptName\" value=\""+idUpdate+"\"></input>" 
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
							)
						idUpdate = parseInt(idUpdate) + 1;
			$("#btnNewRegister").remove();
					}

function updateScreen(trId, idUpdate){
		
	idUpdate = trId.value;
	
	$("#"+trId.value).remove();

	var addLine = parseInt(trId.value) - 1;
	var addItem = addLine.toString();
	
	
	
		$("#idTable tbody").append(
			"<tr id=\""+trId.value+"\">"
				+"<td>"
					+"<input id=\"positionPromptName" + trId.value +"\" value=\""+idUpdate+"\"></input>" 
				+"</td>"
				+"<td>"
					+"<input id=\"PromptName" + trId.value +"\" onkeyup=\"regexPromptName(this);\" type=\"text\"></input>" 
				+"</td>"	
				+"<td>"
					+"<input id=\"idDescription\" onkeyup=\"regexDescription(this);\" type=\"text\"></input>" 
				+"</td>"				
				+"<td>"
					+"<button id=\"btnUpdate\" onclick=\"update()\">Confirmar</button>" 
				+"</td>"
			+"</tr>"		
		)		
	}


function deleteScreen(){
	$("#mensagem").empty();
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
    var er = /[^A-Za-z.,!?"*{} ]/;
	er.lastIndex = 0;
	var campo = str;

	if (er.test(campo.value)) {
		campo.value = "";
	}
}
