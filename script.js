//Instanciando objeto do vue
/*let placar = new Vue({
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


let app = new Vue ({
	el: '#app',
	data:{
		texto: 'Texto Qualquer',
		n1: 10,
		n2: 15,
		n3: 0
	}
})*/

let soma = new Vue({
	el: '#soma',
	data:{
		n1: Math.floor(Math.random()*30),
		n2: Math.floor(Math.random()*30),
		resultado: 0
	}
})

