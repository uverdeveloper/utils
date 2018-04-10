package br.com.liq.uraapps.bean;

public class Phrases {

	private String appName = "";
	private String idPromptName = "";
	private String idDescription = "";
	private String promptName = "";
	private String description = "";
	private String idUpdate = "";

	public String getAppName() {
		return appName;
	}

	public void setAppName(String appName) {
		this.appName = appName;
	}

	public String getIdPromptName() {
		return idPromptName;
	}

	public void setIdPromptName(String idPromptName) {
		this.idPromptName = idPromptName;
	}

	public String getIdDescription() {
		return idDescription;
	}

	public void setIdDescription(String idDescription) {
		this.idDescription = idDescription;
	}

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

	public String getIdUpdate() {
		return idUpdate;
	}

	public void setIdUpdate(String idUpdate) {
		this.idUpdate = idUpdate;
	}

	@Override
	public String toString() {
		return "Phrases [appName=" + appName + ", idPromptName=" + idPromptName + ", idDescription=" + idDescription
				+ ", promptName=" + promptName + ", description=" + description + ", idUpdate=" + idUpdate + "]";
	}

}
