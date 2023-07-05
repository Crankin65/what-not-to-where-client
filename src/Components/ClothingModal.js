import React, {useState} from 'react'
import Image from "next/image";
import tanktopIcon from "@/Icons/ClothingIcons/icons8-basketball-jersey-50.png";


export default function ClothingModal() {

	function createTankTopIcon() {
		return (
			<Image
				src={tanktopIcon}
				width={50}
				height={50}
				alt="Picture of the author"
			/>
		)
	}


	return(
		<div>
			<button className="btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button>
			<dialog id="my_modal_3" className="modal">
				<form method="dialog" className="modal-box">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					<h3 className="font-bold text-lg">Hello!</h3>
					<p className="py-4">Press ESC key or click on ✕ button to close</p>
				</form>
			</dialog>
		</div>
	)
}