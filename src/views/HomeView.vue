<template>
  <div class="home">
    <h1>Règles</h1>
    <div class="regle">
      <p>
        Nombre de joueurs : 6 <br />
        En fonction de vôtre rôle, une categorie et un nombre de roll est
        attribué :
      </p>
      <ul>
        <h2>TOP</h2>
        <li>Couvre la top lane et la jungle</li>
        <li>
          2 rolls dans la catégorie top et 2 rolls dans la catégorie jungle
        </li>
        <h2>MID</h2>
        <li>Couvre la mid lane uniquement</li>
        <li>3 rolls dans la catégorie mid</li>
        <h2>BOT</h2>
        <li>Couvre adc et support</li>
        <li>
          2 rolls dans la catégorie adc et 2 rolls dans la catégorie support
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.regle {
  text-align: left;
}
</style>
