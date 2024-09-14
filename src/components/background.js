import '../index.css';

function Background() {
  return (

    <div className='fixed w-full h-screen z-[2]'>
        <div className="absolute top-[5%] w-full py-10 flex justify-center h-screen bg-zinc-800">
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10rem] text-semibold text-zinc-900 tracking-tighter'>Docs.</h1>
        </div>
    </div>
  );
}

export default Background;
