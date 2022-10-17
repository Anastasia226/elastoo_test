<template>
    <DxChart
      id="chart"
      :data-source="data"
      palette="Violet"
    >
        <DxCommonSeriesSettings
          type="line"
          argument-field="Дата"
        />
        <DxSeries
          v-for="energy in energySources"
          :key="energy.value"
          :value-field="energy.value"
          :name="energy.name"
        />
        <DxMargin :bottom="10" />
        <DxArgumentAxis
          :value-margins-enabled="false"
          discrete-axis-division-mode="crossLabels"
        >
            <DxGrid :visible="true" />
        </DxArgumentAxis>
        <DxTooltip :enabled="true" />
    </DxChart>
</template>
<script>
import {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxGrid,
    DxMargin,
    DxTooltip,
} from 'devextreme-vue/chart';

export default {
    components: {
        DxChart,
        DxSeries,
        DxArgumentAxis,
        DxCommonSeriesSettings,
        DxGrid,
        DxMargin,
        DxTooltip,
    },
    data() {
        return {
            energySources: [
                { value: 'Процент', name: 'Процент' },
            ],
        };
    },
    props: {
        data: {
            type: Array,
            default: () => [],
        }
    },
};
</script>
