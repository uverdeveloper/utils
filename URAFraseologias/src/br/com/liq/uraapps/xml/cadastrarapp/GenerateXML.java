package br.com.liq.uraapps.xml.cadastrarapp;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import com.thoughtworks.xstream.XStream;

import br.com.liq.uraapps.bean.Phrases;

public class GenerateXML {

	private String xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
		+"<phrases_control>"
  			+"<phrases>"
    			+"<promptName id=\"\"></promptName>"
    			+"<description id=\"\"></description>"
  			+"</phrases>"
		+"</phrases_control>";
		
	private String pathXmlFile = "/opt//wildfly-10.1.0.Final/welcome-content/urafraseologias/phrases/";

	public void createXML(String appName) {

		Phrases phrase = new Phrases();

		XStream xs = new XStream();

		File fileXml = new File(pathXmlFile + appName + ".xml");

		if (!fileXml.exists()) {
			try {
				fileXml.createNewFile();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			BufferedWriter writer;
			try {
				writer = new BufferedWriter(new FileWriter(fileXml));
				writer.write(xml);
				writer.close();
			} catch (Exception e) {
				// TODO: handle exception
			}
		}
	}
}