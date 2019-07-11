let app = new Vue ({
	el : '#app',
	data: {
		listaNomes: [],
		nome: '',
		total : 0
	},
	methods:{
		adicionaNomes: function(){
			if (this.nome.length > 0) {
				this.listaNomes.push(this.nome);
				this.nome = '';
			}
		}
	}
})