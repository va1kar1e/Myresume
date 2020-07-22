<template>
  <v-expansion-panels flat accordion hover>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <p :class="`title text-capitalize font-weight-bold text-left green--text`">Thesis</p>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <p
          :class="`body-1 font-weight-light text-left black--text`"
        >Search Result Clustering on Thai Internet Forum using Word2Vec Model</p>
        <v-list-item v-for="(item, i) in archieve" :key="i">
          <p
            :class="`body-1 font-weight-light text-left black--text`"
            v-html="item"
          >>{{ item }}</p>
        </v-list-item>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style>
.header-content {
  padding: 0px 0px 0px 0px !important;
  margin-top: 5px;
  margin-bottom: 0px !important;
  margin-left: 5px;
}
</style>

<script lang="ts">
export default {
  name: "Thesis",
  data: () => ({
    archieve: [
      "&bull; Researching the <b>text clustering</b> by meaning in each context.",
      "&bull; Words Tokenization with <b>NLTK</b> and <b>PyThaiNLP</b> Library.",
      "&bull; Words Prioritization with <b>TF-IDF</b>.",
      "&bull; Words Grouping by transforming text to <b>Word2Vec Model</b>.",
      "&bull; Building API services calculating text similarity with <b>Word2Vec Model</b> using <b>Flask</b> and <b>GenSim Library</b>.",
      "&bull; Building a web application to display data resulting from API services with <b>ReactJS</b>."
    ]
  })
};
</script>