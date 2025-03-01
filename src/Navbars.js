import React, { useState, useEffect } from 'react';

function Navbars() {
  // State to store the search query and filtered movie list
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]); // To store movie names fetched from the API

  // Fetch movie names from the API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:9000/fetching/movies'); // Replace with your actual API URL
        const movieData = await response.json();
        setMovies(movieData); // Store the movie data
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  // Filter movies based on the search query
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = movies.filter(movie =>
      movie.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <nav className="bg-orange-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=fuchsia&shade=300"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="rounded-md px-3 py-2 text-lg font-medium text-green-400 hover:bg-blue-100 hover:text-pink-800"
                  >
                    Signin
                  </a>
                  <a
                    href="/movie"
                    className="rounded-md px-3 py-2 text-lg font-medium text-green-400 hover:bg-blue-100 hover:text-pink-800"
                  >
                    Movies
                  </a>
                  <a
                    href="/history"
                    className="rounded-md px-3 py-2 text-lg font-medium text-green-400 hover:bg-blue-100 hover:text-pink-800"
                  >
                    BookingsList
                  </a>
                  {/* Search Bar */}
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="rounded-md px-3 py-2 text-lg text-zinc-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                      placeholder="Search..."
                    />
                    {/* Display filtered movies */}
                    {searchQuery && (
                      <ul className="absolute z-10 bg-white shadow-lg max-h-48 overflow-y-auto w-full mt-1">
                        {filteredMovies.length > 0 ? (
                          filteredMovies.map((movie, index) => (
                            <li key={index} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                              {movie.movie_name}
                            </li>
                          ))
                        ) : (
                          <li className="px-3 py-2 text-gray-500">No results found</li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbars;
