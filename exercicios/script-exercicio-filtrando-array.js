let app = new Vue ({
	el: '#app',
	data:{
		busca:'',
		nomes:['Marcelo','Paulo','Antonio','Ciclano','Isa','Dani','Amanda']
	},
	computed:{
		nomesFiltrados:function(){

			//Solução 1
			return  this.busca != '' ? this.nomes.filter(nome => nome.toLowerCase().search(this.busca.toLowerCase())) : this.nomes

			//Solução 2
			/*return this.nomes.filter(function(nome){
				if (this.busca != '') {
					
					if (nome.toLowerCase().indexOf(this.busca.toLowerCase()) > -1) {
						return true;
					} else{
						return false;
					}		

				} else{
					return true;
				}	
			},this);*/
		}
	}
	
});