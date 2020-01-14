



 // varibale global here ;

 const btns = document.querySelectorAll('.icon');
 var text = document.getElementById('text');


 
  
class Player {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}



 checker();




 // class player 'X' and 'O' 

  var player1 = new Player('player1','X'),
      player2 = new Player('player2','O');
      Value = true ;







// main fun checker player

      function checker() {
       for ( var i = 0 ; i < btns.length ; i++ ) {
       btns[i].onclick = function () {   
        if(!this.hasAttribute('value')){
           if ( Value === true ) {
               this.innerHTML = player1.value ;
               this.setAttribute('value', Value );
               Value = !Value ;
               Winner();
           }else {
            this.innerHTML = player2.value ;
            this.setAttribute('value', Value );
            Value = !Value ;
            Winner();
           }
           
        }
        
       }
   }
}

 // condtion Winn player ;

       
        function Winner() {
              
               if ((btns[0].innerHTML + btns[1].innerHTML + btns[2].innerHTML  == 'XXX')|| 
                  (btns[3].innerHTML + btns[4].innerHTML + btns[5].innerHTML == 'XXX')||
                  (btns[6].innerHTML + btns[7].innerHTML + btns[8].innerHTML == 'XXX')||
                  (btns[0].innerHTML + btns[3].innerHTML + btns[6].innerHTML == 'XXX')||
                  (btns[1].innerHTML + btns[4].innerHTML + btns[7].innerHTML == 'XXX')||
                  (btns[2].innerHTML + btns[5].innerHTML + btns[8].innerHTML == 'XXX')||
                  (btns[0].innerHTML + btns[4].innerHTML + btns[8].innerHTML == 'XXX')||
                  (btns[2].innerHTML + btns[4].innerHTML + btns[6].innerHTML == 'XXX')) {
                    text.innerHTML = `good job <span>x</span> winner !`;
                    for( let s in btns ) {
                        btns[s].onclick = () => null ;
                    }
                   }else if ((btns[0].innerHTML + btns[1].innerHTML + btns[2].innerHTML  == 'OOO')|| 
                  (btns[3].innerHTML + btns[4].innerHTML + btns[5].innerHTML == 'OOO')||
                  (btns[6].innerHTML + btns[7].innerHTML + btns[8].innerHTML == 'OOO')||
                  (btns[0].innerHTML + btns[3].innerHTML + btns[6].innerHTML == 'OOO')||
                  (btns[1].innerHTML + btns[4].innerHTML + btns[7].innerHTML == 'OOO')||
                  (btns[2].innerHTML + btns[5].innerHTML + btns[8].innerHTML == 'OOO')||
                  (btns[0].innerHTML + btns[4].innerHTML + btns[8].innerHTML == 'OOO')||
                  (btns[2].innerHTML + btns[4].innerHTML + btns[6].innerHTML == 'OOO')) {
                    text.innerHTML = `good job <span>o</span>  winner !`;

                    for( let k in btns ) {
                        btns[k].onclick = () => null ;
                    }
                 }
                }
 

                // btn clicker new Game 

                function newGame() {   
                    text.innerHTML ="" ;
                    btns.forEach( e => {
                         e.innerHTML = "" ;
                         e.removeAttribute('value')
                    })
                    checker();
                }
        