<template>
  <div style="padding: 0 15px;" @click="toggleClick">
    <svg-icon icon-class="hamburger" class="hamburger" :class="{'is-active':isActive}" />
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.hamburger {
  display: inline-block;
  vertical-align: middle;
  font-size: 20px;
  color: $menuText;
}
.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
