package br.com.liq.uraapps.test;

import java.io.IOException;

import br.com.liq.uraapps.bean.MenuApp;
import br.com.liq.uraapps.bean.Phrases;
import br.com.liq.uraapps.xml.DeleteTagXML;
import br.com.liq.uraapps.xml.WriteXML;
import br.com.liq.uraapps.xml.cadastrarapp.DeleteMenuAppXML;
import br.com.liq.uraapps.xml.cadastrarapp.GenerateXML;
import br.com.liq.uraapps.xml.cadastrarapp.WriteMenuAppXML;

public class Main {

	public static void main(String[] args) throws IOException{		
		
		Phrases phrases = new Phrases();
		phrases.setAppName("avi");
		phrases.setIdPromptName("17");
		phrases.setPromptName("t");
		phrases.setIdDescription("teste");
		
		DeleteTagXML deleteTagXML = new DeleteTagXML(phrases, Integer.parseInt(phrases.getIdPromptName())-1, phrases.getAppName());
		
		}	
	}

