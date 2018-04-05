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
							
							$("tbody").append(
											"<tr>"
												+ "<td>" + data[index].phrases.promptName + "</td>"
												+ "<td>" + data[index].phrases.description + "</td>" 
											+ "</tr>")
						})
					},
					error : function() {
						/*$("body").append(
								"<div id=\"noData\">"
										+ "<p>"
										+ "<label for=\"databaseEmpty\" id=\"mensagem\">Cadastre uma aplicação.</label>"
										+ "</p>"
										+ "</div>")*/
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
						+"<th class=\"colPromptTitle\">NOME DE PROMPT</th>"
						+"<th class=\"colContentTitle\">CONTEUDO</th>"
					+"</tr>"
				+"</thead>"
			+"<tbody>"
			+"</tbody>"
		+"</table>"
	)
}