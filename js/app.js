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
	// let noChildren1 = (table.children.length === 0) ? 'There are no Children1 on the table' : 'There are ' + table.children.length + ' Children1';
	// console.log(noChildren1);

	// create new rows and columns in table
	for (let row=0; row < gridH ; row++) {
		const tr = document.createElement("tr");
        table.append(tr);
        // create columns 
        for(let col=0 ; col < gridW ; col++){
            const td = document.createElement("td");
            tr.append(td);
        }
    }
    // test correct removal of children 2
	// let noChildren2 = (table.children.length === 0) ? 'There are no Children2 on the table' : 'There are ' + table.children.length + ' Children2';
	// console.log(noChildren2);

	// Color the cells
	function addColor (event) {
		// get color from color picker
		let color = document.getElementById('colorPicker').value;
		// set color to the cell (done thorugh event delegation and using the event.target property of the event element)
		event.target.style.backgroundColor = color;
		event.target.borderColor = color;
	}
	table.addEventListener('click', addColor);
}

// Run makeGrid() when form is submited
document.getElementById('sizePicker').addEventListener('submit', function (element) {
	// prevent default on submit
	element.preventDefault();
	// trigger makeGrid()
	makeGrid();
});
