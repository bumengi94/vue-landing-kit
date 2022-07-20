<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
const i18n = useI18n();

useHead({
	title: i18n.t("meta.title"),
	htmlAttrs: [{ lang: i18n.locale || "en" }],
});
</script>

<template>
	<router-view />
</template>
