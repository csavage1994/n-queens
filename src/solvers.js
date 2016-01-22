/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  
  var solution = new Board({n:n});
  var row = 0;

    
  for(var i = 0; i < n ; i++){
    solution.togglePiece(row,i);
    if(!solution.hasAnyRooksConflicts()){
      row++;
      continue;
    } 
    solution.togglePiece(row,i); 
  }
  
  

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  //create board
  var board = new Board({n:n});
  var result = 0;

  var solutionCount = function(row){

    if(row === n){
      result++;
      return;
    }
    
    for(var i = 0; i < n ; i++){
      board.togglePiece(row,i);
      if(!board.hasAnyRooksConflicts()){
        solutionCount(row + 1);
      } 
      board.togglePiece(row,i);
      
      
    }
  
  } 
  solutionCount(0);
  console.log('Number of solutions for ' + n + ' rooks:', result);
  return result;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
 var board = new Board({n:n});
  //var row = 0;

    
  /* for(var i = 0; i < n ; i++){
    solution.togglePiece(row,i);
    if(!solution.hasAnyQueensConflicts()){
      
      if(i === n-1){
        var hold = 0;
        for(var j = 0; j < n; j++){
          hold += solution.rows()[row][j];
        }
        if(hold === 0){
          row--;
          for(var k = 0; k < n; k++){
            if(solution.rows()[row][k] === 1){
              solution.togglePiece(row, k);
              solution.togglePiece(row, k + 1);
              break;
            }
          }
        }
      };
      
      row++;
      continue;
    }
    solution.togglePiece(row,i);
        
  }*/
  var test;
  var solutionCount = function(row){

    if(row === n){
      //console.log(board.rows());
      if(!test){
        test = board.rows();
      }
      return;
    }
    
    for(var i = 0; i < n ; i++){
      board.togglePiece(row,i);
     
      if(!board.hasAnyQueensConflicts()){
        solutionCount(row + 1);
      } 
     
      if(test){
        return;
      } 
     
      board.togglePiece(row,i); 
    }
    
  } 
  
 //console.log(test);

  solutionCount(0);
  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(validBoard));
  return test || board.rows();
  //return validBoard.rows();//return solution.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n:n});
  var result = 0;

  var solutionCount = function(row){

    if(row === n){
      result++;
      return;
    }
    
    for(var i = 0; i < n ; i++){
      board.togglePiece(row,i);
      if(!board.hasAnyQueensConflicts()){
        solutionCount(row + 1);
      } 
      board.togglePiece(row,i);
      
      
    }
  
  } 
  solutionCount(0);
  console.log('Number of solutions for ' + n + ' queens:', result);
  return result;
};















