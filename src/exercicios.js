	
		
				
			
				====Exercicios JS====



function prod(produto,preco,quantidade,validade){
  
	  this.produto = produto
    
	  this.preco = preco
    
	  this.quantidade = quantidade
    
	  this.validade = validade

	
	}



let Bahia = new prod('arroz',7.65,23,'2 anos')

let bomboniere = new prod('pop', 0.68,150,'5 anos')


console.log(Bahia)

console.log(bomboniere)



varejo = [{
   
 produto: this.produto,
    
 preco:this.preco

}]


varejo.produto = ['arroz','açúcar']

varejo.preco = [2.35,3.65]



console.log(varejo.produto,varejo.preco)


mocas = [{
   
	 nome: 'Luana',
    idade: 23
},{
    
	 nome: 'Vitória',
    idade: 21
},{
     
	 nome: 'Rebeca',
    idade: 27
}]



console.log(mocas)

garotas = mocas.map( e => {
    
return e.idade > 25

})


meninas = mocas.filter( (e) => {
 
   return  e.idade > 25

})
ninas = mocas.filter(    e =>    {

   return e.idade < 25

})
elas = mocas.reduce(    a => {
  
return !a.idade < 20 ? 'nothing to return' : mocas

})

console.log('MAP maior que 25')
console.log(garotas)

console.log('FILTER maior que 25')

console.log(meninas)

console.log('FILTER menor que 25')

console.log(ninas)
console.log('REDUCE compara e retorna a idade')

console.log(elas)

