/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<html>\n\t<head>\n\t\t<title>Inventory monitor</title>\n\t\t<script>\n          function refresh() {\n\t\t\t// refresh the dashboard every 5 minutes\n\t\t\tsetInterval(\n            \n                function() {\n\t\t\t\t\twindow.frames[\"dashboardFrame\"].src = \"https://iotdemos.scriptrapps.io/xivelybasicdemo/inventorymonitor\";\n                }, 300000\n            );\n          }\n\t\t</script>\n\t</head>\n\n\t<body onload=\"refresh()\">\t\n\t\t<iframe id=\"dashboardFrame\" width=\"800px\" height=\"500px\" src=\"https://iotdemos.scriptrapps.io/xivelybasicdemo/inventorymonitor\" frameborder=\"0\"></iframe>\n\t</body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '<html>\n\
	<head>\n\
		<title>Inventory monitor</title>\n\
		<script>\n\
          function refresh() {\n\
			// refresh the dashboard every 5 minutes\n\
			setInterval(\n\
            \n\
                function() {\n\
					window.frames[\"dashboardFrame\"].src = \"https://iotdemos.scriptrapps.io/xivelybasicdemo/inventorymonitor\";\n\
                }, 300000\n\
            );\n\
          }\n\
		</script>\n\
	</head>\n\
\n\
	<body onload=\"refresh()\">	\n\
		<iframe id=\"dashboardFrame\" width=\"800px\" height=\"500px\" src=\"https://iotdemos.scriptrapps.io/xivelybasicdemo/inventorymonitor\" frameborder=\"0\"></iframe>\n\
	</body>\n\
</html>';  response.write(content);response.close();			