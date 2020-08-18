<script>
    import ProjectCard from "../components/ProjectCard.svelte";

    import { fireStore } from "../index.js";
import { onMount } from "svelte";
    let projects = [];

    onMount(async () => {
        const projectCollection = fireStore.collection("project");
        const snapshot = await projectCollection.get();
        snapshot.forEach((doc) => {
            projects.push(doc.data());
            return projects;
        });
    });

</script>

<div class="flex items-center justify-center m-4">

        {#each projects as project}
            <ProjectCard {...project} />
        {/each}

</div>

<!-- <p>Portfolio</p>
- Completed projects
        - Description of the app for user
            - Why it exists
            - Who its for
            - What problem does it solve
        - Indepth technical description
            - Design method followed
            - How the app is structured
            - Thought process for structure
            - Standards followed
            - Concepts used
            - Project management used
            - Adaptations that were needed -->
