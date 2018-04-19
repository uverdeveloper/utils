/**
 * 
 */
var isHomologacao = false;
var url = "http://10.200.14.202:8080";

if (!isHomologacao) {
	url = "http://localhost:8082";
}
function newApplicationRegister(){
	
	$("#mensagem").empty();
	
	var appName = $("#appsName").val();
	
			$.ajax({
				type : "POST",
				url : url+"/URAFraseologias/rest/menu/optionsLoad/newApplicationRegister/"+appName,
				contentType : "application/json; charset=UTF-8",
				success : function() {
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

function register(){
	
	$("#mensagem").empty();
	
	var appName;
	/*var appRegsiter = $("#appsName").val();
	
	if(appRegsiter === undefined){*/
		appName = $("#appsName").val();
	//}
	
	var data = {
			"appName" : appName,
			"idPromptName" : $("#positionPromptName").val(),
			"promptName" : $("#idPromptName").val(),
			"description" : $("#idDescription").val(),
			};
	
			json = JSON.stringify(data);
	
					$.ajax({
							type : "POST",
							url : url+"/URAFraseologias/rest/menu/",
							dataType : "text",
							contentType : "application/json; charset=utf-8",
							data : json,
							success : function(result) {								
								location.reload();
								},
							error : function(erro) {
								$("#mensagem").empty();
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
	
	$("#mensagem").empty();
	
	var option = $("#appsName").val();
	
	var data = {
			"appName" : $("#appsName").val(),
			"idPromptName" : $("#positionPromptName").val(), 
			"promptName" : $("#idPromptName").val(),
			"description" : $("#idDescription").val(),
			};
	
			json = JSON.stringify(data);
	
					$.ajax({
							type : "PUT",
							url : url+"/URAFraseologias/rest/menu/",
							dataType : "text",
							contentType : "application/json; charset=utf-8",
							data : json,
							success : function(result) {								
								},
							error : function(erro) {
								$("#mensagem").empty();
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
	
	$("#mensagem").empty();	
	
	var data = {
			"appName" : $("#appsName").val(),
			"idPromptName" : $("#positionPromptName").val(),
			};
	
			json = JSON.stringify(data);
	
					$.ajax({
							type : "DELETE",
							url : url+"/URAFraseologias/rest/menu/",
							dataType : "text",
							contentType : "application/json; charset=utf-8",
							data : json,
							success : function(result) {
								//window.location.href = url+"/URAFraseologias/Fraseologias/html/Menu.html";
								},
							error : function(erro) {
								$("#mensagem").empty();
								$("body").append(
										"<div>"
										+ "<p>"
										+ "<label for=\"msg\" id=\"mensagem\">Prompt não apagado.</label>"
										+ "</p>"
										+ "</div>")
								}
							});
						}


	
