

// 'use client'
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Define types for the response data
// type VideoSource = {
//   id: string;
//   published_at: string;
//   score: number;
//   title: string;
//   url: string;
// }

// type SearchResponse = {
//   answer: string;
//   sources: VideoSource[];
// }

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [response, setResponse] = useState<SearchResponse | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [validationError, setValidationError] = useState<string | null>(null);
  
//   // State for typing animation
//   const [displayText, setDisplayText] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [showSources, setShowSources] = useState(false);

//   // Handle search form submission
//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setShowSources(false);
    
//     if (!searchQuery.trim()) {
//       setValidationError('Please enter a search term');
//       return;
//     }
    
//     setIsLoading(true);
//     setResponse(null);
//     setDisplayText('');
    
//     try {
//       const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, {
//         query: searchQuery.trim()
//       });
//       setResponse(result.data);
//       setIsTyping(true);
//     }
//     catch (err) {
//       setError("Failed to fetch videos please try again");
//       console.log("Search Error", err);
//     }
//     finally {
//       setIsLoading(false);
//     }
//   }

//   // Handle typing animation
//   useEffect(() => {
//     if (!response || !isTyping) return;
    
//     let index = 0;
//     const text = response.answer;
//     const typingInterval = setInterval(() => {
//       if (index <= text.length) {
//         setDisplayText(text.substring(0, index));
//         index++;
//       } else {
//         clearInterval(typingInterval);
//         setIsTyping(false);
//         setTimeout(() => setShowSources(true), 500); // Show sources after typing is complete
//       }
//     }, 20); // Adjust typing speed here
    
//     return () => clearInterval(typingInterval);
//   }, [response, isTyping]);

//   return (
//     <main className="min-h-screen p-8">
//       <h1 className="text-2xl font-bold mb-8">SEARCH ON OVERPOWERED</h1>
      
//       {/* Search Form */}
//       <form onSubmit={handleSearch} className="mb-8 flex gap-2">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => {
//             setSearchQuery(e.target.value);
//             if (validationError) setValidationError(null);
//           }}
//           placeholder="Search videos..."
//           className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Searching...' : 'Search'}
//         </button>
//       </form>
      
//       {/* Show validation error */}
//       {validationError && (
//         <p className="text-red-500 text-sm">{validationError}</p>
//       )}
      
//       {/* Show initial prompt below the search bar */}
//       {!searchQuery && !response && (
//         <p className="text-gray-500 text-center">Search through all videos from Overpowered.AI to get relevant information</p>
//       )}
      
//       {/* Loading State */}
//       {isLoading && (
//         <div className="text-center">Loading...</div>
//       )}
      
//       {/* Error State */}
//       {error && (
//         <div className="text-red-500 mb-4">{error}</div>
//       )}
      
//       {/* Answer Section - Shows typing effect */}
//       {response && (
//         <div className="mb-8">
//           <p className="text-base leading-relaxed">{displayText}</p>
//         </div>
//       )}
      
//       {/* Sources/Results - Shows after typing is complete */}
//       {response && showSources && (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//           {response.sources.slice(0, 3).map((video) => (
//             <div
//               key={video.id}
//               className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
//             >
//               <h2 className="font-semibold mb-2">{video.title}</h2>
//               <p className="text-sm text-gray-600">
//                 Published: {new Date(video.published_at).toLocaleDateString()}
//               </p>
//               <a
//                 href={video.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline mt-2 block"
//               >
//                 Watch Video
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }

// 'use client'
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Define types for the response data
// type VideoSource = {
//   id: string;
//   published_at: string;
//   score: number;
//   title: string;
//   url: string;
// }

// type SearchResponse = {
//   answer: string;
//   sources: VideoSource[];
// }

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [response, setResponse] = useState<SearchResponse | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [validationError, setValidationError] = useState<string | null>(null);
  
//   // State for typing animation
//   const [displayText, setDisplayText] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [showSources, setShowSources] = useState(false);

//   // Define green color for consistent use
//   const greenColor = '#00CC66'; // Green screen color

//   // Handle search form submission
//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setShowSources(false);
    
//     if (!searchQuery.trim()) {
//       setValidationError('Please enter a search term');
//       return;
//     }
    
//     setIsLoading(true);
//     setResponse(null);
//     setDisplayText('');
    
//     try {
//       const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, {
//         query: searchQuery.trim()
//       });
//       setResponse(result.data);
//       setIsTyping(true);
//     }
//     catch (err) {
//       setError("Failed to fetch videos please try again");
//       console.log("Search Error", err);
//     }
//     finally {
//       setIsLoading(false);
//     }
//   }

//   // Handle typing animation
//   useEffect(() => {
//     if (!response || !isTyping) return;
    
//     let index = 0;
//     const text = response.answer;
//     const typingInterval = setInterval(() => {
//       if (index <= text.length) {
//         setDisplayText(text.substring(0, index));
//         index++;
//       } else {
//         clearInterval(typingInterval);
//         setIsTyping(false);
//         setTimeout(() => setShowSources(true), 500); // Show sources after typing is complete
//       }
//     }, 20); // Adjust typing speed here
    
//     return () => clearInterval(typingInterval);
//   }, [response, isTyping]);

//   return (
//     <main className="min-h-screen p-8">
//       <h1 className="text-2xl font-bold mb-8">SEARCH ON OVERPOWERED</h1>
      
