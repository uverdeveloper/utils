package br.com.liq.uraapps.test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;

import br.com.liq.uraapps.bean.Phrases;
import br.com.liq.uraapps.bean.Phrases_Control;
import br.com.liq.uraapps.xml.ReadXML;

public class Main {

	public static void main(String[] args) throws SAXException, IOException, ParserConfigurationException {

		ReadXML xml = new ReadXML();

		xml.readerXML();

		// System.out.println(xml.getXmlContent());

		/*
		 * XmlMapper xmlMapper = new XmlMapper(); Phrases_Control bean =
		 * xmlMapper.readValue(xml.getXmlContent(), Phrases_Control.class);
		 * System.out.println(bean.toString());
		 */


		List<Phrases_Control> listBean = new ArrayList<Phrases_Control>();
		
		listBean = xml.getListPhrases_Control();
		
		System.out.println(listBean);
		
	}
}
