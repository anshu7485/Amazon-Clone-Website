document.addEventListener('DOMContentLoaded', function() {
    const categoryFilters = document.querySelectorAll('#category-filters input[type="checkbox"]');
    const priceFilters = document.querySelectorAll('#price-filters input[type="radio"]');
    const products = document.querySelectorAll('.product-card');

    function getSelectedCategories() {
        let selected = [];
        categoryFilters.forEach(cb => {
            if (cb.checked) selected.push(cb.value);
        });
        // If "All" is checked, ignore others
        if (selected.includes('All')) return [];
        return selected;
    }

    function getSelectedPrice() {
        let selected = 'all';
        priceFilters.forEach(rb => {
            if (rb.checked) selected = rb.value;
        });
        return selected;
    }

    function priceInRange(price, range) {
        price = parseInt(price, 10);
        if (range === 'all') return true;
        if (range === 'under-1000') return price < 1000;
        if (range === '1000-10000') return price >= 1000 && price <= 10000;
        if (range === '10000-50000') return price > 10000 && price <= 50000;
        if (range === 'over-50000') return price > 50000;
        return true;
    }

    function filterProducts() {
        const selectedCategories = getSelectedCategories();
        const selectedPrice = getSelectedPrice();
        products.forEach(card => {
            const cat = card.getAttribute('data-category');
            const price = card.getAttribute('data-price');
            let show = true;
            if (selectedCategories.length && !selectedCategories.includes(cat)) show = false;
            if (!priceInRange(price, selectedPrice)) show = false;
            card.style.display = show ? '' : 'none';
            card.classList.toggle('filtered', show && selectedCategories.length > 0);
        });
    }

    // Only one "All" at a time for category
    document.querySelector('#category-filters').addEventListener('change', function(e) {
        if (e.target.value === 'All') {
            categoryFilters.forEach(cb => cb.checked = false);
            e.target.checked = true;
        } else {
            categoryFilters.forEach(cb => {
                if (cb.value === 'All') cb.checked = false;
            });
        }
        filterProducts();
    });

    priceFilters.forEach(rb => {
        rb.addEventListener('change', filterProducts);
    });
    categoryFilters.forEach(cb => {
        cb.addEventListener('change', filterProducts);
    });

    filterProducts();
});
