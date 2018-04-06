var idUpdate;

function init() {
		
	var option = $("#apps").val();
	
	$("#idTable").empty();

	if (option == "avi") {		

		$.ajax({
					type : "GET",
					url : "http://localhost:8082/URAFraseologias/rest/menu/optionsLoad/",
					contentType : "application/json; charset=UTF-8",
					success : function(data) {
						tableHead();
						$.each(data, function(index, value) {
							
							idUpdate = data[index].phrases.idUpdate;
							
							$("tbody").append(
											"<tr>"
												+ "<td>" + data[index].phrases.idPromptName + "</td>"
												+ "<td>" + data[index].phrases.promptName + "</td>"
												+ "<td>" + data[index].phrases.description + "</td>" 
												+ "<td><button id=\"btnUpdate\" onclick=\"updateScreen()\">Atualizar</button>"
												+ "<td><button id=\"btnDelete\" onclick=\"deleteScreen()\">Apagar</button>"
											+ "</tr>")
						})
					},
					error : function() {
						$("body").append(
								"<div>"
										+ "<p>"
										+ "<label for=\"databaseEmpty\" id=\"mensagem\">Internal error.</label>"
										+ "</p>"
										+ "</div>")
					}
				});

	}
}

function tableHead(){
	$("#idTable").empty();
	$("#idTable").append(
			"<table id=\"idTable\" border=\"2\">"
				+"<thead>"
					+"<tr>"
						+"<th class=\"colPromptTitle\">ID</th>"
						+"<th class=\"colPromptTitle\">NOME DE PROMPT</th>"
						+"<th class=\"colContentTitle\">CONTEUDO</th>"
						+"<th class=\"colContentTitle\" colspan=\"2\">AÇÕES</th>"
					+"</tr>"
				+"</thead>"
			+"<tbody>"
			+"</tbody>"
		+"</table>"
	)
}

function promptNewRegsiter(){
	$("#idTable").empty();
	$("#idTable").append(
			"<table id=\"idTableRegistrer\" border=\"2\">"
				+"<thead>"
					+"<tr>"
						+"<th class=\"colPromptTitle\">ID</th>"
						+"<th class=\"colPromptTitle\">NOME DE PROMPT</th>"
						+"<th class=\"colContentTitle\">CONTEUDO</th>"
						+"<th class=\"colContentTitle\" colspan=\"2\">AÇÕES</th>"
					+"</tr>"
				+"</thead>"
				+"<tbody>"
					+"<tr>"
						+"<td>"
							+"<input id=\"positionPromptName\" type=\"text\"></input>" 
						+"</td>"
						+"<td>"
							+"<input id=\"idPromptName\" type=\"text\"></input>" 
						+"</td>"	
						+"<td>"
							+"<input id=\"idDescription\"type=\"text\"></input>" 
					+"</td>"				
						+"<td>"
							+"<button id=\"btnCadastrarNovo\" onclick=\"register()\">Inserir</button>" 
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
	   "<table id=\"idTableUpdate\" border=\"2\">"
		+"<thead>"
			+"<tr>"
				+"<th class=\"colPromptTitle\">ID</th>"
				+"<th class=\"colPromptTitle\">NOME DE PROMPT</th>"
				+"<th class=\"colContentTitle\">CONTEUDO</th>"
				+"<th class=\"colContentTitle\" colspan=\"2\">AÇÕES</th>"
			+"</tr>"
		+"</thead>"
		+"<tbody>"
			+"<tr>"
				+"<td>"
					+"<input id=\"positionPromptName\" type=\"text\"></input>" 
				+"</td>"
				+"<td>"
					+"<input id=\"idPromptName\" type=\"text\"></input>" 
				+"</td>"	
				+"<td>"
					+"<input id=\"idDescription\"type=\"text\"></input>" 
				+"</td>"				
				+"<td>"
					+"<button id=\"btnCadastrarNovo\" onclick=\"update()\">Confirmar</button>" 
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
	   "<table id=\"idTableDelete\" border=\"2\">"
		+"<thead>"
			+"<tr>"
				+"<th class=\"colPromptTitle\">ID</th>"
				+"<th class=\"colContentTitle\" colspan=\"2\">AÇÕES</th>"
			+"</tr>"
		+"</thead>"
		+"<tbody>"
			+"<tr>"
				+"<td>"
					+"<input id=\"positionPromptName\" type=\"text\"></input>" 
				+"</td>"				
				+"<td>"
					+"<button id=\"btnCadastrarNovo\" onclick=\"deletePrompt()\">Confirmar</button>" 
					+"</td>"
				+"</tr>"
			+"</tbody>"
		+"</table>"
	)
}