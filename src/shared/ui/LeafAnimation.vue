<script lang="ts">
import BaseAnimation from './BaseAnimation.vue';

export default {
  props: {
    delay: {
      type: Number,
      default: 300,
    },
    duration: {
      type: Number,
      default: 1000,
    },
    variant: {
      type: String,
      default: 'leafLeft',
      validator: (value: string) => ['leafLeft', 'leaftRight'].includes(value),
    },
  },
  components: {
    BaseAnimation,
  },
};
</script>

<template>
  <BaseAnimation :duration="duration" :delay="delay" :variant="variant">
    <slot />
  </BaseAnimation>
</template>
