package br.com.liq.uraapps.xml;

import java.io.File;
import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;

import br.com.liq.uraapps.bean.Phrases;

public class UpdateXML {

	public UpdateXML(Phrases phrasesParam, int item, String appName) {

		ReadXML readXML = new ReadXML(appName);

		readXML.readerXML();

		File xml = readXML.getFileXml();

		DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
		try {
			DocumentBuilder docBuilder = docFactory.newDocumentBuilder();
			try {
				Document doc = docBuilder.parse(xml);

				/*if(item == 0){
					item += 1;
				}*/
				
				Node promptName = doc.getElementsByTagName("promptName").item(item);
				Node description = doc.getElementsByTagName("description").item(item);

				promptName.setTextContent(phrasesParam.getPromptName());
				description.setTextContent(phrasesParam.getDescription());

				TransformerFactory transformerFactory = TransformerFactory.newInstance();
				Transformer transformer = transformerFactory.newTransformer();
				DOMSource source = new DOMSource(doc);
				StreamResult result = new StreamResult(new File(xml.toString()));
				transformer.transform(source, result);

			} catch (SAXException | IOException | TransformerException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} catch (ParserConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
