<script lang="ts">

    import Footer from "$components/footer/Footer.svelte";
    import StrapiFullHorizontalDarkIcon from "$assets/img/strapi_full_horizontal_dark.png";
    import GrafanaLogo from "$assets/img/grafana_logo.svg";
    import Logo from "$assets/img/logo_full.png";
</script>
<body>
<header>
    <h1 class="text-lg">
        Admin Portals
    </h1>
    <h2>
        Example
    </h2>

    <p>
        Find all the admin portals of Example.com here.
    </p>
</header>

<nav>
    <ul>
        <li>
            <a
                    class="flex flex-col"
                    href="https://example.com/"
            >
                <span class="flex flex-row items-center">
                  <img
                          alt="example.com logo"
                          src={Logo}
                          style="height: 60px"
                  />
                </span>
                <p class="flex flex-grow">
                    Go to the main website
                </p>
            </a>
        </li>
        <li>
            <a
                    class="flex flex-col"
                    href="https://strapi.example.gr/admin"
            >
               <span class="flex flex-row items-center">
                    <img
                            alt="strapi - headless cms"
                            src={StrapiFullHorizontalDarkIcon}
                            style="height: 35px"
                    />
                </span>
                <p class="flex flex-grow">
                    Manage content and data
                </p>
            </a>
        </li>
        <li>
            <a
                    class="flex flex-col"
                    href="https://grafana.example.gr/"
            >
               <span class="flex flex-row items-center">
                   <img
                           alt="grafana"
                           src={GrafanaLogo}
                           style="height: 70px"
                   />
                </span>
                <p class="flex flex-grow">
                    Telemetry, watch metrics and statistics
                </p>
            </a>
        </li>
    </ul>
</nav>
<slot/>
</body>

<Footer/>

<style>
    header {
        background-color: #212121;
        color: #fff;
        padding: 10px;
        text-align: center;
        margin-bottom: 60px;

        transition: color 0.2s ease-out;
    }

    header h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 10px;
    }

    header h2 {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 10px;

        color: #68d391;
        font-weight: bold;
    }

    header p {
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 10px;
    }

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #fff;
        color: #000;
        padding: 10px;
        text-align: center;

        margin-bottom: 80px;
    }

    nav ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-items: center;
        list-style-type: none;
        padding: 0;
        margin: auto;
    }

    nav li {
        display: inline-block;
        margin: 10px 10px;
        padding: 20px 20px;

        border-bottom: 1px solid #9ca3af;
    }

    nav a {
        justify-items: center;
        align-items: center;
        color: #212121;
        text-decoration: none;
    }

    nav a:hover {
        color: #4ade80;
    }

    nav img {
        height: 40px;
    }

    nav span {
        margin-left: 10px;

        transition: color 0.2s ease-out;
    }

    nav p {
        font-size: 0.8rem;
        font-weight: 300;
        margin-bottom: 10px;
    }

    nav a:hover span {
        color: #4ade80;
    }
    nav a:hover p {
        color: #4ade80;
    }
</style>
