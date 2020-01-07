<template>
  <div class="home">
   <GetAllFanCams/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GetAllFanCams from '@/components/GetAllFanCams.vue'
export default {
  name: 'home',
  components: {
    GetAllFanCams
  }
}
</script>
