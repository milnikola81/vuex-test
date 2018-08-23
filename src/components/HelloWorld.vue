<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ count }}</p>
    <p>{{ countWithPercentage }}</p>
    <button @click="increment(2000)">Increment</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapState([ 'count' ]),
    // ^ isto kao i ovo iznad
    // count() {
    //   return this.$store.state.count
    // },
    ...mapGetters({
      countWithPercentage: 'getCountAsPercentage'
    })
    // ^ isto kao i ovo iznad
    // countWithPercentage() {
    //   return this.$store.getters.getCountAsPercentage
    // }
  },
  methods: {
    ...mapActions({
      increment: 'incrementAfterProvidedTime'
    }),
    // increment() {
    //   // this.$store.commit('increment')
    //   // this.$store.dispatch('incrementAfterProvidedTime', 500)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
