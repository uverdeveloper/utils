package br.com.liq.uraapps.xml;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.JDOMException;
import org.jdom.input.SAXBuilder;

public class ReadXML {

	private File fileXml;
	
	public Document readerXML() {
		File file = new File("./phrases/phrase.xml");

		setFileXml(file);
		
		SAXBuilder sb = new SAXBuilder();
		Document document = null;
		
		try {
			document = sb.build(file);

			Element mural = document.getRootElement();

			List elements = mural.getChildren();
			Iterator i = elements.iterator();

			while (i.hasNext()) {
				Element element = (Element) i.next();
			}

		} catch (JDOMException j) {
			// TODO Auto-generated catch block
			j.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return document;
	}

	public File getFileXml() {
		return fileXml;
	}

	public void setFileXml(File fileXml) {
		this.fileXml = fileXml;
	}
	
	
}
