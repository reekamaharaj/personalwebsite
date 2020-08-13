<script>
    import { Router, Route, link } from "svelte-routing";
    import Portfolio from "./pages/Portfolio.svelte";
    import Blog from "./pages/Blog.svelte";
    import Home from "./pages/Home.svelte";
    import About from "./pages/About.svelte";
</script>

<Router>
    <nav class="text-center p-8">
        <a class="text-indigo-600" href="portfolio" use:link>Portfolio</a>
        |
        <a class="text-indigo-600" href="blog" use:link>Blog</a>
        |
        <a class="text-indigo-600" href="about" use:link>About</a>
    </nav>
    <div class="flex items-center justify-center h-64 bg-gray-100">
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
