"use client";
import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation";

export default function Home() {
const [inputVal, setInputVal] = useState("");
const {push} = useRouter()

const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
  push(`/prediction/${inputVal}`)
}

  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="p-4 shadow-md bg-white rounded-md">
      <h1 className="text-2xl font-semibold mb-4 text-black">Enter your name</h1>
    </div>
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className="w-full p-2 border border-gray-300 rounded text-black" type="text" placeholder="Type your name..." onChange={(e) => {setInputVal(e.target.value)}} value={inputVal} />
      <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white" type="submit">Submit</button>
    </form>
   </div>
  )
}
