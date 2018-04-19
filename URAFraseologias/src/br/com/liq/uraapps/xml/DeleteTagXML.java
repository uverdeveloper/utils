package br.com.liq.uraapps.xml;

import java.io.File;
import java.io.IOException;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import br.com.liq.uraapps.bean.Phrases;

public class DeleteTagXML {

	public DeleteTagXML(Phrases phrasesParam, int item, String appName){
		// TODO Auto-generated constructor stub

		ReadXML readXML = new ReadXML(appName);

		readXML.readerXML();

		DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
		
		try {
			DocumentBuilder docBuilder = docFactory.newDocumentBuilder();
			Document doc = docBuilder.parse(readXML.getFileXml());
			
			/*if(item == 0){
				item += 1;
			}*/
			
			Node phrase = doc.getElementsByTagName("phrases").item(item);
			
			phrase.getParentNode().removeChild(phrase);
			// DELETA NÓS FILHOS
			/*NodeList list = phrase.getChildNodes();
			
			for (int i = 0; i < list.getLength(); i++) {

				Node node = list.item(i);

				if ("promptName".equals(node.getNodeName()) || "description".equals(node.getNodeName())) {
					phrase.removeChild(node);
				}				
			}*/
			
			TransformerFactory transformerFactory = TransformerFactory.newInstance();
			Transformer transformer = null;
			
			transformer = transformerFactory.newTransformer();
			
			DOMSource source = new DOMSource(doc);
			StreamResult result = new StreamResult(new File(readXML.getFileXml().toString()));
			transformer.transform(source, result);
			
		} catch (SAXException | ParserConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TransformerException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		/*File xml = readXML.getFileXml();

		DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
		
		try {
			DocumentBuilder docBuilder = docFactory.newDocumentBuilder();
			
			try {
				Document doc = docBuilder.parse(xml);
				
				Element promptName = (Element) doc.getElementsByTagName("promptName").item(item);
				
				Node parent = promptName.getParentNode();
				parent.removeChild(promptName);
				doc.normalize();
				
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
		}*/
	}
}
