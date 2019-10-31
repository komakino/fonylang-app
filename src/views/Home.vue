<template>
  <div class="container mt-3">
    <b-form-group description="Välj vilket språk du vill använda.">
      <b-form-select
        id="select-translator"
        v-model="translator"
        :options="options"
      ></b-form-select>
    </b-form-group>

    <!-- <b-form-group>
      <b-form-checkbox
        v-model="dir"
        name="check-button"
        switch
        value="from"
        unchecked-value="to"
      >
        Omvänd översättning
      </b-form-checkbox>
    </b-form-group> -->

    <b-form-group description="Ange frasen du vill översätta.">
      <b-form-textarea
        autofocus
        no-resize
        v-model="phrase"
        placeholder="Kalasfint..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-form-group>

    <div
      id="translation"
      class="mt-3 alert alert-info"
      role="alert"
      v-text="translation"
    ></div>
  </div>
</template>

<script>
import Robber from "@/services/translators/Robber";
import Fig from "@/services/translators/Fig";
import Plang from "@/services/translators/Plang";
import Flang from "@/services/translators/Flang";
import Ilang from "@/services/translators/Ilang";
import PigLatin from "@/services/translators/PigLatin";
import SvinLatin from "@/services/translators/SvinLatin";
import Svinatyska from "@/services/translators/Svinatyska";

export default {
  name: "home",
  components: {},
  data() {
    return {
      phrase: "Kalasfint!",
      options: [
        { value: Robber, text: "Rövarspråket" },
        { value: Fig, text: "Fikonspråket" },
        { value: Plang, text: "P-språket" },
        { value: Flang, text: "F-språket" },
        { value: Ilang, text: "I-språket" },
        { value: PigLatin, text: "Pig latin" },
        { value: SvinLatin, text: "Svinlatin" },
        { value: Svinatyska, text: "Svinatyska" }
      ],
      translator: PigLatin,
      dir: "to"
    };
  },
  computed: {
    translation() {
      return this.translator[this.dir](this.phrase);
    }
  }
};
</script>

<style lang="scss">
#translation {
  white-space: pre-wrap;
}
</style>
