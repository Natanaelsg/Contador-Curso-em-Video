function Contar() {
  var inici = document.getElementById("txti");
  var fim = document.getElementById("txtf");
  var p = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (inici.value.length == 0 || fim.value.length == 0 || p.value.length == 0) {
    alert("[Error] Digite os Valores");
    res.innerHTML = `Impossivel Contar, falta dados`
  } else {
    res.innerHTML = "Contando: <br>";
    var i = Number(inici.value);
    var f = Number(fim.value);
    var pa = Number(p.value);
    if(pa <= 0){
      alert('passo Invalido, Considerando PASSO 1')
      pa = 1
    }
    if(i < f){

      for(let c = i ; c <= f; c +=pa)
        res.innerHTML += `${c}, \u{1f449}`
   
   
   
      
     }else{
      for( let c = i ; c >= f ; c-=pa){
        res.innerHTML += `${c} \u{1f449}`
      }
     }
     res.innerHTML += `\u{1f3c1}`
  }

}