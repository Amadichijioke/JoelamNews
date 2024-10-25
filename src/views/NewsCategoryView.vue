<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();


onMounted(async () => {
    await store.dispatch('getCategories', route.params.category.uuid);
})

const selectedCategories = computed( () => store.state.selectedCategories);

</script>

<template>
    <div class="container mb-5">
        <div class="row bloo">
            <div class="col-md-4" v-for="category in selectedCategories" :key="category.uuid">
                <div class="card" style="width: 18rem;">
                    <router-link :to="`/NewsDetailView/${category.uuid}`">
                    <img :src="category.image_url" class="card-img-top" alt="categories.title">
                    <div class="card-body">
                        <p class="card-text">{{category.categories}}</p>
                        <h5 class="card-title">{{category.title}}</h5>
                        <p class="card-text">{{category.description}}</p> 
                    </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
 </template>

 <style scoped>
 .bloo{
    padding-top: 2.5cm;
 }
 </style>