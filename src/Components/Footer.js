import React from 'react';
import Link from 'next/link'

export default function Footer() {
	return(
		<footer className="fixed bottom-0 z-20 bg-white rounded-lg shadow m-4 dark:bg-gray-800">
			<div className="w-full mx-auto max-w-screen-xl md:p-4 md:px-4 p-1 md:flex md:items-center md:justify-between sm:text-base text-sm">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 &nbsp;
				<Link href="https://cameronleerankin.com" className="hover:underline">Cameron Rankin</Link> &nbsp;
    </span>
				<ul className="flex flex-row flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 px-2">
					<li>
						<Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
					</li>
					<li>
						<Link href="https://cameronleerankin.com" className="mr-4 hover:underline md:mr-6">Website</Link>
					</li>
					<li>
						<Link href="cameron@cameronleerankin.com" className="hover:underline">Contact</Link>
					</li>
				</ul>
			</div>
		</footer>

	)
}