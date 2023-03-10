import Head from "next/head";

export default function create (){
    return(
        <>
       <Head>
            <title>Amazon Registration</title>
            <link rel="icon" href="/amazon.jpg" />
        </Head>

        <div className="w-full flex justify-center items-center">
            <div className="big-state-500 max-w-[348px] w-min-[348px]">

                {/** Logo */}
                <div className=" flex justify-center">
                    <div className="max-w[348px]flex justify-center">
                        <img src="/Amazon.jpg" alt="amazon" className="w-24 h-24"/>
                    </div>
                </div>

                {/** Main */}

                <div className="border-2 border-gray-400 rounded-lg min-h-[287px] p-6 flex flex-col">
                    <h1 className="text-2xl font-bold">Create Account</h1>
                    <span className="mt-2 font-semibold text-sm">Your name</span>
                    <input type="text" className="border-2 border-gray-400 rounded-md focus:outline-orange-400 p-1 mt-1 pl-2" required placeholder="First and last name"/>
                    <span className="mt-2 font-semibold text-sm">Mobile number or email</span>
                    <input type="text" className="border-2 border-gray-400 rounded-md focus:outline-orange-400 p-1 mt-1 pl-2" required/>
                    <span className="mt-2 font-semibold text-sm">Password</span>
                    <input type="text" className="border-2 border-gray-400 rounded-md focus:outline-orange-400 p-1 mt-1 pl-2" required placeholder="At least 6 characters"/>
                    
                    <div className="flex justify-center items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        <span className="text-xs font-mono ml-2">Passwords must be at least 6 characters</span>
                    </div>
                    <span className="mt-2 font-semibold text-sm">Re-enter password</span>
                    <input type="text" className="border-2 border-gray-400 rounded-md focus:outline-orange-400 p-1 mt-1 pl-2" />
                    <button className="bg-gradient-to-r bg-yellow-400 from-yellow-200 mt-2 rounded-lg p-1 hover:bg-yellow-500 ">Continue</button>
                    <span className="text-xs mt-5">By creating an account, you agree to Amazon's
                        <a href="#" className="text-blue-700 ml-1 text-decoration-line: underline hover:text-red-400">Conditions of Use</a>  
                         <span className="ml-1">and</span>
                         <a href="#" className="text-blue-700 ml-1 text-decoration-line: underline hover:text-red-400">Privacy Notice.</a> 
                         </span>

                         <div className="mt-10 bg-gray-100 border-2 border-gray-100 p-2 rounded-lg">
                            <span className="text-xs ">Already have an account? 
                                <a href="#" className=" ml-1 text-blue-700 hover:text-red-400 text-description-line: underline"> Sign in</a>
                                </span>
                                <span className="text-xs flex">Buying for work?
                                
                                    <a href="#" className="ml-1 text-blue-700 hover:text-red-400 text-description-line: underline flex justify-center items-center">Create a free business account
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                    </a>
                                     </span>                               
                         </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-4  bg-gradient-to-br bg-gray-50 from-gray-100 items-center p-7">
        <div className="big-state-500 max-w-[348px] w-min-[348px]">
                <a href="#" className=" text-blue-700 hover:text-red-400 text-description-line: underline text-xs">Conditions of Use</a>
                <a href="#" className="ml-6 text-blue-700 hover:text-red-400 text-description-line: underline text-xs">Privacy Notice</a>
                <a href="#" className="ml-6 text-blue-700 hover:text-red-400 text-description-line: underline text-xs"> Help</a> 
                <span className="text-xs flex justify-center items-center mt-2">© 1996-2023, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
        </> 
    )
}