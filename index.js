

//  import the crypto module



const args=process.argv.slice(2);

[operation,...number]=args;
// console.log(operation);
// console.log(number);
function performoperation(){
  if(operation=="add"){
    if(number.length!==2){
      console.log("Error:please type 2 numbers only");
      return;
    }
    console.log(Number(number[0])+Number(number[1]));
  }
  else if(operation=="sub"){
    if(number.length!==2){
      console.log("Error:please type 2 numbers only");
      return;
    }
    console.log(Number(number[0])-Number(number[1]));
  }
  else if(operation=="div"){
    if(number.length!==2){
      console.log("Error:please type 2 numbers only");
      return;
    }
    console.log(Number(number[0])/Number(number[1]));
  }
  else if(operation=="mult"){
    if(number.length!==2){
      console.log("Error:please type 2 numbers only");
      return;
    }
    console.log(Number(number[0])*Number(number[1]));
  }
  else{
    console.log("Error:Please type a valied operation")
  }
}


performoperation()



// complete the  function



// switch (operation) {
  
//     default:
//       console.log("Invalid operation");
//   }
  