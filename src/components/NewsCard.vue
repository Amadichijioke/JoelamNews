<script setup>
defineProps ({
    uuid: String,
    title: String,
    description: String,
    url: String,
    published_at: String,
    source: String,
    categories: String
})

</script>

<template>
    <div>
        <h1><strong>{{ news.title }}</strong></h1>
            <P>{{ news.description }}</P>
            <p>{{ news.url }}</p>
            <p>{{ news.published_at }}</p>
            <p>{{ news.source }}</p>
            <p>{{ news.categories }}</p>
    </div>
</template>