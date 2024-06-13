<script>
export default {
    name: 'BaseButton'
}
</script>
<template>
    <button v-on="$listeners">
    <slot></slot>
  </button>
</template>