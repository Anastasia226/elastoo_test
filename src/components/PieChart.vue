<template>
    <DxPieChart
      id="pie"
      :data-source="data"
      palette="Bright"
    >
        <DxSeries
          argument-field="Группа"
          value-field="Доля"
        >
            <DxLabel :visible="true">
                <DxConnector
                  :visible="true"
                  :width="1"
                />
            </DxLabel>
        </DxSeries>
        <DxSize :width="600" />
    </DxPieChart>
</template>

<script>
import DxPieChart, {
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
} from 'devextreme-vue/pie-chart';

export default {
    components: {
        DxPieChart,
        DxSize,
        DxSeries,
        DxLabel,
        DxConnector,
    },
    data() {
        return {};
    },
    props: {
        data: {
            type: Array,
            default: () => [],
        }
    },
};
</script>

<style>
#pie {
    height: 440px;
}

#pie * {
    margin: 0 auto;
}
</style>
