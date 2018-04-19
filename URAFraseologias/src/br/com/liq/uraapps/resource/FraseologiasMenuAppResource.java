package br.com.liq.urapps.resource;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlRootElement;

import br.com.liq.uraapps.bean.MenuApp;
import br.com.liq.uraapps.bean.MenuApp_Control;
import br.com.liq.uraapps.xml.cadastrarapp.DeleteMenuAppXML;
import br.com.liq.uraapps.xml.cadastrarapp.ReadMenuAppXML;
import br.com.liq.uraapps.xml.cadastrarapp.WriteMenuAppXML;

@XmlRootElement
@Path("/menuApp")
public class FraseologiasMenuAppResource {

	@GET
	@Path("/optionsLoad")
	@Produces(MediaType.APPLICATION_JSON)
	public List<MenuApp_Control> loadOptions() {

		ReadMenuAppXML xml = new ReadMenuAppXML();

		xml.readerXML();

		List<MenuApp_Control> list = new ArrayList<MenuApp_Control>();
		list = xml.getListMenuApp_Control();
		
		return list;
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void appNameRegister(MenuApp menuApp){
			
		WriteMenuAppXML writeXML = new WriteMenuAppXML(menuApp);
		
	}
	
	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void deleteApp(MenuApp menuApp){
		
		DeleteMenuAppXML updateXML = new DeleteMenuAppXML(menuApp);
		
	}
	
}
