<template>
    <div>
        {{ equation }}
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as tf from "@tensorflow/tfjs";

export default Vue.extend({
    data () {
        return {
            equation: "Processing..."
        }
    },
    mounted () {
        this.sumOneAndOne();
    },
    methods: {
        sumOneAndOne () {
            // Compute the sum with TensorFlow
            const result = tf.scalar(1)
                .add(tf.scalar(1));

            // When it is done, set the data.
            result.data().then((data) => {
                const rounded = Math.round(data[0]);
                this.equation = `1 + 1 = ${rounded}`;
            });
        }
    },

});
</script>

<style scoped lang="scss">
div {
    font-family: monospace;
    text-align: center;
}
</style>