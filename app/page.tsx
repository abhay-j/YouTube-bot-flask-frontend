'use client'
import React, { useState } from "react";
import axios from 'axios'

// define a type for your video data 
type video = {
  id: string;
  published_at: string;
  score: number;
  title: string;
  url: string
}



export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState<video[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);

    if (!searchQuery.trim()) {
      setValidationError('Please enter a search term');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, {
        query: searchQuery.trim()
      });
      setVideos(response.data);
    }
    catch (err) {
      setError("Failed to fetch videos please try again");
      console.log("Search Error", err);
    }
    finally {
      setIsLoading(false);
    }
  }



  return (<main className="min-h-screen p-8">
    <h1 className="text-2xl font-bold mb-8 ">Search on Overpowered</h1>

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
        className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center"
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
    {!searchQuery && (
      <p className="text-gray-500 text-center">Search through all videos from Overpowered.AI to get relevant information</p>
    )}
    {/* Loading State */}
    {isLoading && (
      <div className="text-center">Loading...</div>
    )}

    {/* Error State */}
    {error && (
      <div className="text-red-500 mb-4">{error}</div>
    )}

    {/* Results */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {videos.map((video) => (
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
            className="text-blue-500 hover:underline mt-2 block"
          >
            Watch Video
          </a>
        </div>
      ))}
    </div>
  </main>
  );
}
