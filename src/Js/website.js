import React from "react";
import Nav from "./nav";
import Form from "./from";
function Website() {
	return (
		<div className="parent">
			<Nav />
			<Form />
		</div>
	);
}
// let button = document.querySelector(".form button");
// button.addEventListener("click", function () {
// 	console.log(`clicked on`);
// });
export default Website;
let isGoingOut = false;
let answer;

answer = isGoingOut ? "yes" : "No";
console.log(answer);
