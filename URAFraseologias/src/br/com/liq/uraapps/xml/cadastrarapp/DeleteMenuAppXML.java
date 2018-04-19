package br.com.liq.uraapps.xml.cadastrarapp;

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
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;

import br.com.liq.uraapps.bean.MenuApp;

public class DeleteMenuAppXML {

	boolean updateFile = false;
	
	public DeleteMenuAppXML(MenuApp MenuAppParam) {
		// TODO Auto-generated constructor stub

		ReadMenuAppXML readXML = new ReadMenuAppXML();

		readXML.readerXML();

		File xml = readXML.getFileXml();

		DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
		try {
			DocumentBuilder docBuilder = docFactory.newDocumentBuilder();
			try {
				Document doc = docBuilder.parse(xml);
								
				int documentSize = ((org.w3c.dom.Document) doc).getElementsByTagName("menuApp").getLength();
								
				for (int i = 0; i < documentSize; i++) {
				
					Element menuApp = (Element) doc.getElementsByTagName("menuApp").item(i);
					
					if (menuApp != null && MenuAppParam.getAppName().equals(menuApp.getTextContent().trim())) {
						Node parent = menuApp.getParentNode();
						parent.removeChild(menuApp);
						parent.normalize();
						updateFile = true;
					}
				}
				
				if (updateFile) {
					TransformerFactory transformerFactory = TransformerFactory.newInstance();
					Transformer transformer = transformerFactory.newTransformer();
					DOMSource source = new DOMSource(doc);
					StreamResult result = new StreamResult(new File(xml.toString()));
					transformer.transform(source, result);
				}
				
				DeleteXML deleteXML = new DeleteXML(MenuAppParam);

			} catch (SAXException | IOException | TransformerException e) {
				e.printStackTrace();
			}
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		}
	}
}
