package br.com.liq.urapps.resource;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlRootElement;

import br.com.liq.uraapps.bean.Phrases;
import br.com.liq.uraapps.bean.Phrases_Control;
import br.com.liq.uraapps.xml.ReadXML;
import br.com.liq.uraapps.xml.UpdateXML;
import br.com.liq.uraapps.xml.WriteXML;

@XmlRootElement
@Path("/menu")
public class FraseologiasCRUDResource {

	@GET
	@Path("/optionsLoad")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Phrases_Control> loadOptions() {

		ReadXML xml = new ReadXML();

		xml.readerXML();

		List<Phrases_Control> list = new ArrayList<Phrases_Control>();
		list = xml.getListPhrases_Control();

		System.out.println("List " + list);
		
		return list;
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void promptRegister(Phrases phrases){
			
		WriteXML writeXML = new WriteXML(phrases);
		
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void promptUpdate(Phrases phrases){
		
		int item = Integer.parseInt(phrases.getIdPromptName());
		
		UpdateXML updateXML = new UpdateXML(phrases, item-1);
		
	}
	
	
	
}
