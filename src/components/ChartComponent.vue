<template>
    <div class="chart-component">
        <div v-if="data.type ==='pie'">
            <pie-chart :data="data.data" />
        </div>
        <div v-if="data.type ==='line'">
            <line-chart :data="data.data" />
        </div>
    </div>
</template>

<script>
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart';

export default {
    name: 'App',
    components: {
        PieChart,
        LineChart
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
};
</script>
