
    document.addEventListener('DOMContentLoaded', function () {
        const books = [
            // the books for Olevel in REB

            //Start in the S1
            { 
             title: "S1 Mathermatics Book",
             author: "Rwanda Education Borad", 
             category: "Mathematics", 
             year: 2024,
             source:".public/book/reb/Olevel/S1/Math S1-SB.pdf", 
             cover: ".public/book/img/reb.png", 
             page: 1
             },
            { 
            title: "S1 Physics Book", 
            author: "Rwanda Education Borad", 
            category: "Science", 
            year: 2024, 
            source: ".public/book/reb/Olevel/S1/Physics S1-SB.pdf",
            cover: ".public/book/img/reb.png", 
            page: 1 
            },
            { 
            title: "S1 Chemistry Book", 
            author: "Rwanda Education Borad", 
            category: "Science", 
            year: 2024, 
            source: ".public/book/reb/Olevel/S1/Chemistry S1-SB.pdf",
            cover: ".public/book/img/reb.png", 
            page: 1 
            },
            { 
            title: "S1 History Book", 
            author: "Rwanda Education Borad", 
            category: "History", 
            year: 2024, 
            source: ".public/book/reb/Olevel/S1/History S1-SB.pdf",
            cover: ".public/book/img/reb.png", 
            page: 1 
            },
            { 
            title: "S1 English Book", 
            author: "Rwanda Education Borad", 
            category: "Language", 
            year: 2024, 
            source: ".public/book/reb/Olevel/S1/English S1-SB.pdf",
            cover: ".public/book/img/reb.png", 
            page: 1 
            },
            { 
            title: "S1 Geograph", 
            author: "Rwanda Education Borad", 
            category: "Geograph", 
            year: 2024, 
            source: ".public/book/reb/Olevel/S1/Geography S1-SB.pdf",
            cover: ".public/book/img/reb.png", 
            page: 1 
            },
            { 
            title: "S1 Entrepreneurship Book", 
            author: "Rwanda Education Borad", 
            category: "Business", 
            year: 2024, 
            source: ".public/book/reb/Olevel/S1/Entrepreneurship S1-SB.pdf",
            cover: ".public/book/img/reb.png", 
            page: 1 
            },
            { 
            title: "S1 French Book", 
            author: "Rwanda Education Borad", 
            category: "Language", 
            year: 2024, 
            source: ".public/book/reb/Olevel/S1/FRENCH S1-SB.pdf",
            cover: ".public/book/img/reb.png", 
            page: 1 
            },
            { 
            title: "S1 Information Communication Technology Book", 
            author: "Rwanda Education Borad", 
            category: "Technology", 
            year: 2024, 
            source: ".public/book/reb/Olevel/S1/ICT S1-SB.pdf",
            cover: ".public/book/img/reb.png", 
            page: 1 
            },
            { 
            title: "S1 Kiswahili Book", 
            author: "Rwanda Education Borad", 
            category: "Geograph", 
            year: 2024, 
            source: ".public/book/reb/Olevel/S1/Kiswahili S1-SB.pdf",
            cover: ".public/book/img/reb.png", 
            page: 1 
            },
            { 
            title: "S1 Biology Book", 
            author: "Rwanda Education Borad", 
            category: "Geograph", 
            year: 2024, 
            source: "coming.html",
            cover: ".public/book/img/reb.png", 
            page: 1 
            },
            //Start In S2
            { 
                title: "S2 Mathermatics Book",
                author: "Rwanda Education Borad", 
                category: "Mathematics", 
                year: 2024,
                source:".public/book/reb/Olevel/S2/Math S2-SB.pdf", 
                cover: ".public/book/img/reb.png", 
                page: 1
                },
               { 
               title: "S2 Physics Book", 
               author: "Rwanda Education Borad", 
               category: "Science", 
               year: 2024, 
               source: ".public/book/reb/Olevel/S2/Physics S2-SB.pdf",
               cover: ".public/book/img/reb.png", 
               page: 2
               },
               { 
               title: "S2 Chemistry Book", 
               author: "Rwanda Education Borad", 
               category: "Science", 
               year: 2024, 
               source: ".public/book/reb/Olevel/S2/Chemistry S2-SB.pdf",
               cover: ".public/book/img/reb.png", 
               page: 2 
               },
               { 
               title: "S2 History Book", 
               author: "Rwanda Education Borad", 
               category: "History", 
               year: 2024, 
               source: ".public/book/reb/Olevel/S2/History S2-SB.pdf",
               cover: ".public/book/img/reb.png", 
               page: 2 
               },
               { 
               title: "S2 English Book", 
               author: "Rwanda Education Borad", 
               category: "Language", 
               year: 2024, 
               source: ".public/book/reb/Olevel/S2/English S2-SB.pdf",
               cover: ".public/book/img/reb.png", 
               page: 2 
               },
               { 
               title: "S2 Geograph", 
               author: "Rwanda Education Borad", 
               category: "Geograph", 
               year: 2024, 
               source: ".public/book/reb/Olevel/S2/Geography S2-SB.pdf",
               cover: ".public/book/img/reb.png", 
               page: 2 
               },
               { 
               title: "S2 Entrepreneurship Book", 
               author: "Rwanda Education Borad", 
               category: "Business", 
               year: 2024, 
               source: ".public/book/reb/Olevel/S2/Entrepreneurship S2-SB.pdf",
               cover: ".public/book/img/reb.png", 
               page: 2 
               },
               { 
               title: "S2 French Book", 
               author: "Rwanda Education Borad", 
               category: "Language", 
               year: 2024, 
               source: ".public/book/reb/Olevel/S2/French S2-SB.pdf",
               cover: ".public/book/img/reb.png", 
               page: 2 
               },
               { 
               title: "S2 Information Communication Technology Book", 
               author: "Rwanda Education Borad", 
               category: "Technology", 
               year: 2024, 
               source: ".public/book/reb/Olevel/S2/ICT S2-SB.pdf",
               cover: ".public/book/img/reb.png", 
               page: 2 
               },
               { 
               title: "S2 Kiswahili Book", 
               author: "Rwanda Education Borad", 
               category: "Geograph", 
               year: 2024, 
               source: ".public/book/reb/Olevel/S2/Kiswahili S2-SB.pdf",
               cover: ".public/book/img/reb.png", 
               page: 2 
               },
               { 
               title: "S2 Biology Book", 
               author: "Rwanda Education Borad", 
               category: "Geograph", 
               year: 2024, 
               source: ".public/book/reb/Olevel/S2/Biology S2-SB.pdf",
               cover: ".public/book/img/reb.png", 
               page: 2 
               },
            //Start In S3
        ];

        const booksGrid = document.getElementById('booksGrid');
        const pagination = document.getElementById('pagination');
        const searchInput = document.getElementById('search');
        const applyFiltersBtn = document.querySelector('.apply-filters');

        let currentPage = 1;
        const booksPerPage = 8;
        let filteredBooks = books;

        function renderBooks(page) {
            booksGrid.innerHTML = '';
            const start = (page - 1) * booksPerPage;
            const end = start + booksPerPage;
            const pageBooks = filteredBooks.slice(start, end);

            pageBooks.forEach(book => {
                const bookCard = `
                    <div class="book-card">
                        <div class="book-cover">
                            <img src="${book.cover}" alt="${book.title} Cover">
                        </div>
                        <div class="book-info">
                            <h3 class="book-title">${book.title}</h3>
                            <p class="book-author">by ${book.author}</p>
                            <div class="book-meta">
                                <span>${book.category}</span>
                                <span>${book.year}</span>
                            </div>
                            <div class="book-actions">
                                <a href="${book.source}" class="btn btn-secondary" id="book-preview-modal">Preview</a>
                                <a href="#" class="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                `;
                booksGrid.innerHTML += bookCard;
            });
        }

        function renderPagination() {
            pagination.innerHTML = '';
            const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

            // Previous button
            const prev = document.createElement('a');
            prev.href = '#';
            prev.className = 'page-number';
            prev.innerHTML = '&laquo;';
            prev.onclick = (e) => {
                e.preventDefault();
                if (currentPage > 1) {
                    currentPage--;
                    updatePagination();
                }
            };
            pagination.appendChild(prev);

            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                const pageLink = document.createElement('a');
                pageLink.href = '#';
                pageLink.className = 'page-number' + (i === currentPage ? ' active' : '');
                pageLink.textContent = i;
                pageLink.onclick = (e) => {
                    e.preventDefault();
                    currentPage = i;
                    updatePagination();
                };
                pagination.appendChild(pageLink);
            }

            // Next button
            const next = document.createElement('a');
            next.href = '#';
            next.className = 'page-number';
            next.innerHTML = '&raquo;';
            next.onclick = (e) => {
                e.preventDefault();
                if (currentPage < totalPages) {
                    currentPage++;
                    updatePagination();
                }
            };
            pagination.appendChild(next);
        }

        function updatePagination() {
            renderBooks(currentPage);
            renderPagination();
        }

        function applyFilters() {
            const query = searchInput.value.toLowerCase();
            filteredBooks = books.filter(book =>
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query) ||
                book.category.toLowerCase().includes(query) ||
                String(book.year).includes(query)
            );
            currentPage = 1;
            updatePagination();
        }

        // Initial render
        updatePagination();

        // Filter events
        searchInput.addEventListener('input', applyFilters);
        applyFiltersBtn.addEventListener('click', applyFilters);
    });
