package br.com.liq.integracaozoomura.restful;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;

import br.com.liq.integracaozoomura.bean.Bean;

public class ConsumeService {

	final static String url = "https://devdataservices.liq.com.br/zoom2URAWS/api/Ura/GetScheduleStores";
	
	public static void main(String[] args) {

		Bean b = new Bean();
		
		b.setUsername("zoom.ura");
		b.setPassword("3eaB5RYGVKF3iCxc");
		b.setEmployeeId("36310");
		b.setEmployeePassword("123");
		
		HttpClient httpClient = HttpClients.createDefault();
		HttpPost httpPost = new HttpPost(url);
		
		List<NameValuePair> params = new ArrayList<NameValuePair>(3);
		params.add(new BasicNameValuePair("Username", b.getUsername()));
		params.add(new BasicNameValuePair("Password", b.getPassword()));
		params.add(new BasicNameValuePair("EmployeedId", b.getEmployeeId()));
		params.add(new BasicNameValuePair("EmployeePassword", b.getEmployeePassword()));
		try {
			httpPost.setEntity(new UrlEncodedFormEntity(params,"UTF-8"));
		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		try {
			HttpResponse response = httpClient.execute(httpPost);
			HttpEntity entity = response.getEntity();
			InputStream is = null;
			OutputStream out = null;
			
			byte[] bytes = new byte[1024];
			
			if(entity != null){
				is = entity.getContent();
				String json = getStringFromInputStream(is);
				System.out.println(json);
			}
			
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	private static String getStringFromInputStream(InputStream is) {

		BufferedReader br = null;
		StringBuilder sb = new StringBuilder();

		String line;
		try {

		br = new BufferedReader(new InputStreamReader(is));
		while ((line = br.readLine()) != null) {
		sb.append(line);
		}

		} catch (IOException e) {
		e.printStackTrace();
		} finally {
		if (br != null) {
		try {
		br.close();
		} catch (IOException e) {
		e.printStackTrace();
		}
		}
		}

		return sb.toString();

		}

}
