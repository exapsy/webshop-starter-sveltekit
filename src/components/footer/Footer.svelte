<script>

</script>

<footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto">
        <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 class="text-xl font-bold mb-4">&copy; 2023 Example.com</h3>
                <p>Your source for premium dry nuts.</p>
            </div>

            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                <h4 class="text-lg font-bold mb-4">Quick Links</h4>
                <ul>
                    <li class="mb-2"><a class="text-gray-300 hover:text-white" href="/app/home">Home</a></li>
                    <li class="mb-2"><a class="text-gray-300 hover:text-white" href="/app/shop">Shop</a></li>
                    <li class="mb-2"><a class="text-gray-300 hover:text-white" href="/app/about">About Us</a></li>
                    <li class="mb-2"><a class="text-gray-300 hover:text-white" href="/app/contact">Contact</a></li>
                </ul>
            </div>

            <div class="w-full md:w-1/3">
                <h4 class="text-lg font-bold mb-4">Contact Us</h4>
                <p class="mb-2 accent-green-600 hover:accent-green-400">
                    <a href="https://maps.app.goo.gl/uKgR94yCme8JQMgu7">
                        My Address - Click me for google maps directions
                    </a>
                </p>
                <p class="mb-2 accent-green-600 hover:accent-black-400">
                    Tel: <a href="tel:+302310867733">+30 2310 86 77 33</a>
                </p>
                <p>Email: <a href="mailto:info@example.com" id="email">info@example.com</a></p>
            </div>
        </div>
    </div>
</footer>

<style>
    footer .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    footer a {
        transition: all 0.2s ease-in-out;
    }

    footer a:hover {
        color: #68d391;
    }

    @media (max-width: 768px) {
        footer .container {
            text-align: center;
        }
    }

    @media (min-width: 768px) {
        footer .container {
            display: block;
            text-align: left;
        }
    }
</style>
