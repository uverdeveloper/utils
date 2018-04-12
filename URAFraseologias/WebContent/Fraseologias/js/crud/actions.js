/**
 * 
 */

function newApplicationRegister(){
	
	var appName = $("#appName").val();
	
			$.ajax({
				type : "POST",
				url : "http://localhost:8082/URAFraseologias/rest/menu/optionsLoad/newApplicationRegister/"+appName,
				contentType : "application/json; charset=UTF-8",
				success : function() {
					alert('Aplicação cadastrada!!!');
				},
					
				error : function() {
					$("body").append(
							"<div>"
								+ "<p>"
								+ "<label for=\"msg\" id=\"mensagem\">Internal error.</label>"
								+ "</p>"
								+ "</div>")
								}
				});
			}

function register(){
	
	var data = {
			"appName" : $("#apps").val(),
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
										+ "<label for=\"msg\" id=\"mensagem\">Prompt não cadastrado.</label>"
										+ "</p>"
										+ "</div>")
								}
							});
						}

function update(){
	
	var option = $("#apps").val();
	
	var data = {
			"appName" : $("#apps").val(),
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
										+ "<label for=\"msg\" id=\"mensagem\">Prompt não atualizado.</label>"
										+ "</p>"
										+ "</div>")
								}
							});
						}

function deletePrompt(){
	
	var option = $("#apps").val();	
	
	var data = {
			"appName" : $("#apps").val(),
			"idPromptName" : $("#positionPromptName").val(),
			};
	
			json = JSON.stringify(data);
	
					$.ajax({
							type : "DELETE",
							url : "http://localhost:8082/URAFraseologias/rest/menu/",
							dataType : "text",
							contentType : "application/json; charset=utf-8",
							data : json,
							success : function(result) {								
								alert('Prompt deletado com sucesso.')
								},
							error : function(erro) {
								$("body").append(
										"<div>"
										+ "<p>"
										+ "<label for=\"msg\" id=\"mensagem\">Prompt não atualizado.</label>"
										+ "</p>"
										+ "</div>")
								}
							});
						}


	
