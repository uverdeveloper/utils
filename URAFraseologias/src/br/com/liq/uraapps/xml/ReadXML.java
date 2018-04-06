package br.com.liq.uraapps.xml;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.jdom.Document;
import org.jdom.JDOMException;
import org.jdom.input.SAXBuilder;
import org.jdom.output.Format;
import org.jdom.output.XMLOutputter;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;

import br.com.liq.uraapps.bean.Phrases;
import br.com.liq.uraapps.bean.Phrases_Control;

public class ReadXML {

	private File fileXml;
	private String xmlContent;
	private String pathXmlFile = "C:/wildfly-10.1.0.Final/welcome-content/phrases/phrase.xml";
	private List<Phrases_Control> listPhrases_Control;

	public Document readerXML() {		
		
		File file = new File(this.pathXmlFile);

		setFileXml(file);

		SAXBuilder sb = new SAXBuilder();
		Document document = null;

		try {
			document = sb.build(file);

			XMLOutputter outputter = new XMLOutputter(Format.getPrettyFormat());
			String xmlString = outputter.outputString(document);

			setXmlContent(xmlString);

		} catch (JDOMException j) {
			// TODO Auto-generated catch block
			j.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return document;
	}

	public String getPathXmlFile() {
		return this.pathXmlFile;
	}

	public File getFileXml() {
		return fileXml;
	}

	public void setFileXml(File fileXml) {
		this.fileXml = fileXml;
	}

	public String getXmlContent() {
		return xmlContent;
	}

	public void setXmlContent(String xmlContent) {
		this.xmlContent = xmlContent;
	}

	public List<Phrases_Control> getListPhrases_Control() {
		
		this.readerXML();
		
		DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();
	    DocumentBuilder docBuilder = null;
		try {
			docBuilder = docBuilderFactory.newDocumentBuilder();
		} catch (ParserConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    org.w3c.dom.Document document = null;
		try {
			document = docBuilder.parse(getFileXml());
		} catch (SAXException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    	    
	    List<Phrases_Control> listBean = new ArrayList<Phrases_Control>();
	    
	    int documentSize = ((org.w3c.dom.Document) document).getElementsByTagName("promptName").getLength();
	    
	    for(int i = 0; i < documentSize; i++){
	    Node promptName= ((org.w3c.dom.Document) document).getElementsByTagName("promptName").item(i);
	    Element idPromptName = (Element) document.getElementsByTagName("promptName").item(i);
	    Node description= ((org.w3c.dom.Document) document).getElementsByTagName("description").item(i);
	    Element idDescription = (Element) document.getElementsByTagName("description").item(i);
	    
	    Phrases_Control phrases_Control = new Phrases_Control();
	    Phrases phrases = new Phrases();
	    
	    
	    phrases.setPromptName(promptName.getTextContent());
	    phrases.setIdPromptName(idPromptName.getAttribute("id"));
	    phrases.setDescription(description.getTextContent());
	    phrases.setIdDescription(idDescription.getAttribute("id"));	    
	   
	    phrases.setIdUpdate(String.valueOf(documentSize + 1));
	    
	    phrases_Control.setPhrases(phrases);
	    
	    listBean.add(phrases_Control);
	    }
	    
	    listPhrases_Control = listBean;
	    
		return listPhrases_Control;
	}
	
	

}