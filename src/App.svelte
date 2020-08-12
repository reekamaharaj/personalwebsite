<script>
    import { Router, Route, link } from "svelte-routing";

    import A from "./pages/A.svelte";
    import B from "./pages/B.svelte";
</script>

<Router>
    <nav class="text-center p-8">
        <a class="text-indigo-600" href="a" use:link>Page A</a>
        |
        <a class="text-indigo-600" href="b" use:link>Page B</a>
    </nav>
    <div class="flex items-center justify-center h-64 bg-gray-100">
        <Route path="a">
            <A />
        </Route>
        <Route path="b">
            <B />
        </Route>
        <Route>
            <!-- No path === Default Page (404? Homepage? Up to you.) -->
            <p>Default Page</p>
        </Route>
    </div>
</Router>
