// root = 'http://localhost/'
root = 'http://www.azukiazusa.site/';
// var host = 'http://yapi.demo.qunar.com/mock/86261';
var host = root + 'api';

Vue.component('navbar', {
    data: function () {
        return {
            count: 0,
            verifyPath: root,
            kuranReferencePath: root + 'kuran/reference/',
            kuranCalculatorPath: root + 'kuran/calculator/',
            // danjonReferencePath: root + 'danjon/reference/',
            danjonReferencePath: '#',
            danjonCalculatorPath: root + 'danjon/calculator/',
            href: window.location.href
        }
    },
    template: `
        <ul class="nav navbar-nav">
            <li v-bind:class="{ active: verifyPath == href }"><a v-bind:href="verifyPath">验证</a></li>
            <li v-bind:class="{ active: kuranReferencePath == href || kuranCalculatorPath == href}" class="dropdown">
                <a v-bind:href="kuranReferencePath" class="dropdown-toggle" data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false">会战<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li class="dropdown-header">作业</li>
                    <li v-bind:class="{ active: kuranReferencePath == href }"><a v-bind:href="kuranReferencePath">会战作业</a></li>
                    <li role="separator" class="divider"></li>
                    <li class="dropdown-header">计算工具</li>
                    <li v-bind:class="{ active: kuranCalculatorPath == href }"><a v-bind:href="kuranCalculatorPath">尾刀计算</a></li>
                </ul>
            </li>
            <li v-bind:class="{ active: danjonReferencePath == href || danjonCalculatorPath == href}" class="dropdown">
                <a v-bind:href="danjonReferencePath" class="dropdown-toggle" data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false">爬塔<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li class="dropdown-header">作业</li>
                    <li class="disabled" v-bind:class="{ active: danjonReferencePath == href }"><a v-bind:href="danjonReferencePath">爬塔作业</a></li>
                    <li role="separator" class="divider"></li>
                    <li class="dropdown-header">计算工具</li>
                    <li v-bind:class="{ active: danjonCalculatorPath == href }"><a v-bind:href="danjonCalculatorPath">血量测量</a></li>
                </ul>
            </li>
        </ul>
    `
})

new Vue({ el: 'navbar' });