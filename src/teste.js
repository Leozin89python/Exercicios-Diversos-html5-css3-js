<!DOCTYPE HTML>
<html>
   <head>
	<style>
	body{
	background:whitesmoke;
	}
   	#conteiner{
	}
	#ttl{
	text-align:center;
	}
	#in,#btn{
	display:flex;
	margin-left:3em;
	outline:none;
	}
	#btn{
	width:13.3em;
	margin-top:0.5em;
	color:blue;
	background:white;
	}
	#btn:hover{
	color:white;
	background:blue;
	}
	#setado{
	display:flex;
	margin-left:3em;
	width:13.3em;
	margin-top:0.5em;
	outline:none;
	color:white;
	background:blue;
	}
   </style>
 </head>
   <body>
	<div id="conteiner">
	 <h1 id="ttl">Teste&copy;</h1>
	 <input id="in"></input>
	 <button id="btn" onClick="ola()">fala ola</button>
	 <button id="btn" onClick="cria()">cria button</button>
	 <button id="btn" onClick="objeto()">chama obj</button>
	 <button id="setado" onClick="time()">setInterval</button>
	 <button id="btn" onClick="alerta()">chama alert</button>
       </div>
	<div id="cont">
	<ul id="resp"></ul>
       </div>
	<script>
   	

		this.content = document.getElementById('in').focus()
		this.button = document.querySelector('#btn')
		const body = document.querySelector('body')
		


		this.obj = [{
			nome:'Gabriela'
		},{
			nome:'Luana'
		},{
			nome:'Rosilda'
		},{
			nome:'Naucilene'
		}]
		
		
		objeto = () =>	{
		      
		      const e = this.obj.map(i => i.nome)
		      body.innerHTML = e		      
		      	
		}
					
		function obtido(){
			
			let e = document.getElementById('in')
			alert()
			
		}
		
		function cria(){

			const valor = document.createElement('button')
			body.appendChild(valor)
		
		}
		
		
		ola = () =>	{
			
			body.innerHTML = 'Hi'
			
		}



		tempo = setInterval(time, 9000)
		function time()	{
				
			var d = document.createElement('li')
			body.appendChild(d)
			
		}
		
	
	
		alerta = () =>	alert('tamo junto')
   </script>
 </body>
</html>