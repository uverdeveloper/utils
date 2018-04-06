package br.com.liq.uraapps.test;

import br.com.liq.uraapps.bean.Phrases;
import br.com.liq.uraapps.xml.UpdateXML;

public class Main {

	public static void main(String[] args){
		
		Phrases phrasesParam = new Phrases();
		
		phrasesParam.setPromptName("0002.wav");
		phrasesParam.setDescription("Mais um momento.");
		
		UpdateXML updateXML = new UpdateXML(phrasesParam, 1);
		
	}
}
