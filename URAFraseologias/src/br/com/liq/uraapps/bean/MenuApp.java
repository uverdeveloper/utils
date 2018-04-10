package br.com.liq.uraapps.bean;

public class MenuApp {

	private String appName = "";

	public String getAppName() {
		return appName;
	}

	public void setAppName(String appName) {
		this.appName = appName;
	}

	@Override
	public String toString() {
		return "MenuApp [appName=" + appName + "]";
	}

}
