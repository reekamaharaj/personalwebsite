<script>
    import { Router, Route, link } from "svelte-routing";
    import Portfolio from "./pages/Portfolio.svelte";
    import Blog from "./pages/Blog.svelte";
    import Home from "./pages/Home.svelte";
    import About from "./pages/About.svelte";
    import Navbar from "./components/Navbar.svelte";
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import Post from "./pages/BlogPost.svelte";
</script>

<Router>

    <div class="h-64">
        <Navbar />

        <Route path="portfolio">
            <Header />
            <Portfolio />
        </Route>
        <Route path="blog">
            <Header />
            <Blog />
        </Route>
        <Route path="post">
            <Post />
        </Route>
        <Route path="about">
            <Header />
            <About />
        </Route>
        <Route>
            <Header />
            <Home />
        </Route>
        <Footer />
    </div>

</Router>
