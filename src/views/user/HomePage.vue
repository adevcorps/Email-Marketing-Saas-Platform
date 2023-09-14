<script setup>
  import EmailMarketing from '../../components/HomePage/EmailMarketing.vue'
  import OnlineReputation from '../../components/HomePage/OnlineReputation.vue'
  import DomainChecker from '../../components/HomePage/DomainChecker.vue'
  import EmailChecker from '../../components/HomePage/EmailChecker.vue'
  import BulkEmailChecker from '../../components/HomePage/BulkEmailVerifier.vue'
  import Services from '../../components/HomePage/Services.vue'
</script>

<template>
  <div class="px-5 container mx-auto">
    <EmailMarketing /> 
    <OnlineReputation /> 
    <DomainChecker /> 
    <EmailChecker /> 
    <BulkEmailChecker />
    <Services />
  </div>
</template>