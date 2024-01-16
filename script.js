const parseCode = (str) => {
  // your code here
	let parts=str.split("0");
	let first=parts[0];
	let last=parts[1];
	let ide=parts[2];
	return {
		firstName:first,
		lastName:last,
		id:ide,
	}
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
