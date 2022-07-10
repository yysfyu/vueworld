<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <slotchild v-slot="timeObj"  :end="countDown" :isMiniSecond="false">
            <span>
                {{timeObj.d}}天{{timeObj.hh}}小时{{timeObj.mm}}分钟{{timeObj.ss}}秒
            </span>     
        </slotchild>

        <slotchild v-slot="timeObj"  :time="60" :isMiniSecond="false">
            <span>
                {{timeObj.d}}天{{timeObj.hh}}小时{{timeObj.mm}}分钟{{timeObj.ss}}秒
            </span>     
        </slotchild>

        <slotchild v-slot="timeObj"  :time="100 * 1000" :isMilliSecond="true">
            <span>
                {{timeObj.d}}天{{timeObj.hh}}小时{{timeObj.mm}}分钟{{timeObj.ss}}秒
            </span>     
        </slotchild>
    </div>
</template>

<script>
import slotchild from "../components/slot/timecountdown.vue"

export default {
    name: 'home',
    components: {slotchild},
    data () {
        return {
            msg: "父组件",
            countDown: "",
        }
    },
    methods: {
        setCountDownData() {
            this.countDown = (Date.parse(new Date()) + 48*60*60-50000) / 1000;
            console.log(this.countDown)
        }
    },

    created() {
        this.setCountDownData();
    },
}
</script>

<style scoped>
    
</style>
