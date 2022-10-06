import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";

const Header: NextComponentType = () => {
return(
<div className="grid  text-center grid-cols-6 gap-6 rounded px-2 border border-black">
    <div className="flex justify-start align-middle">
    <Image src="/../public/favicon.ico" alt="" className="w-8 rounded flex-shrink-0" height={50} width={50}/>
    </div>
    <div className="pt-3">
        <Link href={"/event/schedule"}>Event Schedule</Link>
    </div>
    <div className="pt-3">
        <Link href={"/about"}>How it works</Link>   
    </div>
        <div className="pt-3">
    <Link href={"/joinGroupChat"}>Join a Sports Community</Link>
        </div>
    <div className="pt-3">
        <Link href={"/login"}>Log In</Link>
    </div>
    <div className="pt-3">
        <Link href={"/register"}>Sign Up</Link>
    </div>
    
    
    
</div>
);
}
export default Header;
