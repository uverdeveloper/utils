/**
 *  Habilita ou desabilita ambiente
 */
function chooseEnvironment() {

	var isHomologacao = true;

	var url = "http://10.200.14.202:8080";

	if (!isHomologacao) {
		url = "http://localhost:8082";
	}

	return url;

}