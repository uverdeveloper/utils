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

public class UpdateXML {

	public UpdateXML() {

		ReadXML readXML = new ReadXML();

		readXML.readerXML();

		File xml = readXML.getFileXml();

		DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
		try {
			DocumentBuilder docBuilder = docFactory.newDocumentBuilder();
			try {
				Document doc = docBuilder.parse(xml);

				Node promptName = doc.getElementsByTagName("promptName").item(0);
				Node description = doc.getElementsByTagName("description").item(0);

				promptName.setTextContent("0003.wav");
				description.setTextContent("Uver bonitão");

				TransformerFactory transformerFactory = TransformerFactory.newInstance();
				Transformer transformer = transformerFactory.newTransformer();
				DOMSource source = new DOMSource(doc);
				StreamResult result = new StreamResult(new File(xml.toString()));
				transformer.transform(source, result);

				System.out.println("Tag atualizada");

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
