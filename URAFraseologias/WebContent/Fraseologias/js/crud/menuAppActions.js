
$.getScript('../js/chooseEnvironment.js', function(){
	url = chooseEnvironment();	
});

function newApplicationRegister(){
	
	$("#mensagem").empty();
	
	var data = {
				"appName" : $("#appName").val(),
				};
	
	json = JSON.stringify(data);
			
	$.ajax(
			{
				type : "POST",
				url : url+"/URAFraseologias/rest/menuApp/",
				dataType : "text",
				contentType : "application/json; charset=utf-8",
				data : json,
				success : function(result) {
					location.reload();					
				},
				error : function() {
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

function deleteApplicationRegister(){
	
	$("#mensagem").empty();
	
	var data = {
				"appName" : $("#appName").val(),
				};
	
	json = JSON.stringify(data);
			
	$.ajax(
			{
				type : "DELETE",
				url : url+"/URAFraseologias/rest/menuApp/",
				dataType : "text",
				contentType : "application/json; charset=utf-8",
				data : json,
				success : function(result) {
					location.reload();
				},
				error : function() {		
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