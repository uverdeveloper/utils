package com.properties.read;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertiesLoader {

	private Properties props;
	
	protected PropertiesLoader(){
		props = new Properties();
		
		FileInputStream in;
		
		try {
			in = new FileInputStream("C:/Users/356742/workspace/configuration.properties");
			try {
				props.load((InputStream)in);
			} catch (IOException e) {
				
				e.printStackTrace();
			}
		} catch (FileNotFoundException e1) {
			
			e1.printStackTrace();
		}	
	}
	protected String getValor(String chave){
		return (String)props.getProperty(chave);
	}	
}
