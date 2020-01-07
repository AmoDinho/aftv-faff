<template>
  <h1>All AFTV Fan Cams</h1>
</template>
<script lang="ts">
import Vue from "vue";
import GetFanCams from "../graphql/GetFanCams.gql";
export default Vue.extend({
  name: "GetAllFanCams",
  data() {
    return {
      allFanCams: []
    };
  },
  apollo: {
    allFanCams: {
      query: GetFanCams
    }
  }
});
</script>