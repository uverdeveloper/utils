package br.com.liq.uraapps.test;

import br.com.liq.uraapps.bean.Phrases;
import br.com.liq.uraapps.xml.UpdateXML;

public class Main {

	public static void main(String[] args){
			
		Phrases p = new Phrases();
		
		p.setIdPromptName("18");
		p.setPromptName("Y");
		p.setDescription("X");
		
		UpdateXML updateXML = new UpdateXML(p, 18);
		
		//DeleteTagXML deleteTagXML = new DeleteTagXML(p , 18);
		
	}
}
