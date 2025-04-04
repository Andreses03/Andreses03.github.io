document.addEventListener("DOMContentLoaded", function() {
    // Global Header
    document.getElementById("global-header").innerHTML = `
        <nav>
            <ul>
            //logo of the page
                <img src="images/logo.png" alt="Sillage-Logo" "width="100" height="100">
                //home page link
                <li><a href="index.html">Home</a></li>
                //about page link
                <li><a href="about.html">About</a></li>
                //product page link
                <li><a href="product.html">Product</a></li>
                //contact page link
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;

    // Global Footer
    document.getElementById("global-footer").innerHTML = `<p>&copy; 2025 Chanel No. 5. All Rights Reserved.</p>`;});
