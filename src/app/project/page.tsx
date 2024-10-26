// src/app/project/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Project  ()  {
  return (
    <div className="p-8">
      <div className="text-center font-extrabold text-3xl mb-6 text-gray-700">
        <h1>My Projects</h1>
      </div>
      
      {/* Project containers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">

        {/* Project 1 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 ">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black">ATM Machine</h2>
          <Image 
            src="/project1.png"
            alt="ATM Machine" 
            className="mb-4 rounded" 
            width={300}
            height={250}
          />
          <Link href="https://updated-atm.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Click here
          </Link>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 h-auto">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black">Simple Calculator</h2>
          <Image 
            src="/project2.png"
            alt="Simple Calculator" 
            className="w-full h-auto mb-4 rounded" 
            width={400}
            height={300}
          />
          <Link href="https://calculator-neon-five-60.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline ">
            Click here
          </Link>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 h-auto">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black">Number Guessing Game</h2>
          <Image 
            src="/project3.png"
            alt="Number Guessing Game" 
            className="w-full h-auto mb-4 rounded" 
            width={400}
            height={300}
          />
          <Link href="https://number-game-bice.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Click here
          </Link>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 h-auto">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black">Quiz</h2>
          <Image 
            src="/project4.png"
            alt="Quiz" 
            className="w-full h-auto mb-4 rounded" 
            width={400}
            height={300}
          />
          <Link href="https://quize-sage.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Click here
          </Link>
        </div>

        {/* Project 5 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 h-auto">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black">Word Counter</h2>
          <Image 
            src="/project5.png"
            alt="Word Counter" 
            className="w-full h-auto mb-4 rounded" 
            width={400}
            height={300}
          />
          <Link href="https://word-counter-eight-chi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Click here
          </Link>
        </div>

        {/* Project 6 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 h-auto">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black">To-Do List</h2>
          <Image 
            src="/project6.png"
            alt="To-Do List" 
            className="w-full h-auto mb-4 rounded" 
            width={400}
            height={300}
          />
          <Link href="https://todo-list-eta-ecru.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Click here
          </Link>
        </div>

        {/* Project 7 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 h-auto">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black">My Bank</h2>
          <Image 
            src="/project7.png"
            alt="My Bank" 
            className=" mb-4 rounded" 
            width={400}
            height={300}
          />
          <Link href="https://my-bank-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Click here
          </Link>
        </div>

        {/* Project 8 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 h-auto">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black">Student Management System</h2>
          <Image 
            src="/project8.png"
            alt="Student Management System" 
            className="w-full h-auto mb-4 rounded" 
            width={400}
            height={300}
          />
          <Link href="https://student-manegment-system.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Click here
          </Link>
        </div>

        {/* Project 9 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 h-auto">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black">Currency Converter</h2>
          <Image 
            src="/project9.png"
            alt="Currency Converter" 
            className="w-full h-auto mb-4 rounded" 
            width={400}
            height={300}
          />
          <Link href="https://currency-converter-tawny-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Click here
          </Link>
        </div>

        {/* Project 10 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 h-auto">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black">Countdown Timer</h2>
          <Image 
            src="/project10.png"
            alt="Countdown Timer" 
            className=" mb-4 rounded" 
            width={400}
            height={300}
          />
          <Link href="https://countdown-timer-iota-neon.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Click here
          </Link>
        </div>

        {/* Project 11 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 ">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black">MY Resume </h2>
          <Image 
            src="/project11.png"
            alt="Dynamic Resume Builder" 
            className=" mb-4 rounded" 
            width={300}
            height={250}
          />
          <Link href="https://milestone-1-sage.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Click here
          </Link>
        </div>

        {/* Project 12 */}
        <div className="bg-gray-800 text-white text-center shadow-md rounded-lg p-6 ">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black"> Resume Builder</h2>
          <Image 
            src="/project12.png"
            alt="Editable Resume Builder" 
            className=" mb-4 rounded" 
            width={300}
            height={250}
          />
          <Link href="https://milestone-5-eta-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Click here
          </Link>
        </div>

       

      </div>
    </div>
  );
};

