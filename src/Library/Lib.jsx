import { useEffect, useState } from 'react';
import axios from 'axios'
import '../libCss/bootstrap.min.css';
import '../libCss/tooplate-style.css';
import { Link } from 'react-router-dom';


const Lib = () => {

    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchBooks = async (query) => {
            const url = query ? `https://api.itbook.store/1.0/search/${query}` : 'https://api.itbook.store/1.0/search/new';
            try {
                const response = await axios.get(url);
                setBooks(response.data.books);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks(searchQuery);
    }, [searchQuery]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };



    return (
        <div className="body">


            <div className="container">
                <header className="tm-site-header">
                    <h1 className="tm-site-name">Book-Shelf</h1>
                    <p className="tm-site-description">Your Online IT Library</p>

                    <nav className="navbar navbar-expand-md tm-main-nav-container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tmMainNav" aria-controls="tmMainNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse tm-main-nav" id="tmMainNav">
                            <ul className="nav nav-fill tm-main-nav-ul">
                                <li className="nav-item"><a className="nav-link" href="/library">Home</a></li>
                                {/* <li className="nav-item"><Link className="nav-link active" to="/book-preview">Catalogs</Link></li> */}
                            </ul>
                        </div>
                    </nav>
                </header>

                <div className="tm-main-content">
                    <section className="tm-margin-b-l">
                        <div className='header'>
                            <h2 className="tm-main-title">Welcome to our online library</h2>

                            <div class="form-group">
                                <input type="search"
                                    className="form-control"
                                    placeholder="Search for a book here eg. Cracking the Coding Interview"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div>

                        <p>Search for interesting and informative IT related books that pique your interest.</p>

                        <div className="tm-gallery">
                            <h2 className="tm-blue-text tm-b-p">Available Books:</h2>
                            <div className="row">
                                {books.map((book) => (
                                    <figure key={book.isbn13} className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                        <Link to={`/book-preview/${book.isbn13}`}>
                                            <div className="tm-gallery-item-overlay">
                                                <img src={book.image} alt="Image" className="img-fluid tm-img-center" />
                                            </div>

                                            <p className="tm-figcaption">{book.title}</p>
                                        </Link>
                                    </figure>
                                ))}
                            </div>
                        </div>

                    </section>

                </div>

                <footer>
                    Copyright &copy; <span>2024</span> Book-Shelf
                </footer>
            </div>


        </div>
    );
}

export default Lib;