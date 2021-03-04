<template>
    <a @click="show_data(risk_data.id)" href="#" class="list-group-item list-group-item-action active mb-3"
       aria-current="true">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{risk_data.name}}</h5>
        </div>
        <p class="mb-1">{{risk_data.description}}</p>
    </a>
</template>

<script>
    export default {
        name: "RiskItem",
        props: ['risk_data', 'show_data']
    }
</script>

<style scoped>

</style>
