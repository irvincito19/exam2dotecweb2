<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';

const precioBase = ref(200); // Precio Cambiado a 200
const cantidad = ref(1); // Cantidad ingresada por el usuario
const total = ref(0);

const calcularTotal = () => {
  total.value = precioBase.value * cantidad.value;
}
</script>

<template>
  <HelloWorld msg="Examen 2do parcial - Tecnologías Web I" />
  <div>
    <p>Precio: $<span>{{ precioBase }}</span></p>
    <input type="number" v-model="cantidad" placeholder="Cantidad">
    <button @click="calcularTotal">Calcular</button>
    <p id="resultado">Total a pagar: ${{ total }}</p>
  </div>

  <p>
    Recuerda trabajar en una rama (Ejemplo: irvinghdez_exam2branch_VUE) y subir solo un cambio.
  </p>
  <p class="read-the-docs">"El pensamiento tecnológico es la capacidad de ver el mundo a través de la lente de la innovación y la creatividad."</p>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
