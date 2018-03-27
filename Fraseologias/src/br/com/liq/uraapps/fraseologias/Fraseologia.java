package br.com.liq.uraapps.fraseologias;

import com.thoughtworks.xstream.XStream;

public class Fraseologia {

	String promptName = "";
	String description = "";

	public String getPromptName() {
		return promptName;
	}

	public void setPromptName(String promptName) {
		this.promptName = promptName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String toXML(Fraseologia phrase){
		return new XStream().toXML(phrase).toString();
	}

	@Override
	public String toString() {
		return "Fraseologia [promptName=" + promptName + ", description=" + description + "]";
	}

	
}
