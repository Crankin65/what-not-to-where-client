"use client";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon} from "@/Icons/Tailwind Icons";

const navigation = [
	{ id:0, name: 'Dashboard', href: '#', current: true },
	{ id:1, name: 'Team', href: '#', current: false },
	{ id:2, name: 'Projects', href: '#', current: false },
	{ id:3, name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Navbar2() {
	return (
		<nav as='nav' className='bg-gray-800'>
			<div className=' flex  mx-auto px-2 justify-around sm:px-6 lg:px-8'>
				<div className='flex justify-start'>
					icon
				</div>

				<div className='flex flex-row items-center justify-items-center'>
					<ul className='flex flex-row justify-around'>
						{navigation.map((item) => (
								<li className='flex text-white font-normal text-sm' key={item.id}> {item.name} </li>
						))}
						<li>test</li>
					</ul>
				</div>

			</div>
		</nav>
	)
}


