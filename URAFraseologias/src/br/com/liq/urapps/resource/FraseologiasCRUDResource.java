package br.com.liq.urapps.resource;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlRootElement;

import br.com.liq.uraapps.bean.Phrases;
import br.com.liq.uraapps.bean.Phrases_Control;
import br.com.liq.uraapps.xml.DeleteTagXML;
import br.com.liq.uraapps.xml.GenerateXML;
import br.com.liq.uraapps.xml.ReadXML;
import br.com.liq.uraapps.xml.UpdateXML;
import br.com.liq.uraapps.xml.WriteXML;

@XmlRootElement
@Path("/menu")
public class FraseologiasCRUDResource {

	//Utilizar no cadastramento de uma nova aplicação
	/*@POST
	@Path("/newApplicationRegister/{appName}")
	public void newApplicationRegister(@PathParam ("appName") String appName){
		GenerateXML generateXML = new GenerateXML();
		generateXML.createXML(appName);
	}*/
	
	@GET
	@Path("/optionsLoad/{appName}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Phrases_Control> loadOptions(@PathParam ("appName") String appName) {

		ReadXML xml = new ReadXML(appName);

		xml.readerXML();

		List<Phrases_Control> list = new ArrayList<Phrases_Control>();
		list = xml.getListPhrases_Control();
		
		return list;
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void promptRegister(Phrases phrases){
			
		WriteXML writeXML = new WriteXML(phrases, phrases.getAppName());
		
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void promptUpdate(Phrases phrases){
		
		int item = Integer.parseInt(phrases.getIdPromptName());
		
		UpdateXML updateXML = new UpdateXML(phrases, item-1, phrases.getAppName());
		
	}
	
	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void deletePrompt(Phrases phrases){
		
		int item = Integer.parseInt(phrases.getIdPromptName());
		
		DeleteTagXML updateXML = new DeleteTagXML(phrases, item-1, phrases.getAppName());
		
	}
	
}
