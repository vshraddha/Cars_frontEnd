import React from 'react';
import './Pagination.css';
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (number) => {
        paginate(number);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            console.log('Previous button clicked');
            paginate(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < pageNumbers.length) {
            console.log('Next button clicked');
            paginate(currentPage + 1);
        }
    };

    return (
        <div>
            <nav>
                <div className='pagination'>
                    <Link
                        to={`/page/${currentPage - 1}`}
                        className={`page-item prev-button ${currentPage === 1 ? 'disabled' : ''
                            }`}
                        onClick={handlePrevClick}
                    >
                        Previous
                    </Link>

                    {pageNumbers.map((number) => (
                        <div
                            key={number}
                            className={`page-item ${currentPage === number ? 'active' : ''
                                }`}
                        >
                            <Link
                                to={`/page/${number}`}
                                className='page-link'
                                onClick={() => handlePageClick(number)}
                            >
                                {number}
                            </Link>
                        </div>
                    ))}

                    <Link
                        to={`/page/${currentPage + 1}`}
                        className={`page-item next-button ${currentPage === pageNumbers.length ? 'disabled' : ''
                            }`}
                        onClick={handleNextClick}
                    >
                        Next
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Pagination;
