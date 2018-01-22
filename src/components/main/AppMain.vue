<template>
	<div class="app-main app-box">
		<app-banner></app-banner>
		<app-selection></app-selection>
		<app-foot></app-foot>

	</div>
</template>

<script>
	
	import AppBanner from './AppBanner'
	import AppSelection from './AppSelection'
	import AppFoot from './AppFoot'
	export default{
		name:'app-main',
		components:{
			AppBanner,AppSelection,AppFoot
		}
	}
</script>

<style>
</style>