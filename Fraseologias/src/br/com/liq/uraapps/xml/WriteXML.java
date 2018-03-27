package br.com.liq.uraapps.xml;

import java.io.FileWriter;
import java.io.IOException;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.output.Format;
import org.jdom.output.XMLOutputter;

public class WriteXML {

	public WriteXML() {
		// TODO Auto-generated constructor stub

		ReadXML readXML = new ReadXML();

		readXML.readerXML();

		// Adicionando linha no arquivo

		Document document = readXML.readerXML();

		Element rootElement = document.getRootElement();

		Element phrases = new Element("phrases");

		Element promptName = new Element("promptName");
		promptName.setText("0019.wav");

		Element description = new Element("description");
		description.setText("Boa noite");

		phrases.addContent(promptName);
		phrases.addContent(description);

		rootElement.addContent(phrases);

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
