document.addEventListener('DOMContentLoaded', function () {
    const papers = document.querySelectorAll('.paper-card');
    const paginationLinks = document.querySelectorAll('.pagination a');
    const itemsPerPage = 6; // Number of papers per page

    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        papers.forEach((paper, index) => {
            if (index >= startIndex && index < endIndex) {
                paper.style.display = 'block';
            } else {
                paper.style.display = 'none';
            }
        });
    }

    paginationLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            paginationLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');

            // Show the corresponding page
            const page = index + 1; // Pages are 1-based
            showPage(page);
        });
    });

    // Show the first page by default
    showPage(1);
});

// document.querySelector('.pagination').addEventListener('click', function (e) {
//     const activeLink = document.querySelector('.pagination a.active');
//     const links = Array.from(document.querySelectorAll('.pagination a'));
//     const currentIndex = links.indexOf(activeLink);

//     if (e.target.textContent === '«' && currentIndex > 1) {
//         links[currentIndex - 1].click();
//     } else if (e.target.textContent === '»' && currentIndex < links.length - 2) {
//         links[currentIndex + 1].click();
//     }
// });