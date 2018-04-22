// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	// declare variables to work with
	const table = document.getElementById('pixel_canvas');
	let gridH = document.getElementById ('input_height').value; 
	let gridW = document.getElementById('input_width').value;

	// remove existing children on table (if any)
	while (table.hasChildNodes()) {
	    table.removeChild(table.lastChild);
	}
	// test correct removal of children
	let noChildren = (table.children.length === 0) ? 'There are no Children on the table' : 'There are ' + table.children.length + ' Children';
	console.log(noChildren);
}

