function appsOptions(){
	
	$("#idTable").empty();	

		$.ajax({
					type : "GET",
					url : "http://localhost:8082/URAFraseologias/rest/menuApp/optionsLoad",
					contentType : "application/json; charset=UTF-8",
					success : function(data) {
						menuAppsHead();
						$.each(data, function(index, value) {
							
							$("#appsName").append(
										"<option value=\""+data[index].menuApp.appName+"\">"+data[index].menuApp.appName+"</option>"
											)
										})
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

function menuAppsHead(){
	$("#btnAppsOptions").remove();
	$("#appMenu").append(
				"<div>"
					+"<select id=\"appsName\">"
					+"</select>"
					+"<button onclick=\"promptDescriptionLoad()\">Exibir</button>"
				+"</div>"
	)
}