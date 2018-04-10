package br.com.liq.uraapps.xml.cadastrarapp;

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
import org.w3c.dom.Node;
import org.xml.sax.SAXException;

import br.com.liq.uraapps.bean.MenuApp;
import br.com.liq.uraapps.bean.MenuApp_Control;

public class ReadMenuAppXML {

	private File fileXml;
	private String xmlContent;
	private String pathXmlFile = "C:/wildfly-10.1.0.Final/welcome-content/menu/apps.xml";
	private List<MenuApp_Control> listMenuApp_Control;

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

	public List<MenuApp_Control> getListMenuApp_Control() {
		
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
	    	    
	    List<MenuApp_Control> listBean = new ArrayList<MenuApp_Control>();
	    
	    int documentSize = ((org.w3c.dom.Document) document).getElementsByTagName("appName").getLength();
	    
	    for(int i = 0; i < documentSize; i++){
	    Node promptName= ((org.w3c.dom.Document) document).getElementsByTagName("appName").item(i);
	    
	    MenuApp_Control menuApp_Control = new MenuApp_Control();
	    MenuApp menuApp = new MenuApp();
	     
	    menuApp.setAppName(promptName.getTextContent());    
	  
	    menuApp_Control.setMenuApp(menuApp);
	    
	    listBean.add(menuApp_Control);
	    }
	    
	    listMenuApp_Control = listBean;
	    
		return listMenuApp_Control;
	}
	
	

}
