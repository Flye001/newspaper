<template>
    <div class="row mt-5 justify-content-center">
      <div class="card" style="width: 18rem">
        <div class="card-body">
            <div class="cursor" @click="ToggleDropdown">
                <h5 class="card-title">{{Data.Month}} {{Data.Year}} Issue</h5>
            </div>

            <ul class="list-group list-group-flush" v-if="Dropdown">
                <li class="list-group-item cursor"
                v-for="item in Data.Items" :key="item"
                @click="say('An article about ' + item.Name + ' suddenly appears!')">{{item.Name}}</li>
           </ul>
        </div>
      </div>
    </div>
</template>

<style scoped>
.cursor {
    cursor: pointer;
}
</style>

<script>
export default {
  props: ['Data'],
  data () {
    return {
      Dropdown: false
    }
  },
  methods: {
    ToggleDropdown () {
      this.Dropdown = !this.Dropdown
    },
    say (text) {
      alert(text)
    }
  }
}
</script>
