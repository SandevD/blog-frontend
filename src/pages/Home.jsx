import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
	const [posts, setPosts] = useState([]);

	const cat = useLocation().search;
	console.log(cat);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts${cat}`);
				setPosts(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [cat]);
	// const posts = [
	//   {
	//     id: 1,
	//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
	//     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	//   },
	//   {
	//     id: 2,
	//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
	//     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	//   },
	//   {
	//     id: 3,
	//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
	//     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	//   },
	//   {
	//     id: 4,
	//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
	//     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	//   },
	// ];

	const getText = (html) => {
		const doc = new DOMParser().parseFromString(html, "text/html");
		return doc.body.textContent;
	};

	return (
		<div className="bg-transparent pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 max-w-7xl mx-auto">
			<div className="inset-0 background-transparent">
				<div className="bg-white h-1/3 sm:h-2/3" />
			</div>
			<div className="max-w-7xl mx-auto">
				{/* <div className="text-center">
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
						From the blog
					</h2>
					<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
						libero labore natus atque, ducimus sed.
					</p>
				</div> */}
				<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					{Array.isArray(posts) &&
						posts.map((post) => (
							<div
								key={post.id}
								className="flex flex-col rounded-lg shadow-lg overflow-hidden"
							>
								<div className="flex-shrink-0">
									<img
										className="h-48 w-full object-cover"
										src={`../upload/${post.img}`}
										alt=""
									/>
								</div>
								<div className="flex-1 bg-white p-6 flex flex-col justify-between">
									<div className="flex-1">
										<p className="text-sm font-medium text-indigo-600">
											<a href="/" className="hover:underline">
												{post.category}
											</a>
										</p>
										<a href={post.href} className="block mt-2">
											<p className="text-xl font-semibold text-gray-900">
												{post.title}
											</p>
											<p className="mt-3 text-base text-gray-500">
												{getText(post.desc)}
											</p>
										</a>
									</div>
									<div className="mt-6 flex items-center">
										<div className="ml-3">
											<Link className="link" to={`/post/${post.id}`}>
												<div className="flex space-x-1 text-sm text-gray-500">
													<span aria-hidden="true">&middot;</span>
													<span>Read More</span>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Home;
