		function entrarContato( ) {				
 			if (contato.nome.value == ""){
 				alert("Por favor digite seu nome!");
 				return false;
 			}else if (contato.email.value == ""){
				 alert("Por favor digite seu email!");				
				 
 				return (false);
 			}else if (contato.sexo[0].checked == false && contato.sexo[1].checked == false){
 				alert("Por favor escolha seu sexo!");
 				return (false);
 			}else{
 				window.alert('Obrigado pelo seu cadastro!! ' + document.forms['contato']['nome'].value + ", entraremos em contato para mais informa��es!");
 			}
 			
 		}		
 