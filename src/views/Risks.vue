<template>
    <div class="risks" v-if="page_view === 'risk'">
        <h1>Risk Types</h1>
        <div class="row">
            <div v-if="risks.length > 0" class="col-sm-3">
                <div v-bind:key="risk" class="list-group" v-for="risk in risks">
                    <RiskItem :show_data="singleRisk" :risk_data="risk"/>
                </div>
            </div>
            <div class="col-sm-3" v-else>
                No risk found
            </div>
        </div>
    </div>
    <div class="risk-fields" v-else-if="page_view === 'risk-field'">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li @click="page_view = 'risk'" class="breadcrumb-item active" aria-current="page"><a
                        href="#">Risks</a></li>
            </ol>
        </nav>
        <h3>Fields</h3>
        <RiskFields :single_data="risk_field"/>
    </div>
</template>

<script>
    import {getRisks} from "../assets/js/apis";
    import RiskItem from "../components/RiskItem";
    import RiskFields from "../components/RiskFields";
    import toastr from 'toastr';

    export default {
        name: "risks",

        data() {
            return {
                risks: [],
                risk_field: {},
                page_view: 'risk'
            }
        },

        components: {
            RiskItem,
            RiskFields,
        },

        mounted() {
            getRisks().then(response => {
                this.risks = response.data;
            })
        },

        methods: {
            singleRisk(id) {
                const filtered_risks = this.risks.filter(item => item.id === id);
                if (filtered_risks.length === 1) {
                    const single_risk = filtered_risks[0];
                    this.risk_field = single_risk;
                    this.page_view = 'risk-field';
                } else {
                    toastr.error("Risk not found")
                }
            }
        }
    }
</script>

<style scoped>

</style>
