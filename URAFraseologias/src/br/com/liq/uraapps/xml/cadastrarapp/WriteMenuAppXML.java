package br.com.liq.uraapps.xml.cadastrarapp;

import java.io.FileWriter;
import java.io.IOException;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.output.Format;
import org.jdom.output.XMLOutputter;

import br.com.liq.uraapps.bean.MenuApp;

public class WriteMenuAppXML {

	public WriteMenuAppXML(MenuApp menuAppParam) {
		
		ReadMenuAppXML readXML = new ReadMenuAppXML();

		readXML.readerXML();

		Document document = readXML.readerXML();

		Element rootElement = document.getRootElement();
		
		Element menuApp = new Element("menuApp");

		Element appName = new Element("appName");
		appName.setText(menuAppParam.getAppName());

		menuApp.addContent(appName);

		rootElement.addContent(menuApp);

		XMLOutputter xout = new XMLOutputter();
		xout.setFormat(Format.getPrettyFormat());

		try {
			xout.output(document, System.out);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		try {
			FileWriter archive = new FileWriter(readXML.getFileXml());
			xout.output(document, archive);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
