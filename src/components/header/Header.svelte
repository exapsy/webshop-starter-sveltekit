<script lang="ts">
    import {locale} from '$stores/locale';
    import Truck from "$assets/svg/truck.svg";
    import LanguageIcon from "$assets/svg/world_language.svg";
    import UsaCircleFlagIcon from "$assets/img/flag_usa_circle.png";
    import GreeceCircleFlagIcon from "$assets/img/flag_gr_circle.png";
    import LogoFull from "$assets/img/logo_full.png";
    import LogoSimple from "$assets/img/logo_simple.png";
    import CartIcon from "$assets/svg/cart_full.svg";
    import { cart } from "$stores/cart";

    import {Locale} from "$types/locales";
    import {goto} from "$app/navigation";

    const switchLocale = (newLocale: string) => {
        locale.set(newLocale);
    }

    let menuOpen = false;
    let dropdownOpen = false;
    let current_locale = Locale.EN;

    const toggleMenu = () => {
        menuOpen = !menuOpen;
    };


    locale.subscribe((value) => {
        current_locale = value as Locale;
    })

    const navigateToCartPage = () => {
        goto('/app/cart')
    }

    let cartItemsAmount: number = 0;

    cart.subscribe((value) => {
        if (!value) {
            cartItemsAmount = 0;
            return;
        }
        // get total quantity of all items
        const totalQuantity = value.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
        cartItemsAmount = totalQuantity;
    })
</script>

<header class="heading-desktop">
    <button class="hamburger-button" on:click={toggleMenu}>
        <!-- Hamburger icon -->
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </button>

    <span class="logo">
        <a href="/app/home">
            <img alt="logo" src={LogoFull}>
        </a>
    </span>

    <div class="locale-switcher flex justify-center items-center space-x-2 flex-row gap-4">
        <button
                class="flex flex-row hover:shadow-image"
                on:click={() => { switchLocale(Locale.EN); console.log('switching to EN');}}
        >
            <img
                    alt="English"
                    class="rounded-full h-6 w-6 mr-2"
                    src={UsaCircleFlagIcon}
            />
            <span class="flex justify-center items-center text-sm font-medium text-gray-900">
            English
            </span>
        </button>
        <button
                class="flex flex-row p-1"
                on:click={() => {switchLocale(Locale.GR); console.log('switching to GR');}}
        >
            <img
                    alt="Greek"
                    class="rounded-full h-6 w-6 mr-2"
                    src={GreeceCircleFlagIcon}
            />
            <span class="flex justify-center items-center text-sm font-medium text-gray-900 hover:text-gray-600">
            Ελληνικά
            </span>
        </button>
    </div>

    <nav>
        <ul>
            <li><a class="font-bold" href="/app/home">Home</a></li>
            <li><a class="font-bold" href="/app/shop">Shop</a></li>
            <li><a class="font-bold" href="/app/about">About</a></li>
            <li><a class="font-bold" href="/app/contact">Contact</a></li>
        </ul>
    </nav>

    <div class="flex flex-row">
        <button
                on:click={navigateToCartPage}
                id="cart-button"
        >
            <img
                    src={CartIcon}
                    alt="cart"
                    class="rounded-full h-6 w-6 mr-2 inline-block"
                    id="cart-icon"
            />
            <span>
                <span class="rounded-full bg-green-500 text-white text-xs px-2 py-1">
                    {cartItemsAmount || 0}
                </span>
            </span>
        </button>
    </div>
</header>

<div class="subheading subheading-desktop relative bg-orange-100 text-blue-950 py-4 h-1">
    <div class="flex justify-center items-center">
        <span class="text-lg font-bold mr-4">
            <a
                    href="https://maps.app.goo.gl/UKgR94yCme2JQMgu8"
                    target="_blank"
            >
                <span class="text-sm whitespace-nowrap font-bold hover:text-green-500">
                    Shop from Thessaloniki
                </span>
            </a>
        </span>
        <div class="animation-container relative animate-truck">
            <img
                    alt="truck moving"
                    class="truck"
                    src={Truck}
            />
        </div>
    </div>
</div>

