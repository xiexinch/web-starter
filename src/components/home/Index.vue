<template>
    <div>
        <common-header></common-header>
        <div>
            首页
        </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
import commonHeader from '@/components/commons/CommonHeader.vue'
import commonFooter from '@/components/commons/CommonFooter.vue'

export default {
    name: 'Index',
    components: {
        commonHeader,
        commonFooter
    }
}
</script>

<style>

</style>