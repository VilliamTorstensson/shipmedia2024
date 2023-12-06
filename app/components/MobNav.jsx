export default function MobNav () {

<nav  className='md:hidden flex justify-center fixed bottom-[40px] inset-x-0 mx-auto z-40 w-full' >
<div onClick={handleClick2} className={`bg-white shadow-sm px-5 py-3 rounded-full text-black font-sans text-2xl font-bold ${isOpen2 ? 'w-80' : 'w-content'}`}>
  <h1 className={`${isOpen2 ? 'hidden' : 'flex'}`} >N</h1>
  <ul className={`w-full justify-between flex ${isOpen2 ? 'flex' : 'hidden'}`}>
  <Link className='text-sm px-2 py-1 rounded-full bg-black text-white' href="#services">Services</Link>
  <Link className='text-sm px-2 py-1 rounded-full bg-black text-white' href="#work">Work</Link>
    <Link className='text-sm px-2 py-1 rounded-full bg-black text-white' href="#about">About</Link>
    
    
    <Link className='text-sm px-2 py-1 rounded-full bg-black text-white' href="#contact">Contact</Link>
  </ul>
</div>
</nav>
};