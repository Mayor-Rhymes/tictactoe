var store = document.getElementsByClassName("store")



// var dupe = document.createElement("p");
// dupe.innerText = mark;

var storeArr = Array.from(store);


function switchTic(deck){

    var mark = "";
    let count = 0;
    while(mark === ""){
    mark = String(prompt("Enter the value you want between x and o"));


    }

    deck.forEach(function(e){
    

        e.addEventListener("click", () => {
   
      
        e.textContent = mark;
       
         count++;
         if(count >= 5){

           checkWinner();
        
          }
       
        

       if(mark === "x"){


        mark = "o";
       }
       else {

        mark = "x";
       }

    }, {once: true})
})
}


switchTic(storeArr);



function checkWinner(){

  
    



      if(storeArr[0].textContent === "x" && storeArr[3].textContent === "x" && storeArr[6].textContent === "x"){

        alert("X wins");
        

      }

      else if(storeArr[1].textContent === "x" && storeArr[4].textContent === "x" && storeArr[7].textContent === "x"){

        alert("X wins")
      }
      
      else if(storeArr[2].textContent === "x" && storeArr[5].textContent === "x" && storeArr[8].textContent === "x"){

        alert("X wins")
      }

      else if(storeArr[0].textContent === "x" && storeArr[1].textContent === "x" && storeArr[2].textContent === "x"){

        alert("X wins")
      }
      else if(storeArr[3].textContent === "x" && storeArr[4].textContent === "x" && storeArr[5].textContent === "x"){

        alert("X wins")
      }
      else if(storeArr[6].textContent === "x" && storeArr[7].textContent === "x" && storeArr[8].textContent === "x"){

        alert("X wins")
      }
      else if(storeArr[0].textContent === "x" && storeArr[4].textContent === "x" && storeArr[8].textContent === "x"){

        alert("X wins")
      }

      else if(storeArr[2].textContent === "x" && storeArr[4].textContent === "x" && storeArr[6].textContent === "x"){

        alert("X wins")
      }

      else if(storeArr[0].textContent === "o" && storeArr[1].textContent === "o" && storeArr[2].textContent === "o"){

        alert("O wins")
      }
      else if(storeArr[3].textContent === "o" && storeArr[4].textContent === "o" && storeArr[5].textContent === "o"){

        alert("O wins")
      }
      else if(storeArr[6].textContent === "o" && storeArr[7].textContent === "o" && storeArr[8].textContent === "o"){

        alert("O wins")
      }
      else if(storeArr[0].textContent === "o" && storeArr[3].textContent === "o" && storeArr[6].textContent === "o"){

        alert("O wins")
      }

      else if(storeArr[1].textContent === "o" && storeArr[4].textContent === "o" && storeArr[7].textContent === "o"){

        alert("O wins")
      }
      else if(storeArr[2].textContent === "o" && storeArr[5].textContent === "o" && storeArr[8].textContent === "o"){

        alert("O wins")
      }
      else if(storeArr[0].textContent === "o" && storeArr[5].textContent === "o" && storeArr[8].textContent === "o"){

        alert("O wins")
      }
      else if(storeArr[2].textContent === "o" && storeArr[4].textContent === "o" && storeArr[6].textContent === "o"){

        alert("O wins")
      }
      


      

      


      

      
    
    

  
}


var clup = document.getElementsByClassName("dub")[0];

clup.addEventListener("click", () => {

    storeArr.forEach((e) => e.textContent = "");
    switchTic(storeArr)
})





