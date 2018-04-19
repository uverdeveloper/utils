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
	
	alert($("#appName").val());
	
	var data = {
			"appName" : $("#appName").val(),
			};
	
			json = JSON.stringify(data);
			
			$.ajax({
				type : "POST",
				url : url+"/URAFraseologias/rest/menuApp/",
				dataType : "text",
				contentType : "application/json; charset=utf-8",
				data : json,
				success : function(result) {
					promptNewRegsiter();
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

function deleteApplicationRegister(){
	
	$("#mensagem").empty();
	
	var data = {
			"appName" : $("#appName").val(),
			};
	
			json = JSON.stringify(data);
			
			$.ajax({
				type : "DELETE",
				url : url+"/URAFraseologias/rest/menuApp/",
				dataType : "text",
				contentType : "application/json; charset=utf-8",
				data : json,
				success : function(result) {
					location.reload();
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