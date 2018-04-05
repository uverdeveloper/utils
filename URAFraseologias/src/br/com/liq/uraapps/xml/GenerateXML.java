package br.com.liq.uraapps.xml;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import com.thoughtworks.xstream.XStream;

import br.com.liq.uraapps.fraseologias.Fraseologia;

public class GenerateXML {

	private FileOutputStream xml;

	public void createXML(Fraseologia phrase) {

		File fileXml = new File("./phrases/phrase.xml");
		
		if (!fileXml.exists()) {
			try {
				fileXml.createNewFile();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		try {
			this.xml = new FileOutputStream(fileXml);
			xml.write(new XStream().toXML(phrase).getBytes());
			xml.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public FileOutputStream getXml() {
		System.out.println("XML Created.");
		return xml;
	}
	
}
