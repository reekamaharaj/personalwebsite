<script>
    export let name;
    export let description;
    export let repoLink;
    export let deployLink;
    export let tech;
    export let img;
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img
        class="w-full"
        src={img}
        alt={name} />
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>
        <p class="text-gray-700 text-base">
            {description}
        </p>
    </div>
    <div class="px-6 py-4">
        <a href={repoLink}>
            <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
            rounded-full">
            Link to Code
        </button>
        </a>
        <a href={deployLink}>
            <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
            rounded-full">
            Deployed App
        </button>
        </a>
    </div>


    <div class="px-6 py-4">
        <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 my-2 text-sm
            font-semibold text-gray-700 mr-2">
            {tech}
        </span>

    </div>
</div>
