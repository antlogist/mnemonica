<template>
  <div>
    <v-color-picker
      v-model="picker"
      elevation="15"
    ></v-color-picker>
  </div>
</template>

<script>
export default {
  name: "DialogParentMapColor",
  data:()=>({
    picker: null
  })
}
</script>
