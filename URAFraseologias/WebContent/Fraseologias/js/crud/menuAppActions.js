/**
 * 
 */
function newApplicationRegister(){
	
	var data = {
			"appName" : $("#appName").val(),
			};
	
			json = JSON.stringify(data);
			
			$.ajax({
				type : "POST",
				url : "http://localhost:8082/URAFraseologias/rest/menuApp/",
				dataType : "text",
				contentType : "application/json; charset=utf-8",
				data : json,
				success : function(result) {								
					alert('Aplicação cadastrada com sucesso.')
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

function deleteApplicationRegister(){
	
	var data = {
			"appName" : $("#appName").val(),
			};
	
			json = JSON.stringify(data);
			
			$.ajax({
				type : "DELETE",
				url : "http://localhost:8082/URAFraseologias/rest/menuApp/",
				dataType : "text",
				contentType : "application/json; charset=utf-8",
				data : json,
				success : function(result) {								
					alert('Aplicação apagada com sucesso.')
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