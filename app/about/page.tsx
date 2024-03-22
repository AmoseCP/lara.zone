import Image from "next/image";

export default function About() {
  const people = [
    {"name": "Amose Ding", "id": 1234, "sex": "male", "imageUrl": "https://images.pexels.com/photos/17037983/pexels-photo-17037983/free-photo-of-sunbeds-on-beach.jpeg"},
    {"name": "Lois Li", "id": 1235, "sex": "female", "imageUrl": "https://images.pexels.com/photos/19480536/pexels-photo-19480536/free-photo-of-tropical-leaves-shadow-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {"name": "Lara Li", "id": 1236, "sex": "female", "imageUrl": "https://images.pexels.com/photos/20278849/pexels-photo-20278849/free-photo-of-a-woman-in-a-black-dress-poses-in-front-of-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {"name": "Shiqi Ha", "id": 1237, "sex": "female", "imageUrl": "https://images.pexels.com/photos/6200867/pexels-photo-6200867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ];
  return (
    <>
      <div className="space-y-9">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            <Image 
              className= "h-12 w-12" 
              src="/img/chat.svg" 
              alt="chat icon" 
              width={12} 
              height={12}
              />
          </div>
          <div>
            <div className="text-xl font-medium text-green">ChitChat</div>
            <p className="text-slate-500">You have a new message!</p>
          </div>
        </div>
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <Image 
            src="/img/erin-lindford.jpg" 
            alt="Woman's Face"
            width={96}
            height={96} 
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-black font-semibold">Erin Lindford</p>
              <p className="text-slate-500 font-medium">Product Engineer</p>
            </div>
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
          </div>
        </div>
      </div>
      <button className="bg-sky-500 hover:bg-sky-700 rounded-full">Save</button>
      <button className="dark:md:hover:bg-fuchsia-600">delete</button>
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">edit</button>
      <div>
        <ul role="list" className="p-6 divide-y divide-slate-200">
          {people.map((person, index) => (
            <li key={person.id} className="flex py-4 first:pt-0 last:pb-0 odd:bg-violet-500 even:bg-slate-500">
              <Image src={person.imageUrl} alt="person image" width={60} height={60} className="h-10 w-10 rounded-full"/>
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-slate-900">{person.name}</p>
                <p className="text-sm font-medium text-slate-900">{person.sex}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <form action="">
          <label htmlFor="" className="block">
            <span className="block text-sm font-medium text-slate-700">Username</span>
            <input type="text" value="tbone" disabled className="mt-1 block w-100 px-3 py-2 bg-white border border-slate-300 rounded-sm text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
          </label>
        </form>
      </div>
    </>
  );
}
