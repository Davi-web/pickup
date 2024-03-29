import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import pickupLogo from "/public/favicon.ico";
import {signIn, signOut, useSession} from "next-auth/react";
import { useEffect } from "react";


const Header: NextComponentType = () => {
	const {data: session} = useSession();
	console.log(session)
	useEffect(() => {
		const burger = document.querySelectorAll(".navbar-burger");
		const menu = document.querySelectorAll(".nvabar-menu");
		if (burger && menu && burger.length && menu.length) {
			for(let i = 0; i < burger.length; i++) {
				burger[i]?.addEventListener("click", () => {
					for(let j = 0; j < menu.length; j++) {
						menu[j]?.classList.toggle("hidden");
					}
				});
			}
		}

		const close = document.querySelectorAll(".navbar-close");
		if (close && close.length) {
			for(let i = 0; i < close.length; i++) {
				close[i]?.addEventListener("click", () => {
					for(let j = 0; j < menu.length; j++) {
						menu[j]?.classList.toggle("hidden");
					}
				});
			}
		}
		const backdrop = document.querySelectorAll(".navbar-backdrop");
		if (backdrop && backdrop.length) {
			for(let i = 0; i < backdrop.length; i++) {
				backdrop[i]?.addEventListener("click", () => {
					for(let j = 0; j < menu.length; j++) {
						menu[j]?.classList.toggle("hidden");
					}
				}
				);
			}
		}

	}, []);
	
	// }, [])
    // Burger menus
    // const width = window?.innerWidth || 100;
    // if (typeof window !== "undefined" && typeof document !== "undefined") {
    //     document.addEventListener('DomContentLoaded', function() {
    //         const burger = document.querySelectorAll('.navbar-burger');
    //         const menu = document.querySelectorAll('.navbar-menu');
    
    //         if (burger.length && menu.length) {
    //             for (let i = 0; i < burger.length; i++) {
    //                 burger[i]?.addEventListener('click', function() {
    //                     for (let j = 0; j < menu.length; j++) {
    //                         menu[j]?.classList.toggle('hidden');
    //                     }
    //                 });
    //             }
    //         }
    
    //         // close
    //         const close = document.querySelectorAll('.navbar-close');
    //         const backdrop = document.querySelectorAll('.navbar-backdrop');
    
    //         if (close.length) {
    //             for (let i = 0; i < close.length; i++) {
    //                 close[i]?.addEventListener('click', function() {
    //                     for (let j = 0; j < menu.length; j++) {
    //                         menu[j]?.classList.toggle('hidden');
    //                     }
    //                 });
    //             }
    //         }
    
    //         if (backdrop.length) {
    //             for (let i = 0; i < backdrop.length; i++) {
    //                 backdrop[i]?.addEventListener('click', function() {
    //                     for (let j = 0; j < menu.length; j++) {
    //                         menu[j]?.classList.toggle('hidden');
    //                     }
    //                 });
    //             }
    //         }
    //     })
    // }
    
    
   

return(
    <div>
	<nav className="relative px-4 py-4 flex justify-between items-center bg-slate-50">
		{session?.user === undefined ? (
			<Link className="text-3xl font-bold leading-none cursor-pointer" href=".">
				<Image height={40} width={40} src={pickupLogo} alt="" style={{borderRadius:"50%"}}/>
			</Link>
		): (
			<Link className="text-3xl font-bold leading-none cursor-pointer" href="/">
				<img height={40} width={40} src={session.user.image!} alt={""} style={{borderRadius: "50%"}} referrerPolicy="no-referrer"/>
			</Link>
		)}
		
		<div className="lg:hidden">
			<button className="navbar-burger flex items-center text-purple-600 p-3">
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			
			<li><Link className="text-sm text-purple-600 font-bold" href="/">Home</Link></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><Link className="text-sm text-gray-400 hover:text-gray-500" href="/events/eventCreation">Create an Event!</Link></li>

			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><Link className="text-sm text-gray-400 hover:text-gray-500" href="/events/displayEvents">Event Schedule</Link></li>

			
		
		</ul>
		{session?.user === undefined && (
			<div className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200 cursor-pointer" onClick={()=> signIn()}>
            	Sign In
        	</div>
		)}
		{session?.user !== undefined &&(
			<div className="hidden lg:inline-block py-2 px-6 bg-purple-500 hover:bg-purple-600 text-sm text-white font-bold rounded-xl transition duration-200 cursor-pointer" onClick={()=> signOut()}>
            	Sign Out
        	</div>
		)}
		
		
	</nav>
	<div className="navbar-menu relative z-50 hidden">
		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<a className="mr-auto text-3xl font-bold leading-none" href="#">
					<svg className="h-12"  viewBox="0 0 100 100">
						<path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
					</svg>
				</a>
				<button className="navbar-close">
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
					</li>
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6">
					{session?.user  && (
						<div className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl" onClick={()=>signIn()}>Sign in</div>

					)}
					{!session?.user  && (
						<div className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"onClick={()=> signOut()}>Sign Out</div>
		
					)}
				</div>
				<p className="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2021</span>
				</p>
			</div>
		</nav>
	</div>
</div>);
    
{/* <div className="grid text-center grid-cols-6 gap-6 rounded px-2 border border-black">
    <div className="flex justify-start align-middle">
    <Image src="/../public/favicon.ico" alt="" className="w-8 rounded flex-shrink-1" height={50} width={50}/>
    </div>
    <div className="pt-3">
        <Link href={"/event/schedule"}>Schedules</Link>
    </div>
    <div className="pt-3">
        <Link href={"/about"}>About</Link>   
    </div>
        <div className="pt-3">
    <Link href={"/joinGroupChat"}>Community</Link>
        </div>
    <div className="pt-3">
        <Link href={"/login"}>Log In</Link>
    </div>
    <div className="pt-3">
        <Link href={"/register"}>Sign Up</Link>
    </div>
    
    
    
</div> */}
}
export default Header;
