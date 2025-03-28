// Task 1: Set Up the Project Structure
console.log('****Initialize Basic HTML Structure****');

// Task 2: Fetch Products with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to Fetch Products: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((products) => {
        products.forEach((product) => {
          console.log(product.fields.name);
        });
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }
  fetchProductsThen();
  console.log('****Implement fetchProductsThen using .then() and .catch()****');

// Task 3: Fetch Products with async/await
  async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      if (!response.ok) {
        throw new Error(`Failed to Fetch Products: ${response.status} ${response.statusText}`);
      }
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }
  function handleError(error) {
    const container = document.getElementById('product-container');
    container.innerHTML = `<p class="error">Error Loading Products: ${error.message}</p>`;
    console.error('Fetch error:', error);
  }
  fetchProductsAsync();
  console.log('****Add fetchProductsAsync using async/await and try/catch****');

// Task 4: Display the Products
 function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; 

    const topFive = products.slice(0, 5);
    topFive.forEach((product) => {
      const { name, price, image } = product.fields;
  
      const productDiv = document.createElement('div');
      productDiv.className = 'product';

      productDiv.innerHTML = `
      <h2>${name}</h2>
      <p>$${(price / 100).toFixed(2)}</p>
      <img src="${image[0].url}" alt="${name}" />
    `;
  
      container.appendChild(productDiv);
    });
  }
  console.log('****Display products in the DOM with name, price, and image****');

// Task 5: Reusable Error Handler
  function handleError(error) {
    console.error("An error occurred:", error.message);
  }

