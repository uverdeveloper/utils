package br.com.liq.urapps.resource;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlRootElement;

import br.com.liq.uraapps.bean.MenuApp_Control;
import br.com.liq.uraapps.xml.cadastrarapp.ReadMenuAppXML;

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
	
}
