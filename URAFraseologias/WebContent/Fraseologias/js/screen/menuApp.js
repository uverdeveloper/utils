
var isHomologacao = true;

$.getScript('../js/chooseEnvironment.js', function(){
	url = chooseEnvironment();	
});


function appsOptions(){
	
	$("#idTable").empty();
	$("#btnAppRegister").remove();

	$.ajax(
			{
				type : "GET",
				url : url+"/URAFraseologias/rest/menuApp/optionsLoad/",
				contentType : "application/json; charset=UTF-8",
				success : function(data) {
					menuAppsHead();
						$.each(data, function(index, value) {				
							$("#appsName").append(
												"<option value=\""+data[index].menuApp.appName+"\">"+data[index].menuApp.appName+"</option>"
												 )
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

function actionMenuApp(){

	var option = $("#actionMenuApp").val();
	
	if(option == "cadastrar"){
		newMenuAppRegister();
		
	} else if (option == "apagar") {
		deleteMenuAppRegister();
	}  else{
		alert('ESCOLHA UMA OPÇÃO VÁLIDA.')
	}
}

function menuAppsHead(){
	
	$("#btnAppsOptions").remove();
	$("#appMenu").append(
				"<div>"
					+"<select id=\"appsName\">"
					+"<option value=\"----\" disabled selected>-----</option>"
					+"</select>"
					+"<button onclick=\"promptDescriptionLoad(this)\">Exibir</button>"
				+"</div>"
	)
}

function newMenuAppRegister(){
	$("#mensagem").empty();
	$("#idTable").empty();
	$("#idTable").append(
						"<h1>Cadastrar aplicação:</h1>"
						+"<br />"
						+"<br />"
						+"<table id=\"idTableNewAppRegistrer\" border=\"2\">"
							+"<tbody>"
								+"<tr>"
									+"<td colspan=\"2\">Nome da aplicação</td>"
								+"</tr>"
								+"<tr>"
									+"<td>"
										+"<input id=\"appName\"></input>" 
									+"</td>"			
									+"<td>"
										+"<button id=\"btnAppRegister\" onclick=\"newApplicationRegister()\">Cadastrar</button>" 
									+"</td>"
									+"</tr>"
							+"</tbody>"
						+"</table>"
						)
					}

function deleteMenuAppRegister(){
	$("#mensagem").empty();
	$("#idTable").empty();
	$("#idTable").append(
						"<h1>Deletar aplicação:</h1>"
						+"<br />"
						+"<br />"
						+"<table id=\"idTableDeleteRegistrer\" border=\"2\">"
							+"<tbody>"
								+"<tr>"
									+"<td colspan=\"2\">Nome da aplicação</td>"
								+"</tr>"
								+"<tr>"
									+"<td>"
										+"<input id=\"appName\"></input>" 
									+"</td>"			
									+"<td>"
										+"<button id=\"btnAppDelete\" onclick=\"deleteApplicationRegister()\">Apagar</button>" 
									+"</td>"
								+"</tr>"
							+"</tbody>"
						+"</table>"
						)					
					}