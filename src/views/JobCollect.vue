<template>
  <div>
    <job-list-item v-for="i in 5" :key="i" :index="i"></job-list-item>
  </div>
</template>
<script>
  import JobListItem from "../components/JobListItem.vue"
  export default {
    components:{
      JobListItem
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>