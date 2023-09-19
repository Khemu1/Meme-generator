import React from "react";
import data from "./meme";
import { wait } from "@testing-library/user-event/dist/utils";

function Form() {
	const [meme, setMeme] = React.useState({
		toptext: "",
		bottomtext: "",
		memeImg: "",
	});
	console.log(meme);

	function handelChange(event) {
		const { name, type, value, checked } = event.target;
		setMeme((prev) => {
			return {
				...prev,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	}
	const [allMemes, setAllMemes] = React.useState([]);
	React.useEffect(() => {
		async function getMemes() {
			const res = await fetch("https://api.imgflip.com/get_memes");
			const data = await res.json();
			setAllMemes(data.data.memes);
		}
		getMemes();
	}, []);
	function getImg() {
		const memeArr = allMemes;
		let randomNum = Math.floor(Math.random() * memeArr.length);
		let randomUrl = memeArr[randomNum].url;
		setMeme((prev) => {
			return {
				...prev,
				memeImg: randomUrl,
			};
		});
	}
	return (
		<div className="meme-area">
			<div className="container">
				<div className="form">
					<input className="input-1" type="text" name="toptext" value={meme.toptext} onChange={handelChange}></input>
					<input className="input-2" type="text" name="bottomtext" value={meme.bottomtext} onChange={handelChange}></input>
					<button onClick={getImg}>Get a new meme image 🖼</button>
				</div>
				<div className="pic">
					<div className="top">
						<h1>{meme.toptext}</h1>
					</div>
					<img src={meme.memeImg} alt="" />
					<div className="bottom">
						<h1>{meme.bottomtext}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;
