

/*--------------		 Revisão e fixação => ({Map,Reduce,Filter,CallBack,Promisse})	 	---------- */
				
	
				         /*    	===MAP===    */
1)
let numb = [1,2,6,87,7,4,0]

let triple = numb.map( function(e ){
 
	return e * 3
})


console.log(triple)






2)
let obj = [{
    
	nome: 'Isabela',
 idade : 23
},
{ 
	nome: 'Renata',
  idade : 41},{
        

	nome: 'Luana',
   idade : 27}]



let mapeaNome = obj.map( nome => {
   
 	return nome.nome

})


console.log(mapeaNome)






3)
let mapeaIdade = obj.map( idade =>{
    

	return idade.idade

})


console.log(mapeaIdade)




4)
 mercadorias = [{
   
	 item: 'arroz',
    preco: 7.56,
    qntdd: 150
},{
    
	 item: 'feijão',
    preco: 5.56,
    qntdd: 856
},{
    
	 item: 'leite ninho',
    preco: 17.96,
    qntdd: 90
},{
    
	 item: 'aveia em flocos',
    preco: 1.06,
    qntdd: 15
}]



const dobraValor = mercadorias.map( value => {
  
 	 return 'valores atualizados:' + value.preco * 2

})


console.log(dobraValor)

 
			                 /*	    ====FILTER===       */



meninas = [{
   
	 nome:'helena'
},{
     
    nome:'Luana'
},{
    
	 nome:'Mariza'
},{
    
	 nome:'Bruna'
},{
    
	 nome:'Rosilda'
}
	
	]



unico = meninas.filter(   (e, index, array) => array.indexOf(e) == 0)
novo = meninas.filter(   (e, index, array) => array.indexOf(e) == 3)

novato = meninas.filter(   (e, index, array) => array.indexOf(e) == 1)



console.log(unico)

console.log(novo)

console.log(novato)



produtos = [{
    
	item:'pão',
    preco: 3.45
},{
 
   	item:'açúcar',
 preco: 1.09 
},{
   
     item:'arroz',
  preco: 7.65
}
	]



console.log()



itemX = produtos.filter(    (e, i, arr) => arr.indexOf(e)  == 1)

console.log(itemX)



console.log()



//posso tentar este abaixo na function React


prod = produtos.filter( (e, i , a) => {
  
  return a.indexOf(e) == i

})


console.log(prod)


						/*  	==Reduce==	  */



do prof° com encremento meu

const rockets = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 },
  { country: "Japan", launches: 11 },
  { country: "Japan", launches: 7 }
]

const totalLaunches = rockets.reduce( ( valorAnterior, valorAtualDoElemento)=> valorAnterior + valorAtualDoElemento.launches, 0 )

//o zero é o valor inicial do somatório

console.log( totalLaunches )			
