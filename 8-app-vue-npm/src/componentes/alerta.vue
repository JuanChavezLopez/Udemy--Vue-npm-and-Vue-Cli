<template>
    <div id="app">
        <p v-on:click="miAlerta">Hola mundo, con extension vue...good genial!</p>
    </div>
</template>

<script>
export default {
    name: "alerta",
    data() {
        return {}
    },
    methods: {
        miAlerta: function() {
            alert("Hola VUE..!");
        }
    }
}
</script>