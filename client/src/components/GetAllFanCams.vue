<template>
  <div>
    <h1>All AFTV Fan Cams</h1>
    <ApolloQuery
    :query="require('../graphql/GetFanCams.gql')"
    >
<template v-slot="{result: {loading,error,data}}">
<div v-if="loading">
Loading...
    </div>
    <div v-else-if="error">
An error is here
    </div>
    <div v-else-if="data">
<div v-for="cam in data">
      {cam.ID}
      {cam.title}
      {cam.url}
    </div>
    </div>
</template>
        </ApolloQuery>
 
    
  </div>
</template>
<script >

export default {
  name: "GetAllFanCams",
  data() {
    return {
      allFanCams: []
    };
  }
};
</script>