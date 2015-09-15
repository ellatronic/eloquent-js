/*Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the 
grid there is either a space or a “#” character. The characters should 
form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable 
size = 8 and change the program so that it works for any size, outputting 
a grid of the given width and height.*/

function chessBoard(rows, columns) {
	for (i = 0; i < rows; i++) {
		if (i % 2 === 0) {
			var columnString = " ";
			
			for (j = 1; j < columns; j++) {
				if (j % 2 === 0) {
					columnString += " ";
				}
				else {
					columnString += "#";
				}
			}
  			console.log(columnString);
		}
		else {
			var columnString = "#";
			
			for (j = 0; j < columns; j++) {
				if (j % 2 === 0) {
					columnString += " ";
				}
				else {
					columnString += "#";
				}
			}
  			console.log(columnString);
		}
	}
}

chessBoard(8, 8);