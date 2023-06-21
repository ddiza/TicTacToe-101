let board = [
  ["", "", ""], // <-- Row 1, index 0
  ["", "", ""], // <-- Row 2, index 1
  ["", "", ""] // <-- Row 3, index 2
]



// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'




// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${element.id}`)

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue

  // if the innerhtml for the element we selected is false (!)
  // that means it's empty so I can add a marker (X or O)
  // in other words, if there's not anything in my bucket, add here.
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}








// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {

  document.getElementById(id).innerHTML = currentMarker;

  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2))


  board[row][column] = currentMarker;

  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
    // put the value of the currentMarker into the selected html element
    //changeMarker() // don't need this here because I'm callig it in checkForWin instead

  
  checkForWin()
  
}





// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}





// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
  const squares = document.getElementsByTagName("TD")
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os. No change needed here.
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  
  location.reload();
} // ***END OF RESETBOARD***


const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}

/*let board = [
  ["0-0", "0-1", "0-2"],
  ["1-0", "1-1", "1-2"],
  ["2-0", "2-1", "2-2"]
]
*/
const horizontalWin = () => {
  // Your code here to check for horizontal wins

  /***
   * check each row for either all X's or all O's
   * if one of them is a winner. retirn true
   * otherwise, return false   * 
   */

  // horizontal check for row 1
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
        || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"))
        {
          return true;
        } else if ((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") 
        || (board[0][0] == "O" && board[1][1] == "O" && board[1][2] == "O"))
        {
          return true;
        } else if ((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
        || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O"))
        {
          return true;
        } else {
          return false;
        }
}

/*let board = [
  ["0-0", "0-1", "0-2"],
  ["1-0", "1-1", "1-2"],
  ["2-0", "2-1", "2-2"]
]
*/
const verticalWin = () => {
  // Your code here to check for vertical wins
  // vertical check for column 1
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
  || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O"))
  {
    return true;
  } else if ((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
  || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O"))
  {
    return true;
  } else if ((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
  || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O"))
  {
    return true;
  } else {
    return false;
  }
}


/*let board = [
  ["0-0", "0-1", "0-2"],
  ["1-0", "1-1", "1-2"],
  ["2-0", "2-1", "2-2"]
]
*/
const diagonalWin = () => {
  // Your code here to check for diagonal wins
  //diagonal check top left to bottom right
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
  || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"))
  { 
    return true;
  } else if ((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") 
  || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"))
  {
    return true;
  } else {
    return false;
  }
}