'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { InstagramIcon, LinkedinIcon, TwitterIcon } from '../Icons';
import Link from 'next/link';

const Footer = () => {
	const { 
		register, 
		handleSubmit, 
		formState: { errors } 
	} = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);
	return (
		<footer className='mt-16 rounded-2xl border-2 border-black dark:border-white bg-white dark:bg-black m-10 flex flex-col items-center text-black dark:text-light'>
			<h3 className='mt-16 font-medium text-center capitalize text-4x px-4'>
				historias interesantes | recuerdos | películas
			</h3>
			<p className='mt-5 px-4 text-center w-3/5 font-light text-base'>relatos visuales y experiencias personales. comparte conmigo este viaje a través de fotografías y momentos únicos.</p>

			<form onSubmit={handleSubmit(onSubmit)} className='mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4'>
				<input 
					type="email" 
					placeholder="Enter your email" 
					{...register("email", { required: true })}
					className='w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'
				/>
				<input type="submit" className='bg-dark text-light cursor-pointer font-medium rounded px-5 py-1' />
			</form>

			<div className='flex items-center mt-8'>
				<a className="inline-block w-6 h-6 mr-4"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
				<a className="inline-block w-6 h-6 mr-4"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
				<a className="inline-block w-6 h-6 mr-4"><InstagramIcon className="hover:scale-125 transition-all ease duration-200" /></a>
			</div>
			
			<div className='w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-center'>
				<div className='text-center'>
						hecho con &hearts; por <a href='cristiandussan.com' className='underline'>cristian dussán</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer