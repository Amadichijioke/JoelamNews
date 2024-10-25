<script setup>
//import axios from 'axios';
import Header from '@/components/Header.vue';
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
//import NewsCard from '@/components/NewsCard.vue';

const store = useStore();


onMounted(async () => {
    await store.dispatch('getNews');
})

onMounted(async () => {
    await store.dispatch('getHeadline');
})


const newly = computed( () => store.state.news);

const headLing = computed( () => store.state.headLine);

</script>

        
<template>
    
    <div class="container mt-5 mb-5">
        
        <div class="took">
            <Header title="Home" description="Daily TrustNews" />
        </div>

        <div class="row">
            <div class="col-md-12">
                <h1 >|<strong style="color:crimson;"> HEADLINE</strong></h1>
                <div class="card" style="width: 58rem;">
                    <router-link :to="`/NewsDetailView/${headLing.uuid}`">
                    <img :src="headLing.image_url" class="card-img-top" style="max-height: 10cm;" alt="Responsive image">
                    <div class="card-body">
                        <h5 class="card-title">{{ headLing.title }}</h5>
                        <p class="card-title">{{ headLing.description }}</p>
                    </div>
                    </router-link>
                </div>
            </div>
        </div><br><br>

        <div class="row">
            <h1>|<strong style="color:crimson;"> GLOBAL NEWS</strong></h1>
            <div class="col-md-4" v-for="news in newly" :key="news">
                <div class="card" style="width: 18rem;">
                    <router-link :to="`/NewsDetailView/${news.uuid}`">
                    <img :src="news.image_url" class="card-img-top" alt="Description of image">
                    <h5 class="card-title">{{ news.title }}</h5>
                    <div class="card-body">
                        <p class="card-text">{{ news.description }}</p>
                        <p class="btn btn-dark">{{ news.categories }}</p>
                    </div>
                    </router-link>
                    
                    
                </div>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-md-4" v-for="news in news" :key="news">
                <div class="card" style="width: 18rem;">
                    <a :href="`https://example.com/news/${news.id}`" target="_blank" rel="noopener noreferrer">
                    <img :src="news.image_url" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ news.title }}</h5>
                        <p class="card-text">{{ news.description }}</p>
                    </div>
                    </a>
                </div>
            </div>
        </div> -->
        
        
        
        </div>
</template>

<style scoped>
.took {
    padding-top: 1cm;  
}  
</style>