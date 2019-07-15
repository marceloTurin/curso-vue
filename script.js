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




//Comparação de Watcher vs Computado


let app = new Vue ({
	el: '#app',
	data:{
		errorMsg: '',
		errorDivClass:{
			ativo: false,
			warning: false,
			error: false
		}
	},
	methods:{
		showWarning:function(msg){
			this.errorDivClass.ativo = true;
			this.errorDivClass.warning = true;
			this.errorDivClass.error = false;
			this.errorDivClass.errorMsg = msg;
		},
		showError:function(msg){
			this.errorDivClass.ativo = true;
			this.errorDivClass.warning = false;
			this.errorDivClass.error = true;
			this.errorDivClass.errorMsg = msg;
		},
		hideError:function(){
			this.errorDivClass.ativo = false;
			this.errorDivClass.warning = false;
			this.errorDivClass.error = false;
			this.errorDivClass.errorMsg = '';
		}
	}
	
	
});

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