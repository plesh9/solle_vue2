<script lang="ts">
import { defineComponent } from 'vue';
import { BaseContainer, BaseButton, BaseAnimation } from '@/shared/ui';
import Background from '../images/bg.jpg';
import { useTranslation } from '@/app/i18n/hooks';

export default defineComponent({
  components: {
    BaseContainer,
    BaseButton,
    BaseAnimation,
  },
  data() {
    return {
      Background,
      t: useTranslation('HomePage.Adaptogens'),
    };
  },
});
</script>

<template>
  <section class="adaptogens">
    <div class="adaptogens__bg">
      <img :src="Background" alt="Background" />
    </div>
    <BaseContainer class="adaptogens__container">
      <div class="adaptogens__content">
        <BaseAnimation :delay="200">
          <h3 class="adaptogens__title">{{ t('title') }}</h3>
        </BaseAnimation>
        <BaseAnimation :delay="400">
          <BaseButton
            as="a"
            variant="secondary"
            href="https://www.sollenaturals.com/product/1094?country=US&lang=en&sngl=AJ47BJ&uli=0"
            class="adaptogens__button"
          >
            {{ t('buy') }}
          </BaseButton>
        </BaseAnimation>
      </div>
    </BaseContainer>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.adaptogens {
  padding: toRem(40) 0;
  position: relative;
  width: 100%;
  height: min(100vh, toRem(683));
  overflow: hidden;

  @media (max-width: $mobile) {
    height: min(100vh, toRem(375));
  }

  &__bg {
    &,
    &::after,
    & > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    @media (max-width: $mobileSmall) {
    }

    &::after {
      content: '';
      background-color: #00000099;
    }

    & > img {
      object-fit: cover;
      object-position: 50% 90%;

      @media (max-width: $mobileSmall) {
        height: 125%;
        top: -25%;
      }
    }
  }

  &__container {
    height: 100%;
  }

  &__content {
    position: relative;
    @include flexColumn(center, center);
    text-align: center;
    max-width: toRem(524);
    height: 100%;
    margin: 0 auto;
    z-index: $zIndex_1;
  }

  &__title {
    color: $white;
    font-weight: 700;
  }

  &__button {
    margin-top: toRem(20);
  }
}
</style>
