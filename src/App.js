import './App.css';
import { useState } from 'react';
import Cards from "./components/Cards"
import array from "./components/cars_data.json"
import Pagination from "./components/Pagination"
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [cards] = useState(array)

  const[currentpage,setCurrentPage] = useState(1);
  const[postsPerPage] = useState(6);


  const indexOfLastPost = currentpage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts= cards.slice( indexOfFirstPost,indexOfLastPost )

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
<Router>
    <div className="App">
      

      <Cards information={currentPosts}/> 

      <Pagination 
      postsPerPage= {postsPerPage}
      totalPosts = {cards.length}
      paginate = {paginate}
       />

    </div>
    </Router>
  );
}

export default App;
