<script lang="ts">
import Vue from 'vue';
import { BaseDropdown, LangIcon, CloseIcon } from '@/shared/ui';
import { ILanguageSelectorItem, ILanguageSelectorOption } from '../types';
import { EnumLanguages } from '@/app/i18n';
import { setLanguage, useTranslation } from '@/app/i18n/hooks';

export default Vue.extend({
  name: 'LanguageSelector',
  components: {
    BaseDropdown,
    LangIcon,
    CloseIcon,
  },
  data() {
    return {
      isOpen: false,
      parentRef: undefined as HTMLElement | undefined,
      dropdownOptions: [
        {
          label: 'language',
          items: [
            {
              text: 'English  (EN)',
              value: EnumLanguages.en,
            },
            {
              text: 'Español  (ES)',
              value: EnumLanguages.es,
            },
          ],
        },
      ] as ILanguageSelectorOption[],
    };
  },
  methods: {
    openDropdown() {
      this.isOpen = true;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    selectLanguage(item: ILanguageSelectorItem) {
      setLanguage(item.value);
    },
  },
  computed: {
    t() {
      return useTranslation('Header');
    },
  },
});
</script>

<template>
  <div
    ref="parentRef"
    class="language"
    :class="{ isOpen: isOpen }"
    @mouseover="openDropdown"
    @mouseleave="closeDropdown"
  >
    <button class="language__toggler" type="button">
      <LangIcon />
    </button>
    <BaseDropdown
      :parentRef="parentRef"
      :isOpen="isOpen"
      position="right"
      ref="dropdownRef"
    >
      <div class="language__dropdown">
        <button class="language__close" @click="closeDropdown" type="button">
          <CloseIcon />
        </button>
        <div class="language__options">
          <div
            v-for="(option, index) in dropdownOptions"
            :key="index"
            class="language__option"
          >
            <p class="language__label">{{ t(option.label) }}</p>
            <ul class="language__items">
              <li
                class="language__item"
                v-for="(item, itemIndex) in option.items"
                :key="itemIndex"
              >
                <button
                  class="language__button"
                  :class="{ isActive: $i18n.locale === item.value }"
                  @click="selectLanguage(item)"
                  type="button"
                >
                  {{ item.text }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BaseDropdown>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.language {
  position: relative;

  &__toggler {
    @include flexColumn(center, center);
    width: toRem(32);
    height: toRem(32);
    transition: background-color $transition;

    @media (any-hover: hover) {
      &:hover {
        background-color: $grey_light;
      }
    }

    .isOpen & {
      background-color: $grey_light;
    }

    & svg {
      width: toRem(32);
      height: toRem(32);
    }
  }

  &__dropdown {
    position: relative;
    padding: toRem(50) toRem(20) toRem(50) toRem(40);

    @media (max-width: $mobile) {
      padding: toRem(24);
    }
  }

  &__close {
    position: absolute;
    right: 0;
    top: 0;
    margin: toRem(16);
    @include flexRow(center, center);
    width: toRem(36);
    height: toRem(36);
    border-radius: 50%;
    transition: background-color $transition;

    @media (any-hover: hover) {
      &:hover {
        background-color: $grey_light;
      }
    }

    @media (max-width: $mobile) {
      margin: toRem(8);
    }
  }

  &__options {
    @include flexColumn();
    row-gap: toRem(36);
  }

  &__label {
    font-weight: 300;
  }

  &__items {
    @include flexColumn();
    row-gap: toRem(12);
    margin-top: toRem(12);
  }

  &__button {
    display: inline-block;
    padding: toRem(4) toRem(12);
    line-height: 175%;
    border-radius: toRem(30);
    font-weight: 200;
    color: #908b84;
    transition: color $transition, background-color $transition;

    @media (any-hover: hover) {
      &:hover {
        color: $mainColor;
      }
    }

    &.isActive {
      background-color: #eceade;
    }
  }
}
</style>
