//Instanciando objeto do vue
let placar = new Vue({
	el: '#placar', //Defenindo id do elemento	
	data:{ 
		n: 0
	}
})


let lista = new Vue({
	el: '#lista', //Defenindo id do elemento	
	data:{ 
		nomes: [
			{nome:'Marcelo',sobrenome: 'Sousa', idade: '21'},
			{nome:'Antonio',sobrenome: 'da Silva', idade: '18'},
			{nome:'Paulo',sobrenome: 'de Tasso', idade: '25'},
			{nome:'Maria',sobrenome: 'de Sousa', idade: '23'},
				
		]
	}
})