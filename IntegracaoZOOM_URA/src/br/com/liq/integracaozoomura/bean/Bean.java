package br.com.liq.integracaozoomura.bean;

import java.util.Arrays;

public class Bean {

	String StoreId = "";
	String[] StoresIds;
	String Username = "";
	String Password = "";
	String EmployeeId = "";
	String EmployeePassword = "";
	String ErrorCode = "";

	public String getStoreId() {
		return StoreId;
	}

	public void setStoreId(String storeId) {
		StoreId = storeId;
	}

	public String[] getStoresIds() {
		return StoresIds;
	}

	public void setStoresIds(String[] storesIds) {
		StoresIds = storesIds;
	}

	public String getUsername() {
		return Username;
	}

	public void setUsername(String username) {
		Username = username;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getEmployeeId() {
		return EmployeeId;
	}

	public void setEmployeeId(String employeeId) {
		EmployeeId = employeeId;
	}

	public String getEmployeePassword() {
		return EmployeePassword;
	}

	public void setEmployeePassword(String employeePassword) {
		EmployeePassword = employeePassword;
	}

	public String getErrorCode() {
		return ErrorCode;
	}

	public void setErrorCode(String errorCode) {
		ErrorCode = errorCode;
	}

	@Override
	public String toString() {
		return "Bean [StoreId=" + StoreId + ", StoresIds=" + Arrays.toString(StoresIds) + ", Username=" + Username
				+ ", Password=" + Password + ", EmployeeId=" + EmployeeId + ", EmployeePassword=" + EmployeePassword
				+ ", ErrorCode=" + ErrorCode + "]";
	}

}
