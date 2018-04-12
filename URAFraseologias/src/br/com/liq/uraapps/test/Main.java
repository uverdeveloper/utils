package br.com.liq.uraapps.test;

import java.io.IOException;

import br.com.liq.uraapps.bean.MenuApp;
import br.com.liq.uraapps.xml.DeleteTagXML;
import br.com.liq.uraapps.xml.cadastrarapp.DeleteMenuAppXML;

public class Main {

	public static void main(String[] args) throws IOException{		
		
		MenuApp menuAppParam = new MenuApp();
		menuAppParam.setAppName("novaura");
		
		DeleteMenuAppXML deleteMenuAppXML = new DeleteMenuAppXML(menuAppParam);
		
		}	
	}

