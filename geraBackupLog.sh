# Quantidade maxima de arquivos a serem gerados no diretorio
qtdeMaxArquivos=1000000

# Arquivo a ser feitos os backups
arquivoConsole=/var/log/wildfly/console.log

# Primeiro arquivo de log a ser gerado, caso nao exista
logPath=/var/log/wildfly/console-$(LANG=C date -d "-1 day" '+%Y-%m-%d-0').log

if [ -e "$arquivoConsole" ];then
	for ((i=0; i<$qtdeMaxArquivos; i++))
	do
	
		# Incrementando +1 no ultimo no nome do arquivo 
		logPath=/var/log/wildfly/console-$(LANG=C date -d "-1 day" '+%Y-%m-%d-'$i).log
		if [ -e "$logPath" ];then
		
		# Apenas para Debug
			echo "$logPath"
		else
			data=$(LANG=C date -d "-1 day" '+%Y-%m-%d-'$i)
			sudo cp /var/log/wildfly/console.log /var/log/wildfly/console-$data.log
			
			# Finaliza
			i=qtdeMaxArquivos+1
		fi
	done
	else
	cp /var/log/wildfly/console.log /var/log/wildfly/console-$(LANG=C date -d "-1 day" '+%Y-%m-%d-0').log
fi

