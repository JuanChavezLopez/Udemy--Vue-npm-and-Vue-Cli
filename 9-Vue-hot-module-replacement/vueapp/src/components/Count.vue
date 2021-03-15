<template>
    <div>
        <button v-on:click ="increment">Incrementar</button>
        <span>Valor del contador {{ counter}}</span>
    </div>
</template>

<script>
export default {
    name: "Count",
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increment: function() {
            this.counter++;
        }
    }


}
</script>