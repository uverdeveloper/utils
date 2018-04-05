package br.com.liq.uraapps.bean;

public class Phrases {

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

	@Override
	public String toString() {
		return "Phrases [promptName=" + promptName + ", description=" + description + "]";
	}

}
