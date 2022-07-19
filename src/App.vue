<script setup>
import { useHead } from "@vueuse/head";

useHead({
	title: "Landing Page",
	htmlAttrs: [{ lang: "en" }],
});
</script>

<template>
	<router-view />
</template>
