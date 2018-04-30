package br.com.liq.uraapps.properties;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import javax.net.ssl.HostnameVerifier;

public class CarregaProperties {

	public static Properties getProp() throws IOException {
		Properties props = new Properties();
		
		String myHostname = java.net.InetAddress.getLocalHost().getHostName();
		
		FileInputStream file = new FileInputStream("C:/wildfly-10.1.0.Final/welcome-content/urafraseologias/config.properties");
		
		//FileInputStream file = new FileInputStream("./welcome-content/urafraseologias/config.properties");
		props.load(file);
		return props;
	}

}
