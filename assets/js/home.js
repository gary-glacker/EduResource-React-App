  // Tab functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
      btn.addEventListener('click', () => { 
          // Remove active class from all buttons and contents
          tabBtns.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
          
          // Add active class to clicked button and corresponding content
          btn.classList.add('active');
          const tabId = btn.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
      });
  });

  // Search functionality
  document.getElementById('searchBtn').addEventListener('click', performSearch);
  document.getElementById('mainSearch').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') { // Check if Enter key is pressed
          performSearch();
      }
  });

  function performSearch() {
      const searchTerm = document.getElementById('mainSearch').value.toLowerCase();
      const resultsContainer = document.getElementById('resultsContainer');
      const searchResults = document.getElementById('searchResults');
      
      if (searchTerm.trim() === '') {
          searchResults.style.display = 'none';
          return;
      }

      // Clear previous results
      resultsContainer.innerHTML = '';
      
      // Search through all resource cards
      const resourceCards = document.querySelectorAll('.resource-card ');
      let foundResults = false;

      resourceCards.forEach(card => {
          const searchData = card.getAttribute('data-search').toLowerCase();
          const title = card.querySelector('h3').textContent.toLowerCase();
          const description = card.querySelector('p').textContent.toLowerCase();
          
          if (searchData.includes(searchTerm) || title.includes(searchTerm) || description.includes(searchTerm)) {
              foundResults = true;
              
              // Clone the card to show in results
              const resultCard = card.cloneNode(true);
              
              // Highlight matching text in title
              const titleElement = resultCard.querySelector('h3');
              titleElement.innerHTML = highlightText(titleElement.textContent, searchTerm);
              
              // Highlight matching text in description
              const descElement = resultCard.querySelector('p');
              descElement.innerHTML = highlightText(descElement.textContent, searchTerm);
              
              // Create result item container
              const resultItem = document.createElement('div');
              resultItem.className = 'result-item';
              resultItem.appendChild(resultCard);
              
              resultsContainer.appendChild(resultItem);
          }
      });

      if (!foundResults) {
          resultsContainer.innerHTML = '<div class="no-results">No results found for "' + searchTerm + '"</div>';
      }

      searchResults.style.display = 'block';
      
      // Scroll to results
      searchResults.scrollIntoView({ behavior: 'smooth' });
  }

  function highlightText(text, term) {
      if (!term) return text;
      const regex = new RegExp(term, 'gi');
      return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }