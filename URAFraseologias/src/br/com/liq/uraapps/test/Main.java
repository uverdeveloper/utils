package br.com.liq.uraapps.test;

import java.io.IOException;

import br.com.liq.uraapps.xml.cadastrarapp.ReadMenuAppXML;

public class Main {

	public static void main(String[] args) throws IOException{		
		
		ReadMenuAppXML xml = new ReadMenuAppXML();
		System.out.println(xml.getListMenuApp_Control());
		
		}	
	}

