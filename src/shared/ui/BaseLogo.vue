<template>
  <a href="#" class="logo">
    <img
      src="@/app/assets/images/icons/logo.svg"
      class="logo__image"
      alt="logo"
    />
  </a>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.logo {
  position: relative;
  display: inline-block;
  width: toRem(119);
  height: toRem(32);
  transition: opacity $transition;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  &__image {
    position: absolute;
    inset: 0;
    margin: auto;
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
</style>
