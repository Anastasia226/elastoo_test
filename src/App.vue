<template>
    <div id="app">
        <el-button type="primary" @click.prevent="dialogVisible = true">Создать график</el-button>
        <el-dialog
          title="Создать график"
          :visible.sync="dialogVisible"
          width="50%"
        >
            <div class="body">
                <div class="body__select-item">
                    <el-select v-model="typeChart" placeholder="Выберите тип графика">
                        <el-option
                          v-for="item in typeChartsList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="body__select-item">
                    <el-select v-model="dataSource" :disabled="!typeChart" placeholder="Выберите источник данных">
                        <el-option
                          v-for="item in dataSourceList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
        <el-button type="primary" :disabled="!(typeChart && dataSource)" @click="handleCreate">Создать</el-button>
      </span>
        </el-dialog>
        <div class="charts-list">
            <chart-component v-for="(chart, i) in chartList" :key="i" :data="chart" />
        </div>
    </div>
</template>

<script>
import ChartComponent from '@/components/ChartComponent';

export default {
    name: 'App',
    components: {
        ChartComponent,
    },
    data() {
        return {
            dialogVisible: false,
            typeChart: null,
            dataSource: null,
            chartList: [],
            typeChartsList: [
                {
                    value: 'pie',
                    label: 'Pie Chart'
                },
                {
                    value: 'line',
                    label: 'Line Chart'
                }
            ],
            dataSourcePieChartList: [{
                value: 'https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047',
                label: 'https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047'
            }],
            dataSourceLineChartList: [{
                value: 'https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2',
                label: 'https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2'
            }]
        };
    },
    computed: {
        dataSourceList() {
            return this.typeChart === 'pie' ? this.dataSourcePieChartList : this.dataSourceLineChartList;
        }
    },
    watch: {
        typeChart() {
            this.dataSource = null;
        },
    },
    methods: {
        async handleCreate() {
            this.dialogVisible = false;
            const response = await fetch(this.dataSource);
            if (response.ok) {
                const dataChart = await response.json();
                this.chartList.push({ type: this.typeChart, data: dataChart });
                this.dataSource = null;
                this.typeChart = null;
            }
        }
    }
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.15.10/lib/theme-chalk/index.css");

#app {
    text-align: center;
    margin-top: 60px;
}

.body__select-item .el-select {
    width: 100%;
    margin-bottom: 20px;
}

.charts-list {
    display: flex;
    flex-direction: column-reverse;
}
</style>
