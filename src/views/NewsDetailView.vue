<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

onMounted(async () => {
    await store.dispatch('fetchNewsDetailsByUuid', route.params.uuid);
});

const selectedNewsDetails = computed( () => store.state.selectedNewsDetails);

</script>

<template>
    <div class="container mb-5">
        <div class="row book">
            <div class="col-md-12">
                <div class="card " style="width: 58rem;">
                    
                    <img :src="selectedNewsDetails.image_url" class="card-img-top" style="max-height: 10cm;" alt="Description of image">
                    
                    <div class="card-body">
                        <h5 class="card-title">{{ selectedNewsDetails.title }}</h5>
                        <p class="card-text">{{ selectedNewsDetails.description }}</p>
                        <p class="card-text">{{ selectedNewsDetails.published_at }} | Source: {{ selectedNewsDetails.source }}</p>
                        
                    </div>
                    
                </div>
        <div>
            <a :href="selectedNewsDetails.url" target="_blank" rel="noopener noreferrer" class="btn btn-success button">Read Full Article</a>   
        </div>
    </div>
        </div>
    </div>
</template>

<style scoped>
.card{
    margin-left: 5px;
}
.book {
    padding-top: 2cm;
}
</style>