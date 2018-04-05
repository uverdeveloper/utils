/**
 * C.R.U.D with restful protocol
 */


function consultaPorAno() {
	
	var ano = $("#ano").val();
	
	$("#tabelaDeGastos").empty();

	$.ajax({
				type : "GET",
				url : "http://localhost:8083/sistemacontroledegastosweb/rest/sistemacontroledegastos/" + ano,
				contentType : "application/json; charset=UTF-8",
				success : function(data){
					tabela();
					$.each(data, function(index, value) {
						$("tbody").append(
									"<tr>" 
										+ "<td>" + data[index].id	+ "</td>" 
										+ "<td>" + data[index].aplicacao	+ "</td>" 
										+ "<td>" + parseFloat(data[index].valor).toFixed(2)	+ "</td>" 
										+ "<td>" + data[index].mes + "</td>" 
										+ "<td>" + data[index].ano + "</td>" 
										+ "<td>" + data[index].observacao + "</td>"
									+ "</tr>")
					})
				},
				error : function() {
					$("body").append(
						"<div id=\"noData\">"
						+ "<p>"
						+ "<label for=\"databaseEmpty\" id=\"mensagem\">Aplicação não encontrada.</label>"
						+ "</p>"
						+ "</div>")
				}
			});
}