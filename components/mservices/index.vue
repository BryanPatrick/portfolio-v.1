<script setup>
const mservices = reactive([
  {
    label: "teste 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Architecto repudiandae eveniet dicta accusamus, consectetur`,
    action: "Saber mais!",
  },
  {
    label: "teste 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Architecto repudiandae eveniet dicta accusamus, consectetur`,
  },
  {
    label: "teste 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Architecto repudiandae eveniet dicta accusamus, consectetur`,
  },
]);
</script>

<template>
  <div class="w-full h-fit grid grid-cols-3 text-center">
    <div
      class="w-[250px] h-[262px] bg-grey-200"
      v-for="item in mservices"
      :key="item.label"
    >
      <h3>{{ item.label }}</h3>
      <small>{{ item.description }}</small>
      <button>{{ item.action }}</button>
    </div>
  </div>
</template>
