import { Link, useParams } from 'react-router-dom';
import '../libCss/bootstrap.min.css';
import '../libCss/tooplate-style.css';
import starImg from './img/star.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PreviewBook = () => {
    const { isbn13 } = useParams();
    const [book, setBook] = useState(null);
    const [moreBooks, setMoreBooks] = useState([]);

    useEffect(() => {
        const url = `https://api.itbook.store/1.0/books/${isbn13}`;

        axios.get(url)
            .then(response => setBook(response.data))
            .catch(error => console.error('Error fetching book details:', error));
    }, [isbn13]);


    useEffect(() => {
        if (book) {
            // const publisher = document.getElementById('book-pub')?.textContent;
            const publisher = book.publisher.replace(/\s+/g, '-');


            const publisherUrl = `https://api.itbook.store/1.0/search/${publisher}`;

            axios.get(publisherUrl)
                .then(response => setMoreBooks(response.data.books))
                .catch(error => console.error('Error fetching more books:', error));
        }
    }, [book]);

    if (!book) {
        return <div>Loading...</div>;
    }

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
                                <li className="nav-item"><Link className="nav-link active" to="/library"> Go Back</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <div className="tm-main-content no-pad-b">
                    <section className="row tm-item-preview">
                        <div className="col-md-6 col-sm-12 mb-md-0 mb-5">
                            <img src={book.image} alt="Book cover" className="img-fluid tm-img-center-sm" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h2 className="tm-blue-text tm-b-p">{book.title}</h2>
                            <p className="tm-margin-b-p">{book.subtitle}</p>
                            <p className="tm-margin-b">{book.desc}</p>
                            <p className="tm-b-p">By: <a id='book-pub' href={`https://www.bing.com/search?q=${encodeURIComponent(book.authors)}`} className="tm-blue-text">{book.authors}</a></p>
                            <p className="tm-blue-text tm-margin-b-s">Release: {book.year}</p>
                            <p className="tm-blue-text tm-margin-b-s">Publisher(s):
                                <a id='book-pub' href={`https://www.bing.com/search?q=${encodeURIComponent(book.publisher)}`} className="tm-blue-text">{book.publisher}</a>
                            </p>
                            <p className="tm-blue-text tm-margin-b-s">Pages: {book.pages}</p>
                            <p className="tm-blue-text tm-margin-b">Rating: {book.rating}<img src={starImg} alt="Star image" /></p>
                        </div>
                    </section>

                    <div className="tm-gallery no-pad-b">
                        <h3 className="tm-blue-text tm-margin-b-p">More from this Publisher</h3>

                        <div className="row">
                            {moreBooks.map((book) => (
                                <figure key={book.isbn13} className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item mb-5">
                                    <a href={`/book-preview/${book.isbn13}`}>
                                        <div className="tm-gallery-item-overlay">
                                            <img src={book.image} alt="Book cover" className="img-fluid tm-img-center" />
                                        </div>
                                        <p className="tm-figcaption no-pad-b">{book.title}</p>
                                    </a>
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>

                <footer>
                    Copyright &copy; <span>2024</span> Book-Shelf
                </footer>
            </div>
        </div>
    );
}

export default PreviewBook;
