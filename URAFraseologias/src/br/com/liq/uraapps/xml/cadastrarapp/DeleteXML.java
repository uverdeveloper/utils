package br.com.liq.uraapps.xml.cadastrarapp;

import java.io.File;

import br.com.liq.uraapps.bean.MenuApp;

public class DeleteXML {

	private String pathXmlFile = "/opt/wildfly-10.1.0.Final/welcome-content/urafraseologias/phrases/";

	public DeleteXML(MenuApp menuApp) {

		File fileXml = new File(pathXmlFile + menuApp.getAppName() + ".xml");

		if (fileXml.exists()) {
			fileXml.delete();

		}
	}

}
