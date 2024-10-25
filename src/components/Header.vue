<script setup>
defineProps ({
    title: String,
    description: String
})
</script>

<template>
        <div class="alert alert-secondary">
            <h1><strong>{{title}}</strong></h1>
            <P>{{description}}</P>
        </div>
</template>