import React from 'react'

const Categories = () => {
	return (
		<div className='w-full container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-10'>
			<div className='bg-red-800 h-9'>
				<h2>alterocio</h2>
			</div>
			<div className='bg-red-800'>
				<h2>kam</h2>
			</div>
			<div className='bg-red-800'>
				<h2>roxy</h2>
			</div>
		</div>
	)
}

export default Categories