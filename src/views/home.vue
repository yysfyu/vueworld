<template>
    <div class="home">
        <el-container>
            <el-header height="50px" >Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <leftAside></leftAside>
                </el-aside>
                <el-container>
                    <el-main>
                        Main
                    </el-main>

                    <el-footer>
                        Footer
                    </el-footer>

                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import leftAside from './leftaside.vue'

export default {
    name: 'home',
    components: {leftAside},
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
    .el-container {
        height: 100%;
    }
    .el-header {
        background-color: #b3c0d1;
        color: #333;
        line-height: 60px;
    }
    .el-aside {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }
</style>
