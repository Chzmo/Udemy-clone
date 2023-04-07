import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Search() {
  const {searchTerm} = useParams();
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
      <div className="min-h-screen ">
        {(!isLoading && searchResults) && 
          <>
            <h2>849 results for {searchTerm}</h2>
          </>
        }
      </div>
    </>
  )
}

export default Search