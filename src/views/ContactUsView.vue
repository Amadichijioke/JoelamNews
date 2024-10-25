<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
    <div class="container mt-3 mb-5">
         <div class="look">
             <!-- Assuming Header is a component, you are passing title and description as props -->
             <Header title="Contact us" description="Get In Touch" />
         </div>
 
         <!-- FormSubmit POST request -->
         <form action="https://formsubmit.co/amadichijioke5969@email.com" method="POST">
             <div class="row">
                 <div class="col-md-6">
                     <input 
                       type="text" 
                       placeholder="SurName" 
                       name="surname" 
                       id="surname" 
                       class="form-control mb-3" 
                       required
                     >
                 </div>
                 <div class="col-md-6">
                     <input 
                       type="text" 
                       placeholder="FirstName" 
                       name="firstname" 
                       id="firstname" 
                       class="form-control mb-3" 
                       required
                     >
                 </div>
             </div>
 
             <br>
 
             <div class="row">
                 <div class="col-md-12">
                     <input 
                       type="number" 
                       placeholder="Phone" 
                       name="phone" 
                       class="form-control mb-3" 
                       required
                     >
                 </div>
             </div>
 
             <br>
 
             <div class="row">
                 <div class="col-md-12">
                     <input 
                       type="email" 
                       placeholder="Your Email" 
                       name="email" 
                       class="form-control mb-3" 
                       required
                     >
                 </div>
             </div>
 
             <br>
 
             <div class="row">
                 <div class="col-md-12">
                     <textarea 
                       name="message" 
                       id="message" 
                       cols="10" 
                       rows="5" 
                       placeholder="Your message" 
                       class="form-control mb-3"
                       required
                     ></textarea>
                 </div>
             </div>
 
             <br>
 
             <div class="row">
                 <div class="col-md-4 text-left">
                     <button type="submit" class="btn btn-primary">Submit</button>
                 </div>
             </div>
 
             <!-- Hidden input to prevent bots -->
             <input type="hidden" name="_captcha" value="false">
             <!-- Redirect to this URL after submission -->
             <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you">
             <!-- Add a subject for the email -->
             <input type="hidden" name="_subject" value="New Contact Form Submission">
         </form>
     </div> 
 </template>

 <style scoped>
 .look {

    padding-top: 1.5cm;  
  
 }
 </style>
 