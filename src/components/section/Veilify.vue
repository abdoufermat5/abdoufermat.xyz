<template>
  <div class="ftic">
    <p>
      Welcome to Veilify - the app that lets you black out parts of your images
      with ease! Just drop an image and let us do the magic.
    </p>
    <a class="button" href="https://veilify.vercel.app/" target="_blank"
      >Veilify</a
    >
  </div>
</template>

<script>
export default {
  name: "Veilify",
};
</script>

<style scoped lang="scss">
.ftic {
  .button {
    background: white;
    border-radius: 2px;
    box-shadow: 0 5px 0 #ccc;
    color: black;
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      background: #e5e5e5;
      box-shadow: 0 4px 0 #ccc;
      transform: translateY(1px);
    }

    &:active {
      box-shadow: 0 0 0 #ccc;
      transform: translateY(5px);
    }

    @media print {
      display: none;
    }
  }
}
</style>
