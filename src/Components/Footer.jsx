/** @format */

import React from "react";
import { localAPI } from "..";
export default function Footer() {
	const { socialIcons } = localAPI;
	const { footerLinks } = localAPI;

	return (
		<footer className="bg-black_global w-full py-md_global flex justify-center max-small:justify-start items-center">
			<section className="w-fit lg:px-lg_global text-slate-400 flex-col flex  gap-5">
				<div className="flex w-fit  justify-start gap-5 items-center">
					{socialIcons.map((link, index) => (
						<img
							className="w-8 cursor-pointer hover:scale-110 transition-all duration-200"
							key={index}
							src={link}
							alt={index}
						/>
					))}
				</div>
				<div>
					<ul className="grid place-content-start gap-x-7 max-small:grid-cols-1 max-sm:grid-cols-2 gap-y-1 grid-cols-4">
						{footerLinks.map((link, index) => (
							<li
								className="hover:text-white transition-all text-sm duration-200 cursor-pointer whitespace-nowrap "
								key={index}
							>
								{link}
							</li>
						))}
					</ul>
				</div>
				<p className="text-sm">
					&copy; 1997-{new Date().getFullYear()} Netflix, Inc.
				</p>
			</section>
		</footer>
	);
}
