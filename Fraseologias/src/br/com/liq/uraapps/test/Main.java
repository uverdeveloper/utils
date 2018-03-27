package br.com.liq.uraapps.test;

import java.io.File;
import java.io.IOException;
import java.io.StringWriter;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.jdom.Element;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;

import br.com.liq.uraapps.xml.ReadXML;

public class Main {

	public static void main(String[] args) throws SAXException, IOException {

		String promptTag = "0003.wav";
		ReadXML readXML = new ReadXML();

		readXML.readerXML();
		
		File xml = readXML.getFileXml();

		DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();

		DocumentBuilder docBuilder = null;

		Document document = null;
		try {
			docBuilder = docFactory.newDocumentBuilder();
			document = docBuilder.parse(xml);
		} catch (ParserConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		Node promptName = document.getElementsByTagName("promptName").item(0);
		Node description = document.getElementsByTagName("description").item(0);
		
		Node parentPromptName = (Node) promptName.getParentNode();
		parentPromptName.removeChild(promptName);
		parentPromptName.normalize();
		
		Node parentDescription = (Node) description.getParentNode();
		parentDescription.removeChild(description);
		parentDescription.normalize();
		
		TransformerFactory transformerFactory = TransformerFactory.newInstance();
		Transformer transformer = null;
		try {
			transformer = transformerFactory.newTransformer();
		} catch (TransformerConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DOMSource source = new DOMSource(document);
		StreamResult result = new StreamResult(new File(xml.toString()));
		try {
			transformer.transform(source, result);
			System.out.println("Tag apagada.");
		} catch (TransformerException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
