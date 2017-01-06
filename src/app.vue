<!--suppress ALL -->
<template>
    <div id="app">
        <Time :datetime="{date:date}" :locale="{locale:en}" :live="true"/>
    </div>
</template>
<script>
    import Time from './time.vue'
    export default{
        data(){
            return {
                date:new Date(),
                en:'en'
            }
        },
        created(){
            console.log('time')
        },
        components:{Time}
    }


</script>
<style lang="scss" rel="stylesheet/scss">
    html {
        height: 100%;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    #app {
        color: #2c3e50;
        margin-top: -100px;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
        a {
            color: #42b983;
            text-decoration: none;
        }
    }

</style>
