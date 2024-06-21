import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SideNavBar from './components/SideNavBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Author from './components/Author';
import Books from './components/books';
import { GlobalProvider} from './globalContext';
import AddAuthorForm from './components/AddAuthorForm';
import EditAuthorForm from './components/EditAuthorForm';
import AddBookForm from './components/AddBookForm';
import EditBookForm from './components/EditBookForm';

// Contains routes for various pages
function App() {
  return (
    <GlobalProvider>
          <Router>
            <Routes>
              <Route path='/' element={<SideNavBar />} >
                <Route index element={<Home />} />
                <Route path='/books' element={<Books />} />
                  <Route path="/books/addBook" element={<AddBookForm />} />
                  <Route path="/books/editBook" element={<EditBookForm />} />                  
                <Route path='/author' element={<Author />} />
                  <Route path="/author/addAuthor" element={<AddAuthorForm />} />
                  <Route path="/author/editAuthor" element={<EditAuthorForm />} />                  
              </Route>
            </Routes>
          </Router>
    </GlobalProvider>
  );
}

export default App;
