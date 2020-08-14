<script>
    import { Router, Route, link } from "svelte-routing";
    import Portfolio from "./pages/Portfolio.svelte";
    import Blog from "./pages/Blog.svelte";
    import Home from "./pages/Home.svelte";
    import About from "./pages/About.svelte";
    import Navbar from "./components/Navbar.svelte";
    import Header from "./components/Header.svelte";
</script>

<Router>
    <Navbar/>
    <Header/>
    <div class="flex items-center justify-center h-64">
        <Route path="portfolio">
            <Portfolio />
        </Route>
        <Route path="blog">
            <Blog />
        </Route>
        <Route path="about">
            <About />
        </Route>
        <Route>
            <!-- No path === Default Page (404? Homepage? Up to you.) -->
            <Home />
        </Route>
    </div>
</Router>
