//Instanciando objeto do vue
/*let app = new Vue({
	el: '#app', //Defenindo id do elemento	
	data:{ 
		nome:'Marcelo',
		idade:21
	},
	methods:{
		mostrar : (nome,idade)=>{
			let txt = `Olá, ${nome}  - ${idade} anos`;
			return txt;
		},
		testar : ()=>{
			return 'testando 1,2,3..';
		}
	}
})*/


/*bandeira = (pais)=>{
	return `<img src="paises/${pais}.png" />`
}

Vue.component("pais",{
	props: ['bandeira','continente'],
	template: `<p v-html="nome + continente"> </p>`
})

let app = new Vue({
	el:'#app',
	data:{
		argentina:bandeira('argentina'),
		brazil:bandeira('brazil'),
		china:bandeira('china'),
		uk:bandeira('uk'),
		usa:bandeira('usa')
	},
	methods:{
		paises : function (){
			return [
				{bandeira: this.argentina,continente: 'América do Sul'},
				{bandeira: this.brazil,continente: 'América do Sul'},
				{bandeira: this.china,continente: 'Ásia'},
				{bandeira: this.uk,continente: 'Europa'},
				{bandeira: this.usa,continente: 'América do Norte'}	
			];
		}
	}
})*/




//Vue.config.keyCodes.f2 = 113; // Criando o atalho do F2 na função keyup

Vue.component('menu-superior',{
	data:function(){
		return {
			texto:'Texto Qualquer'
		}
	},
	template:'<button>{{texto}}</button>'
})


Vue.component('contador',{
	data:function(){
		return {
			c:0
		};
	},
	methods:{
		aumentar:function(){
			this.c++;
		}
	},
	template: '<div><span>{{c}}x</span> <button v-on:click="aumentar">Aumentar </button> </div>'
})

let app = new Vue ({
	el: '#app',
	data:{
		nome:'',
		idade:''
	}
	
});

//Altera o elemento do array
//Vue.set(this.lista,1,'Marcelo da Silva') //Passando como parametro: a lista, o indice do elemento a ser alterado, e o valor a ser alterado


//Adiciona mais um indice no array
//Vue.set(this.lista,'pai','Chico') 
/*
	beforeCreate: antes do elemento ser criado
	created: quando o elemento foi criado na memoria
	beforeMount: antes de renderizar o elemento na tela
	mounted: depois de renderizar o elemento na tela
	beforeUpdate: antes de o elemento for modificado
	updated: depois do elemento ser modificado
	boforeDestroy : antes do elemento ser destruido
	destroyed: quando o elemento for destruido
*/