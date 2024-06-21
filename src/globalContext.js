import {createContext, useState } from "react";

// context storing all CRUD handling of Books and Author
export const GlobalContext = createContext();


export const GlobalProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [editBook, setEditBook] = useState(null);

    const [authors, setAuthors] = useState([]);
    const [editAuthor, setEditAuthor] = useState(null);
    // handlers for books
    const addBook = (data) =>{
        console.log(data);
        setBooks([...books,data])
    }


    const editedBook = (index) => {
        console.log(index)
        setEditBook(index)
    }

    const updateBook = (data) => {
        let updatedBooksList = books.map((book,index) => (
            index===editBook?data:book
        ));
        setBooks(updatedBooksList);
        setEditBook(null)
    }

    const removeBook = (indexData) => {
        let restBookList = books.filter((book,index) => index!== indexData);
        setBooks(restBookList);
    }

    // handlers for authors
    const addAuthor = (data) =>{
        console.log(data);
        setAuthors([...authors,data])
    }


    const editedAuthor = (index) => {
        console.log(index)
        setEditAuthor(index)
    }

    const updateAuthor = (data) => {
        let updatedAuthorsList = authors.map((author,index) => (
            index===editAuthor?data:author
        ));
        setAuthors(updatedAuthorsList);
        setEditAuthor(null)
    }

    const removeAuthor = (indexData) => {
        let restAuthorList = authors.filter((author,index) => index!== indexData);
        setAuthors(restAuthorList);
    }

    return (
        <GlobalContext.Provider value={{books, editBook, addBook, editedBook, updateBook, removeBook, authors, editAuthor, addAuthor, editedAuthor, updateAuthor, removeAuthor}}>
            {children}
        </GlobalContext.Provider>
    )
}


