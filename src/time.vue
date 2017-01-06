<template>
    <div>
        <div>data:{{data}}</div>
        <time id="time" ref="timeago" :datetime="{dataago}">{{data}}</time>
       <!-- <time >{{timeagoInstance.format(this.props.datetime, this.props.locale)}}</time>-->
    </div>
</template>
<script>//live: true, locale: 'en'
    import timeago from 'timeago.js'
    export default{
        props: ['datetime','locale', 'live'],
        data(){
            return {
                timeagoInstance: null,
                name:'yacd',
                data:'',
                dataago:'',
            }
        },
        beforeCreate(){
            console.log('this.props===>', this.locale)
        },
        methods: {
            renderTimeAgo() {
                this.timeagoInstance.cancel();
                if (this.live !== false) {
                    if (this.datetime.date instanceof Date){
                      this.dataago =this.datetime.date.getTime()
                    }
                    else{
                        this.dataago =this.datetime.date
                    }
                    //此行大块就报错
                   //this.timeagoInstance.render(this.$refs.timeago, this.locale.locale);
                }
            },
        },
        computed:{
          dataComputed:function () {
              return this.timeagoInstance.format(this.datetime.data, this.locale.locale)
          }
        },
        updated(){
            console.log('update');
            this.renderTimeAgo();
        },
        beforeMount(){
            this.timeagoInstance.cancel();
            this.timeagoInstance = null;
        },
        created(){
            if (this.timeagoInstance === null){
                this.timeagoInstance = timeago();
            }
            console.log(this.locale.locale)
            if (this.locale.locale !== 'en' && this.locale.locale !== 'zh_CN'){
                console.log(this.locale.locale)
                timeago.register(this.locale.locale, require('timeago.js/locales/' + this.locale.locale));
            }
            this.renderTimeAgo();
            this.data= this.timeagoInstance.format(this.datetime.data, this.locale.locale)
        }
    }
</script>