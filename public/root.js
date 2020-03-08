// root = 'http://localhost/'
root = 'http://34.97.5.31/';
// var host = 'http://yapi.demo.qunar.com/mock/86261';
var host = root + 'api';

Vue.component('navbar', {
    data: function () {
        return {
            count: 0,
            verifyPath: root,
            referencePath: root + 'kuran/reference/',
            calculatorPath : root + 'kuran/calculator/',
            href: window.location.href
        }
    },
    template: `
        <ul class="nav navbar-nav">
            <li v-bind:class="{ active: verifyPath == href }"><a v-bind:href="verifyPath">验证</a></li>
            <li v-bind:class="{ active: referencePath == href || calculatorPath == href}" class="dropdown">
                <a v-bind:href="referencePath" class="dropdown-toggle" data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false">会战<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li class="dropdown-header">作业</li>
                    <li v-bind:class="{ active: referencePath == href }"><a v-bind:href="referencePath">会战作业</a></li>
                    <li role="separator" class="divider"></li>
                    <li class="dropdown-header">计算工具</li>
                    <li v-bind:class="{ active: calculatorPath == href }"><a v-bind:href="calculatorPath">尾刀计算</a></li>
                </ul>
            </li>
        </ul>
    `
})

new Vue({ el: 'navbar' });