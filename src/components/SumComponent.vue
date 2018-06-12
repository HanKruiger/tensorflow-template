<template>
    <div>
        <div>
            <input type="number" v-model='a'>
        </div>
        <div>
            <input type="number" v-model='b'>
        </div>
        <div>
            <button @click="add">Compute sum</button>
        </div>
        <div>
            <input type="number" v-model='result' readonly>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as tf from "@tensorflow/tfjs";

export default Vue.extend({
    data () {
        return {
            a: 1,
            b: 1,
            result: 0
        }
    },
    methods: {
        add () {
            // Compute the sum with TensorFlow
            const result = tf.scalar(this.a)
                .add(tf.scalar(this.b));

            // When it is done, set the data.
            result.data().then((data) => {
                const rounded = Math.round(data[0]);
                this.result = rounded;
            });
        }
    },

});
</script>

<style scoped lang="scss">
div {
    font-family: sans-serif;
}
</style>