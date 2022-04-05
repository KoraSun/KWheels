<template>
    <div class="ko-attr">
        <h2>Attributes</h2>
        <table class="attr-table">
            <thead>
                <tr class="title">
                    <th v-for="column in columns" :key="column.title">{{column.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item" class="content">
                    <td v-for="value in item" :key="value.params"
                     class="ko-attr-title td"
                    > {{value}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    export default {
        name:'attr',
        props:{
           columns:{
                type:Object
            },
            data:{
                type:Object
            }
        }    
    }
</script>

<style lang="scss" scoped>
.ko-attr {
   
    margin: 68px 0 32px;
    max-width: 85%;
    border-radius: 5px;
  h2 {
    font-size: 20px;
    padding: 8px 20px;
    border-bottom: 1px solid #dcdfe6;
  }
  .attr-table {
    padding-left: 80px;
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 2em;
    .title{
        padding: 8px 16px;
        border-bottom: 1px solid #d9d9d9;
       
    }

    .content{
        border-bottom: 1px solid #dbe6fa;
         
    }
    .ko-attr-title {
        text-align: center;
        white-space: nowrap;
        color: #909399;
        max-width: 250px;
    }
    .td {
        color: #606266;
        font-size: 14px;
    }
  }
}

</style>