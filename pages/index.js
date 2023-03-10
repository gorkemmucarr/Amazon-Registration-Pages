import Head from "next/head";
import Link from "next/link";

export default function signin (){
    return(
      
      <>
        <Head>
            <title>Amazon Sign In</title>
            <link rel="icon" href="/amazon.jpg" />
        </Head>
       
       <div className="w-full flex justify-center items-center">
            <div className="big-state-500 max-w-[348px] w-min-[348px]">

                {/** Logo */}
                <div className=" flex justify-center">
                    <div className="max-w[348px] flex justify-center">
                        <img src="/Amazon.jpg" alt="amazon" className="w-24 h-24"/>
                    </div>
                </div>

                {/** Main */}
                <div className="border-2 border-gray-400 rounded-lg min-h-[287px] p-6 flex flex-col">
                <h2 className="text-2xl font-bold">Sign In</h2>
                <span className="font-semibold text-sm">Email or mobile phone number</span>
                <input type="text" className="mt-2 border-2 border-gray-300 h-8 focus:outline-orange-500 pl-2" required/>
                <button type="submit" className=" bg-gradient-to-r bg-yellow-400 from-yellow-200 mt-2 rounded-lg p-1 hover:bg-yellow-500">Continue</button>
                <span className="text-xs mt-2">By continuing, you agree to Amazon's
                      <a href="#" className="text-blue-700 ml-1 hover:text-red-400 text-decoration-line: underline">Conditions of Use</a> 
                      <span className="ml-1">and </span> 
                      <a href="#" className="text-blue-700 ml-1 hover:text-red-400 text-decoration-line: underline">Privacy Notice.</a>
                     </span>
                     <div className="flex items-center mt-5">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <a href="#" className="text-xs text-blue-700 hover:text-red-400 text-decoration-line: underline">Need Help?</a>

                     </div>
                </div>

                <div className="flex flex-col items-center py-4 min-h-[100px]">
                   <hr/> 
                   <span className="text-gray-500 text-xs">New To Amazon</span>
                    <Link href="/create" className="py-4 w-full">
                    <button className="border-2 border-gray-400 bg-gradient-to-br bg-gray-50 from-gray-100 hover:bg-gray-300 p-2 mt-2 rounded-md w-full font-serif text-sm text-gray-600 text-base ">Create your Amazon account</button>
                    </Link>
                </div>
            </div> 
        </div>
                <div className="flex justify-center mt-4 bg-gradient-to-br bg-gray-50 from-gray-100 p-28 items-center">
                <div className="big-state-500 max-w-[348px] w-min-[348px]">
                        <a href="#" className="text-blue-700 hover:text-red-400 text-decoration-line: underline text-xs">Conditions of Use</a>
                        <a href="#" className="ml-4 text-blue-700 hover:text-red-400 text-decoration-line: underline text-xs">Privacy Notice</a>
                        <a href="#" className="ml-4 text-blue-700 hover:text-red-400 text-decoration-line: underline text-xs">Help</a>
                    <span className="text-xs flex justify-center items-center">© 1996-2023, Amazon.com, Inc. or its affiliates</span>
                    </div>
                </div>
       </> 
    )
}