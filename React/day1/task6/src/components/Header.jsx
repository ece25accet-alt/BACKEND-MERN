function Header(){

return(<>
<header className="bg-black text-white p-5 flex justify-between">

<div className="flex-col pl-5 ">
<img src="./logo.png" className="h-15 w-15"></img>
<h1 className="text-blue-400 flex justify-center text-xl font-extrabold ">REACT</h1>
</div>

<nav className="flex items-center justify-around pr-10 pl-10 bg-amber-100 rounded-2xl">
<ul className="flex gap-10 ">
<li className=" text-black text-xl">Home</li>
<li className=" text-black text-xl">About</li>
<li className=" text-black text-xl">Contact</li>
</ul>
</nav>

</header>
</>
)

}

export default Header;