//       {/* Search Form */}
//       <form onSubmit={handleSearch} className="mb-8 flex gap-2">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => {
//             setSearchQuery(e.target.value);
//             if (validationError) setValidationError(null);
//           }}
//           placeholder="Search videos..."
//           className="flex-grow p-3 rounded-lg border focus:outline-none"
//           style={{ borderColor: greenColor, boxShadow: isLoading ? `0 0 0 1px ${greenColor}` : 'none' }}
//         />
//         <button
//           type="submit"
//           className="text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
//           style={{ backgroundColor: greenColor, hover: { backgroundColor: '#00AA55' } }}
//           disabled={isLoading}
//         >
//           {isLoading ? 'Searching...' : 'Search'}
//         </button>
//       </form>
      
//       {/* Show validation error */}
//       {validationError && (
//         <p className="text-red-500 text-sm">{validationError}</p>
//       )}
      
//       {/* Show initial prompt below the search bar */}
//       {!searchQuery && !response && (
//         <p className="text-gray-500 text-center">Search through all videos from Overpowered.AI to get relevant information</p>
//       )}
      
//       {/* Loading State */}
//       {isLoading && (
//         <div className="text-center">Loading...</div>
//       )}
      
//       {/* Error State */}
//       {error && (
//         <div className="text-red-500 mb-4">{error}</div>
//       )}
      
//       {/* Answer Section - Shows the Overpowered AI prefix and typing effect */}
//       {response && (
//         <div className="mb-8">
//           <p className="text-base leading-relaxed">
//             <span style={{ color: greenColor, fontWeight: 'bold' }}>Overpowered AI: </span>
//             {displayText}
//           </p>
//         </div>
//       )}
      
//       {/* Sources/Results - Shows after typing is complete */}
//       {response && showSources && (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//           {response.sources.slice(0, 3).map((video) => (
//             <div
//               key={video.id}
//               className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
//             >
//               <h2 className="font-semibold mb-2">{video.title}</h2>
//               <p className="text-sm text-gray-600">
//                 Published: {new Date(video.published_at).toLocaleDateString()}
//               </p>
//               <a
//                 href={video.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline mt-2 block"
//                 style={{ color: greenColor }}
//               >
//                 Watch Video
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }

'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";

// Define types for the response data
type VideoSource = {
  id: string;
  published_at: string;
  score: number;
  title: string;
  url: string;
}

type SearchResponse = {
  answer: string;
  sources: VideoSource[];
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [response, setResponse] = useState<SearchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [buttonHover, setButtonHover] = useState(false);
  
  // State for typing animation
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSources, setShowSources] = useState(false);

  // Define green color for consistent use
  const greenColor = '#00CC66'; // Green screen color
  const darkerGreen = '#00AA55'; // Darker green for hover

  // Handle search form submission
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setShowSources(false);
    
    if (!searchQuery.trim()) {
      setValidationError('Please enter a search term');
      return;
    }
    
    setIsLoading(true);
    setResponse(null);
    setDisplayText('');
    
    try {
      const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, {
        query: searchQuery.trim()
      });
      setResponse(result.data);
      setIsTyping(true);
    }
    catch (err) {
      setError("Failed to fetch videos please try again");
      console.log("Search Error", err);
    }
    finally {
      setIsLoading(false);
    }
  }

  // Handle typing animation
  useEffect(() => {
    if (!response || !isTyping) return;
    
    let index = 0;
    const text = response.answer;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTimeout(() => setShowSources(true), 500); // Show sources after typing is complete
      }
    }, 20); // Adjust typing speed here
    
    return () => clearInterval(typingInterval);
  }, [response, isTyping]);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">SEARCH ON OVERPOWERED</h1>
      
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8 flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (validationError) setValidationError(null);
          }}
          placeholder="Search videos..."
          className="flex-grow p-3 rounded-lg border focus:outline-none"
          style={{ borderColor: greenColor, boxShadow: isLoading ? `0 0 0 1px ${greenColor}` : 'none' }}
        />
        <button
          type="submit"
          className="text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
          style={{ backgroundColor: buttonHover ? darkerGreen : greenColor }}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      {/* Show validation error */}
      {validationError && (
        <p className="text-red-500 text-sm">{validationError}</p>
      )}
      
      {/* Show initial prompt below the search bar */}
      {!searchQuery && !response && (
        <p className="text-gray-500 text-center">  Search through all videos from Overpowered.AI to get relevant information (Currently under development, please use these queries to test: Tell me about Midjourney , Text to image tools, Tell me about Suno AI)
 </p>

      )}
      
      {/* Loading State */}
      {isLoading && (
        <div className="text-center">Loading...</div>
      )}
      
      {/* Error State */}
      {error && (
        <div className="text-red-500 mb-4">{error}</div>
      )}
      
      {/* Answer Section - Shows the Overpowered AI prefix and typing effect */}
      {response && (
        <div className="mb-8">
          <p className="text-base leading-relaxed">
            <span style={{ color: greenColor, fontWeight: 'bold' }}>Overpowered AI: </span>
            {displayText}
          </p>
        </div>
      )}
      
      {/* Sources/Results - Shows after typing is complete */}
      {response && showSources && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {response.sources.slice(0, 3).map((video) => (
            <div
              key={video.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h2 className="font-semibold mb-2">{video.title}</h2>
              <p className="text-sm text-gray-600">
                Published: {new Date(video.published_at).toLocaleDateString()}
              </p>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline mt-2 block"
                style={{ color: greenColor }}
              >
                Watch Video
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}