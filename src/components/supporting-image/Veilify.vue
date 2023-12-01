<template>
  <VeilifyImage :class="`image ${visible && 'visible'}`" />
</template>

<script>
import VeilifyImage from "../../assets/layers/Veilify.svg";

export default {
  name: "Veilify",
  components: {
    VeilifyImage,
  },
  props: {
    visible: Boolean,
  },
};
</script>

<style scoped lang="scss">
.image {
  transform: translate3d(-160%, 0, -1000px);
  transition: transform 0.5s;
  opacity: 0;

  &.visible {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
