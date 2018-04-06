/**
 * 
 */
function register(){
	
	var option = $("#apps").val();
	
	if (option == "avi") {	
	
	var data = {
			"idPromptName" : $("#positionPromptName").val(),
			"promptName" : $("#idPromptName").val(),
			"description" : $("#idDescription").val(),
			};
	
			json = JSON.stringify(data);
	
					$.ajax({
							type : "POST",
							url : "http://localhost:8082/URAFraseologias/rest/menu/",
							dataType : "text",
							contentType : "application/json; charset=utf-8",
							data : json,
							success : function(result) {								
								alert('Prompt cadastrado com sucesso.')
								},
							error : function(erro) {
								$("body").append(
										"<div>"
										+ "<p>"
										+ "<label for=\"databaseEmpty\" id=\"mensagem\">Prompt não cadastrado.</label>"
										+ "</p>"
										+ "</div>")
								}
							});
	}
}

function update(){
	
	var option = $("#apps").val();
	
	if (option == "avi") {	
	
	var data = {
			"idPromptName" : $("#positionPromptName").val(), 
			"promptName" : $("#idPromptName").val(),
			"description" : $("#idDescription").val(),
			};
	
			json = JSON.stringify(data);
	
					$.ajax({
							type : "PUT",
							url : "http://localhost:8082/URAFraseologias/rest/menu/",
							dataType : "text",
							contentType : "application/json; charset=utf-8",
							data : json,
							success : function(result) {								
								alert('Prompt atualizado com sucesso.')
								},
							error : function(erro) {
								$("body").append(
										"<div>"
										+ "<p>"
										+ "<label for=\"databaseEmpty\" id=\"mensagem\">Prompt não atualizado.</label>"
										+ "</p>"
										+ "</div>")
								}
							});
	}
}



	
