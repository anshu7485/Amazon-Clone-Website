// Add to Cart logic
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        let countElem = document.getElementById('cart-count');
        let count = parseInt(countElem.textContent, 10) || 0;
        countElem.textContent = count + 1;
        countElem.style.display = 'inline-block';
    });
});

// Back to Top smooth scroll
document.getElementById('back-to-top-btn').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Search bar focus effect
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('focus', function () {
        this.style.boxShadow = '0 0 5px 2px #FF9900';
    });
    searchInput.addEventListener('blur', function () {
        this.style.boxShadow = '';
    });
}

// Hamburger menu logic
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('hide');
    });
    // Hide menu on link click (optional)
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.add('hide');
        });
    });
}
// Hide mobile menu on resize up
window.addEventListener('resize', () => {
    if (window.innerWidth > 850) {
        mobileMenu.classList.add('hide');
        hamburger.classList.remove('active');
    }
});

// Hero slider logic
(function () {
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.getElementById('hero-slider-dots');
    let current = 0;
    let timer = null;

    if (!slides.length) return;

    // Create dots
    slides.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = 'hero-slider-dot' + (idx === 0 ? ' active' : '');
        dot.addEventListener('click', () => showSlide(idx, true));
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('.hero-slider-dot');

    function showSlide(idx, manual = false) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = idx;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
        if (manual) {
            resetTimer();
        }
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }

    function resetTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(nextSlide, 4000);
    }

    resetTimer();
})();

document.addEventListener('DOMContentLoaded', function () {
    // Single handler for all category redirects in search
    const navSearchForm = document.querySelector('.nav-search');
    const categorySelect = document.getElementById('category-select');
    if (navSearchForm && categorySelect) {
        navSearchForm.addEventListener('submit', function (e) {
            const selectedOption = categorySelect.options[categorySelect.selectedIndex];
            const val = categorySelect.value.trim().toLowerCase();
            const text = selectedOption.text.trim().toLowerCase();
            if (val === 'books' || text === 'books') {
                e.preventDefault();
                window.location.href = 'Books.html';
                return false;
            }
            if (val === 'clothes' || text === 'clothes') {
                e.preventDefault();
                window.location.href = 'clothes.html';
                return false;
            }
            if (val === 'electronics' || text === 'electronics') {
                e.preventDefault();
                window.location.href = 'Electronics.html';
                return false;
            }
            // ...other search logic if any...
        });
    }

    // Redirect to Electronics.html when "see more" or box is clicked
    document.querySelectorAll('.box-content p, .box-content .see-more').forEach(link => {
        if (link.textContent.trim().toLowerCase().includes('electronics')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = 'Electronics.html';
            });
        }
    });
    // For clicking the Electronics box itself
    document.querySelectorAll('.box').forEach(box => {
        const h2 = box.querySelector('h2');
        if (h2 && h2.textContent.trim().toLowerCase() === 'electronics') {
            box.addEventListener('click', function (e) {
                // Prevent double navigation if "Add to Cart" or "see more" is clicked
                if (
                    e.target.classList.contains('add-to-cart-btn') ||
                    (e.target.classList.contains('see-more') && e.target.textContent.trim().toLowerCase().includes('electronics'))
                ) return;
                window.location.href = 'Electronics.html';
            });
        }
    });

    // Redirect to Clothes.html when "see more" or box is clicked
    document.querySelectorAll('.box-content p, .box-content .see-more').forEach(link => {
        if (link.textContent.trim().toLowerCase().includes('clothes')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = 'clothes.html';
            });
        }
    });
    // For clicking the Clothes box itself
    document.querySelectorAll('.box').forEach(box => {
        const h2 = box.querySelector('h2');
        if (h2 && h2.textContent.trim().toLowerCase() === 'clothes') {
            box.addEventListener('click', function (e) {
                // Prevent double navigation if "Add to Cart" or "see more" is clicked
                if (
                    e.target.classList.contains('add-to-cart-btn') ||
                    (e.target.classList.contains('see-more') && e.target.textContent.trim().toLowerCase().includes('clothes'))
                ) return;
                window.location.href = 'clothes.html';
            });
        }
    });

    // Redirect to Books.html when "see more" or box is clicked
    document.querySelectorAll('.box-content p, .box-content .see-more').forEach(link => {
        if (link.textContent.trim().toLowerCase().includes('books')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = 'Books.html';
            });
        }
    });
    // For clicking the Books box itself
    document.querySelectorAll('.box').forEach(box => {
        const h2 = box.querySelector('h2');
        if (h2 && h2.textContent.trim().toLowerCase() === 'books') {
            box.addEventListener('click', function (e) {
                // Prevent double navigation if "Add to Cart" or "see more" is clicked
                if (
                    e.target.classList.contains('add-to-cart-btn') ||
                    (e.target.classList.contains('see-more') && e.target.textContent.trim().toLowerCase().includes('books'))
                ) return;
                window.location.href = 'Books.html';
            });
        }
    });
});
window.location.href = 'Books.html';
return false;
            
if (val === 'clothes' || text === 'clothes') {
    e.preventDefault();
    window.location.href = 'clothes.html';
    return false;
}
if (val === 'electronics' || text === 'electronics') {
    e.preventDefault();
    window.location.href = 'Electronics.html';
    return false;
}
         
    

// Redirect to Books.html when "see more" or box is clicked
document.querySelectorAll('.box-content p, .box-content .see-more').forEach(link => {
    if (link.textContent.trim().toLowerCase().includes('books')) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'Books.html';
        });
    }
});
// For clicking the Books box itself
document.querySelectorAll('.box').forEach(box => {
    const h2 = box.querySelector('h2');
    if (h2 && h2.textContent.trim().toLowerCase() === 'books') {
        box.addEventListener('click', function (e) {
            // Prevent double navigation if "Add to Cart" or "see more" is clicked
            if (
                e.target.classList.contains('add-to-cart-btn') ||
                (e.target.classList.contains('see-more') && e.target.textContent.trim().toLowerCase().includes('books'))
            ) return;
            window.location.href = 'Books.html';
        });
    }
});

// Single handler for all category redirects in search
const navSearchForm = document.querySelector('.nav-search');
const categorySelect = document.getElementById('category-select');
if (navSearchForm && categorySelect) {
    navSearchForm.addEventListener('submit', function (e) {
        const selectedOption = categorySelect.options[categorySelect.selectedIndex];
        const val = categorySelect.value.trim().toLowerCase();
        const text = selectedOption.text.trim().toLowerCase();
        if (val === 'books' || text === 'books') {
            e.preventDefault();
            window.location.href = 'Books.html';
            return false;
        }
        if (val === 'clothes' || text === 'clothes') {
            e.preventDefault();
            window.location.href = 'clothes.html';
            return false;
        }
        if (val === 'electronics' || text === 'electronics') {
            e.preventDefault();
            window.location.href = 'Electronics.html';
            return false;
        }
        // ...other search logic if any...
    });
}