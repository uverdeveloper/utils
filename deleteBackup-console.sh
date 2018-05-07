# Quantidade de arquivo a serem mantidos no diretorio (console.log e os backups)
limiteArquivos=5;

# Quantidade maxima de arquivos a serem deletados no diretorio
qtdeMaxArquivos=1000000

for ((i=0; i<$qtdeMaxArquivos; i++))
	do
		logPath=/var/log/wildfly/console-$(LANG=C date -d "-1 day" '+%Y-%m-%d-'$i).log
		
	# Verifica se tem a quantidade limiteArquivos de arquivos	
	qtdeArquivos=$(ls /var/log/wildfly/ | wc -l)
		if [ "$qtdeArquivos" -eq "$limiteArquivos" ];then			
			# Finaliza
			i=qtdeMaxArquivos+1
		else
			# Continua deletando os arquivos, do mains antigo para o mais recente
			file=/var/log/wildfly/console-$(LANG=C date -d "-1 day" '+%Y-%m-%d-'$i).log
			
			if [ -e "$file" ];then
				echo "$file"
				sudo rm "$file"
			else
				i=0
			fi
		fi
	done



