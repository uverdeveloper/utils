package br.com.liq.uraapps.test;

import java.io.IOException;

import br.com.liq.uraapps.bean.MenuApp;
import br.com.liq.uraapps.bean.Phrases;
import br.com.liq.uraapps.xml.DeleteTagXML;
import br.com.liq.uraapps.xml.WriteXML;
import br.com.liq.uraapps.xml.cadastrarapp.DeleteMenuAppXML;

public class Main {

	public static void main(String[] args) throws IOException{		
		
		Phrases phrases = new Phrases();
		phrases.setAppName("avi");
		phrases.setIdPromptName("17");
		
		
		
		//int item = Integer.parseInt(phrases.getIdPromptName());
		
		/*DeleteTagXML deleteTagXML = new DeleteTagXML(phrases, item-1, phrases.getAppName());*/
		
		phrases.setPromptName("Uver");
		phrases.setDescription("Teste");
		
		WriteXML writeXML = new WriteXML(phrases, phrases.getAppName());
		
		}	
	}

