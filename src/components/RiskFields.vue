<template>

    <div class="row">
        <div class="col-sm-6">
            <div class="card">
                <div class="card-header bg-primary text-white">
                    {{single_data.name}}
                </div>
                <div class="card-body">
                    <form>
                        <div :key="field.id" v-for="field in single_data.fields" class="mb-3">
                            <label :for="field.name" class="form-label">{{formatLabel(field.name)}}</label>
                            <input v-if="field.choices.length < 1"
                                   class="form-control"
                                   :id="field.name"
                                   :required="inputRequired(field.kwargs)"
                                   :maxlength="inputMaxlength(field.kwargs)"
                                   :type="inputType(field.field_type)"
                                   :value="inputDefault(field.kwargs)">
                            <select v-else :name="field.name" :id="field.name" class="form-control">
                                <option value="">Select an option</option>
                                <option :key="option.id" v-for="option in field.choices" :value="option.value">
                                    {{option.choice}}
                                </option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "RiskFields",
        props: ['single_data'],

        methods: {
            inputDefault(options) {
                return (options.default === undefined) ? "" : options.default;
            },
            formatLabel(name) {
                const split_name = name.split('_');
                return split_name.join(" ");
            },
            inputType(option) {
                return (option === 'CharField') ? 'text' : (option === 'IntegerField') ? 'number' : 'date';
            },
            inputRequired(options) {
                if (options.null === undefined) {
                    return undefined
                } else {
                    return !options.null
                }
            },
            inputMaxlength(options) {
                if (options.max_length === undefined) {
                    return undefined
                } else {
                    return options.max_length
                }
            }

        }
    }
</script>

<style scoped>

    form label {
        text-transform: capitalize;
    }

</style>