<div class="subheading subheading-mobile relative bg-orange-100 text-blue-950 py-4 h-1">
    <div class="flex justify-center items-center">
        <span class="text-lg font-bold mr-4">
            <a href="https://maps.app.goo.gl/UKgR94yCme2JQMgu8">
                <span class="text-sm whitespace-nowrap font-bold hover:text-green-500">
                    Shop from Thessaloniki
                </span>
            </a>
        </span>
        <div class="animation-container relative animate-truck">
            <img
                    alt="truck moving"
                    class="truck"
                    src={Truck}
            />
        </div>
    </div>
</div>


<header class="heading-landscape flex flex-row">
    <span class="logo logo-landscape">
        <a href="/app/home">
            <img alt="logo" src={LogoSimple}>
        </a>
    </span>

    <button class="hamburger-button" on:click={toggleMenu}>
        <!-- Hamburger icon -->
    </button>

    <div class="language-switcher-container relative inline-block text-left">
        <div>
            <button aria-expanded="true"
                    aria-haspopup="true"
                    class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    id="options-menu" on:click={() => dropdownOpen = !dropdownOpen}
                    type="button">
                <img alt="language" class="language-icon" src={LanguageIcon}/>
                {#if current_locale === Locale.EN}
                    <div>
                        <img
                                src={UsaCircleFlagIcon}
                                alt="English"
                                class="rounded-full h-6 w-6 mr-2 inline-block"/>
                    </div>
                    )
                {/if}
                {#if current_locale === Locale.GR}
                    <div>
                        <img
                                src={UsaCircleFlagIcon}
                                alt="Greek"
                                class="rounded-full h-6 w-6 mr-2 inline-block"/>
                    </div>
                {/if}
                <svg aria-hidden="true" class="-mr-1 ml-2 h-5 w-5" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          fill-rule="evenodd"/>
                </svg>
            </button>
        </div>
        {#if dropdownOpen}
            <div class="origin-top-right absolute m-auto mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div class="flex py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button on:click={() => switchLocale(Locale.EN)}
                            class="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        <img
                                src={UsaCircleFlagIcon}
                                alt="English"
                                class="rounded-full h-6 mr-2 inline-block"/>
                        <span class="dropdown-option-text">
                            English
                        </span>
                    </button>
                    <button on:click={() => switchLocale(Locale.GR)}
                            class="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        <img
                                src={GreeceCircleFlagIcon}
                                alt="Greek"
                                class="rounded-full h-6 mr-2 inline-block"/>
                        <span class="dropdown-option-text">
                            Ελληνικά
                        </span>
                    </button>
                </div>
            </div>
        {/if}
    </div>
    <nav class="nav-mobile" class:open={menuOpen}>
        <ul>
            <li><a class="font-bold" href="/app/home">Home</a></li>
            <li><a class="font-bold" href="/app/shop">Shop</a></li>
            <li><a class="font-bold" href="/app/about">About</a></li>
            <li><a class="font-bold" href="/app/contact">Contact</a></li>
        </ul>
    </nav>
</header>

<header class="heading-portrait flex flex-nowrap flex-col justify-center items-center gap-4">
    <span class="logo logo-landscape flex flex-grow m-auto">
        <a href="/app/home">
            <img alt="logo" src="/api/assets/img/logo_full.png">
        </a>
    </span>

    <div class="flex flex-row">
        <button class="hamburger-button" on:click={toggleMenu}>
            <!-- Hamburger icon -->
        </button>

        <div class="language-switcher-container relative inline-block text-left">
            <div>
                <button aria-expanded="true"
                        aria-haspopup="true"
                        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        id="options-menu" on:click={() => dropdownOpen = !dropdownOpen}
                        type="button">
                    <img alt="language" class="language-icon" src={LanguageIcon}/>
                    {#if current_locale === Locale.EN}
                        <div>
                            <img
                                    src={UsaCircleFlagIcon}
                                    alt="English"
                                    class="rounded-full h-6 w-6 mr-2 inline-block"/>
                        </div>
                        )
                    {/if}
                    {#if current_locale === Locale.GR}
                        <div>
                            <img
                                    src={GreeceCircleFlagIcon}
                                    alt="Greek"
                                    class="rounded-full h-6 w-6 mr-2 inline-block"/>
                        </div>
                    {/if}
                    <svg aria-hidden="true" class="-mr-1 ml-2 h-5 w-5" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              fill-rule="evenodd"/>
                    </svg>
                </button>
            </div>
            {#if dropdownOpen}
                <div class="origin-top-right absolute m-auto mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div class="flex py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <button on:click={() => switchLocale(Locale.EN)}
                                class="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <img
                                    src={UsaCircleFlagIcon}
                                    alt="English"
                                    class="rounded-full h-6 mr-2 inline-block"/>
                            <span class="dropdown-option-text">
                            English
                        </span>
                        </button>
                        <button on:click={() => switchLocale(Locale.GR)}
                                class="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <img
                                    src={GreeceCircleFlagIcon}
                                    alt="Greek"
                                    class="rounded-full h-6 mr-2 inline-block"/>
                            <span class="dropdown-option-text">
                            Ελληνικά
                        </span>
                        </button>
                    </div>
                </div>
            {/if}
        </div>
        <nav class="nav-mobile" class:open={menuOpen}>
            <ul>
                <li><a class="font-bold" href="/app/home">Home</a></li>
                <li><a class="font-bold" href="/app/shop">Shop</a></li>
                <li><a class="font-bold" href="/app/about">About</a></li>
                <li><a class="font-bold" href="/app/contact">Contact</a></li>
            </ul>
        </nav>
        <div class="flex flex-row">
            <button
                    on:click={navigateToCartPage}
                    id="cart-button"
            >
                <img
                        src={CartIcon}
                        alt="cart"
                        class="rounded-full h-6 w-6 mr-2 inline-block"
                        id="cart-icon"
                />
                <span>
                {#if cartItemsAmount > 0}
                    <span class="rounded-full bg-green-500 text-white text-xs px-2 py-1">
                        {cartItemsAmount}
                    </span>
                {/if}
            </button>
        </div>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #f1f1f1;
        padding: 10px;
        margin: 0;
    }

    nav {
        display: flex;
        align-items: center;
        background-color: #f1f1f1;
        padding: 10px;
    }

    nav ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin: 0;
    }

    nav ul li {
        margin: 0 10px;
    }

    nav ul li a {
        text-decoration: none;
        color: #212121;
        cursor: pointer;
    }

    nav ul li a:hover {
        color: #666;
    }

    .logo img {
        height: 50px;
    }

    .subheading a span {
        font-family: 'Noto Sans', sans-serif;
        font-weight: normal;
        transition: all 0.2s ease-in-out;
    }

    .subheading-desktop {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        height: 40px;
    }

    .animation-container {
        width: 100%; /* Ensure the container takes the full width */
        position: relative; /* Position it absolutely within the parent */
        left: 0; /* Start from the left */
    }

    .truck {
        width: 20px;
        animation: moveTruck 5s linear infinite; /* Adjust timing as needed */
    }

    @keyframes moveTruck {
        0% {
            transform: translateX(0%);
            opacity: 0;
        }
        /* Start off-screen to the left */
        10% {
            opacity: 0.5;
        }
        10% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        90% {
            opacity: 0.5;
        }
        100% {
            transform: translateX(100%);
            opacity: 0
        }
        /* End off-screen to the right */
    }

    .animate-truck {
        animation: moveTruck 5s linear infinite;
    }

    .subheading-mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
    }

    .language-switcher-container .language-icon {
        width: 20px;
        height: 20px;
    }

    @media (min-width: 769px) {
        .heading-landscape {
            display: none;
        }

        .heading-portrait {
            display: none;
        }

        .subheading-mobile {
            display: none;
        }
    }

    /* tablets or landscape mode */
    @media (max-width: 768px) and (min-width: 426px) {
        .heading-desktop {
            display: none;
        }

        .heading-portrait {
            display: none;
        }

        .subheading-desktop {
            display: none;
        }
    }

    /* mobile landscape */
    @media (max-width: 770px) and (min-width: 426px) {
        .heading-desktop {
            display: none;
        }

        .heading-portrait {
            display: none;
        }

        .subheading-desktop {
            display: none;
        }
    }

    /* mobile portrait */
    @media (max-width: 425px) {
        /* flags only appear on mobile while on tablet/landscape mode text appears as well */
        .dropdown-option-text {
            display: none;
        }

        .heading-desktop {
            display: none;
        }

        .heading-landscape {
            display: none;
        }

        .subheading-desktop {
            display: none;
        }
    }

    .jump {
         animation: jump-animation 0.3s ease-in-out;
     }

    @keyframes jump-animation {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
</style>