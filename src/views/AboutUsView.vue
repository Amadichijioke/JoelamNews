<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
    <div class="container mt-3 mb-5">

        <div class="joo">
            <Header title="About Us" description="Read Through For More Info" />
        </div>

        <div class="col-md-4">
         <div class="card" style="width: 58rem;">
             
             <div class="card-body">
                 <h5 class="card-title"><strong>About JOELAM News</strong></h5>
                 <p class="card-text">JOELAM Worldwide News, is a world class news hub, where daily happenings and trending news are brought your way.</p>
                 <p>We work with the best and world learned personnel and technologically inclined individual that work round the clock to keep you above the curve.</p>
                 <p>Globally, people around the world can access JOELAM News which is widly distributed across 100 Countries and territories</p>
                 <P>JOELAM News is the number one(1) online news destination with more unique visitors than any other news source.</P>
             </div>
         </div>
        </div><br><br><br>
        <div class="row" :color="color">
            <div class="col-md-6">
                <div class="card" style="width: 25rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title"><strong>OUR MISSION</strong></h5>
                        <p class="card-text">We bear wittness to history as it unfolds and explain not just what happened, but why, and what it means to you</p>
                        <p>Its our priorty to keep our audience safe and protected from false, erroneous and misleading news and information.</p>
                        <p>With these all our sources are veted and verified to bring nothing but the best and real time happenings.</p>
                        <p>We are truth-seekers and storytellers.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card" style="width: 30rem;">
                    <div class="card-body">
                        <h5 class="card-title">OUR VISION</h5>
                        <p class="card-text">To be the leading and most trusted news source, inspiring an informed and engaged community.</p>
                        <p>We aim to innovate in digital journalism, setting the standard for accuracy, accessibility and integrity, while fostering a more conneted and aware society</p>
                    </div>
                </div>
            </div>
        </div><br>

        <div>
            <button class="btn btn-secondary">Email: amadichijioke5969@gmail.com | Phone: +2348145887022</button>
        </div>


    </div>    
</template>

<style scoped>
.joo {
    padding-top: 2cm;
}
</style>