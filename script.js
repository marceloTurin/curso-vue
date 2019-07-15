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
		errorType: ''
	},
	computed:{
		errorDivClass:function(){
			let r = {
				ativo:false,
				warning:false,
				error: false
			};

			if (this.errorMsg != "") {
				r.ativo = true;
			}

			switch(this.errorType){
				case 'warning':
					r.warning = true;
					r.error = false;
					break;
				case 'error':
					r.warning = false;
					r.error = true;	
					break;
			}
			return r;
		}
	},
	methods:{
		showWarning:function(msg){
			this.errorMsg = msg;
			this.errorType = 'warning';
		},
		showError:function(msg){
			this.errorMsg = msg;
			this.errorType = 'error';
		},
		hideError:function(){
			this.errorMsg = '';
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