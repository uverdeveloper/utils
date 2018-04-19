package br.com.liq.uraapps.xml;

import java.io.FileWriter;
import java.io.IOException;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.output.Format;
import org.jdom.output.XMLOutputter;

import br.com.liq.uraapps.bean.Phrases;

public class WriteXML {

	public WriteXML(Phrases phrasesParam, String appName) {
		
		ReadXML readXML = new ReadXML(appName);

		readXML.readerXML();

		Document document = readXML.readerXML();

		Element rootElement = document.getRootElement();
		
		Element phrases = new Element("phrases");

		Element promptName = new Element("promptName").setAttribute("id", phrasesParam.getIdPromptName());
		promptName.setText(phrasesParam.getPromptName());

		Element description = new Element("description");
		description.setText(phrasesParam.getDescription());

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
			//Print no console
			xout.output(document, archive);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
