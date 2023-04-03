<script setup lang="ts">
import CSlide from "./CSlide.vue";
import CLangLayout from "./CLangLayout.vue";
import {onMounted, ref, watch} from "vue";
const iSelection=ref(1);
const lineExecutable=ref([false,false,false,false,false,false,false,false]);
const line=ref(-1);
watch(line,(l,ol)=>{
    if(ol>=0) {
        lineExecutable.value[ol] = false;
    }
    if(l>=0){
        lineExecutable.value[l]=true;
    }

})
onMounted(()=>{
    setInterval(()=>{
        ifAnimation.next();
    }, 1000);
});
const ifAnimation = (function *(){
    while (true){
        for(iSelection.value=1;iSelection.value<=4;iSelection.value++){
            line.value=-1;
            yield ;
            line.value=0;
            yield ;
            if(iSelection.value===1){
                line.value=1;
                yield ;
            }else{
                line.value=2;
                yield ;
                if(iSelection.value===2){
                    line.value=3;
                    yield ;
                } else{
                    line.value=4;
                    yield ;
                    if(iSelection.value===3){
                        line.value=5;
                        yield ;
                    } else {
                        line.value=7;
                        yield ;
                    }
                }
            }
        }
    }
})();

const switchFrames=[
  `int main() {
    int iSelection;
    scanf("%d", &iSelection);
    return 0;
}`,
  `int main() {
    int iSelection;
    scanf("%d", &iSelection);
    switch () {
    }
    return 0;
}`,
    `int main() {
    int iSelection;
    scanf("%d", &iSelection);
    switch (iSelection) {
        case 1:
    }
    return 0;
}`,
    `int main() {
    int iSelection;
    scanf("%d", &iSelection);
    switch (iSelection) {
        case 1:
            printf("first prize");
    }
    return 0;
}`,
    `int main() {
    int iSelection;
    scanf("%d", &iSelection);
    switch (iSelection) {
        case 1:
            printf("first prize");
            break;
    }
    return 0;
}`,
    `    switch (iSelection) {
        case 1:
            printf("first prize");
            break;
        case 2:
            printf("second prize");
            break;
        case 3:
            printf("third prize");
            break;
        default:
            printf("no prize");
            break;
    }`,
];
let step=ref(0);
onMounted(()=>{
    setInterval(()=>{
        step.value = (step.value + 1) % switchFrames.length;
    },4000);
});

const iSelection2=ref(1);
const lineExecutable2=ref([false,false,false,false,false,false,false,false]);
onMounted(()=>{
    setInterval(()=>{
        switchFallThrough.next();
    }, 1000);
})
const switchFallThrough = (function *(){
    while(true){
        for(iSelection2.value=4;iSelection2.value>=1;iSelection2.value--){
            yield ;
            for(let l=(iSelection2.value-1)*2;l<lineExecutable2.value.length;l++){
                lineExecutable2.value[l]=true;
                yield ;
            }
            for(let l=0;l<lineExecutable2.value.length;l++){
                lineExecutable2.value[l]=false;
            }
            yield ;
        }
    }
})();
</script>

<template>
    <CLangLayout>
        <CSlide title="条件判断语句">
            <ul>
                <li>单个<code>if</code>语句</li>
                <li><code>if ... else ... </code>语句</li>
                <li><code>if ... else if </code>语句</li>
                <li><code>if</code>语句嵌套</li>
                <li>条件运算符</li>
                <li><code>switch</code>语句</li>
            </ul>
        </CSlide>
        <CSlide title="单个if语句">
            <p class="code">int&nbsp;score;<br/>
                scanf(&quot;%d&quot;,&nbsp;&amp;score);<br/>
                if&nbsp;(score&lt;60)<br/>
                {<br/>
                <span class="indent-1">printf(&quot;fail&quot;);</span><br/>
                }<br/>
            </p>
            <p>输入多少时，输出<code>fail</code>？&#x1F914;</p>
        </CSlide>
        <CSlide title="注意事项">
            <div class="double">
                <p>if语句内<em>不要打分号</em></p>
                <p>如果不写花括号，<code>if</code>语句内只包含一条语句</p>
                <p class="code">if (score&lt;60)<span style="color: orange">;</span><br/>
                    <span class="indent-1 omit">printf(&quot;fail&quot;);</span>
                </p>
                <p class="code">if (score&lt;60)<br/>
                    <span class="indent-1">printf(&quot;you&nbsp;&quot;);</span><br/>
                    <span class="indent-1 omit">printf(&quot;fail&quot;);</span>
                </p>
            </div>
        </CSlide>
        <CSlide title="if ... else语句形式">
            <p class="code">int&nbsp;num=12;<br/>
                if&nbsp;(num&gt;18)<br/>
                <span class="indent-1 omit">printf(&quot;greater&nbsp;than&nbsp;18);</span><br/>
                else<br/>
                <span class="indent-1">printf(&quot;less&nbsp;than&nbsp;or&nbsp;equal&nbsp;to&nbsp;18&quot;);</span> </p>
            <p><em>if和else必须匹配！</em></p>
        </CSlide>
        <CSlide title="if ... else if语句">
            <p class="code" style="color: gray"><span>int main() {</span><br/>
                <span class="indent-1">int iSelection = <span class="changeable">
                    {{ iSelection }}</span>;</span><br/>
                <span :class="{'indent-1':true, executable:lineExecutable[0]}">if (iSelection==1) {<br/></span>
                <span :class="{'indent-2':true, executable:lineExecutable[1]}">
                    printf(&quot;first&nbsp;prize&quot;);</span><br/>
                <span :class="{'indent-1':true, executable:lineExecutable[2]}">
                    }&nbsp;else&nbsp;if&nbsp;(iSelection==2)&nbsp;{</span><br/>
                <span :class="{'indent-2':true, executable:lineExecutable[3]}">
                    printf(&quot;second&nbsp;prize&quot;);</span><br/>
                <span :class="{'indent-1':true, executable:lineExecutable[4]}">
                    }&nbsp;else&nbsp;if&nbsp;(iSelection==3)&nbsp;{</span><br/>
                <span :class="{'indent-2':true, executable:lineExecutable[5]}">
                    printf(&quot;third&nbsp;prize&quot;);</span><br/>
                <span :class="{'indent-1':true, executable:lineExecutable[6]}">
                    }&nbsp;else&nbsp;{</span><br/>
                <span :class="{'indent-2':true, executable:lineExecutable[7]}">
                    printf(&quot;no&nbsp;prize&quot;);</span><br/>
                }</p>
        </CSlide>
        <CSlide title="switch语句">
            <pre><code>{{switchFrames[step]}}</code></pre>
        </CSlide>
        <CSlide title="switch语句注意事项">
            <ul>
                <li>switch(<span style="color: saddlebrown">表达式</span>)中的<span style="color: saddlebrown">表达式</span>必须是<em>整数类型</em>或<em>字符类型</em></li>
                <li>case 常量表达式:，<em>不能是变量</em></li>
                <li>case 各个值应该<em>不同</em></li>
                <li>default分支可以出现在任何位置，也可以没有</li>
            </ul>
        </CSlide>
        <CSlide title="switch语句的坠落规则">
            <p class="code" style="color: gray">
                <span class="indent-1">int iSelection = <span class="changeable">
                    {{iSelection2}}</span>;</span><br/>
                <span class="indent-1 executable">switch (iSelection) {</span><br/>
                <span :class="{'indent-2': true, executable:lineExecutable2[0]}">case 1:</span><br/>
                <span :class="{'indent-3': true, executable:lineExecutable2[1]}">printf("first prize\n");</span><br/>
                <span :class="{'indent-2': true, executable:lineExecutable2[2]}">case 2:</span><br/>
                <span :class="{'indent-3': true, executable:lineExecutable2[3]}">printf("second prize\n");</span><br/>
                <span :class="{'indent-2': true, executable:lineExecutable2[4]}">case 3:</span><br/>
                <span :class="{'indent-3': true, executable:lineExecutable2[5]}">printf("third prize\n");</span><br/>
                <span :class="{'indent-2': true, executable:lineExecutable2[6]}">default:</span><br/>
                <span :class="{'indent-3': true, executable:lineExecutable2[7]}">printf("no prize\n");</span><br/>
                <span class="indent-1">}</span>
            </p>
        </CSlide>
        <CSlide title="思考题：输入的某个月份属于哪个季节🤔">
            <div>
                <p>输入月份</p>
                <ul>
                    <li>春季：3 4 5月</li>
                    <li>夏季：6 7 8月</li>
                    <li>秋季：9 10 11月</li>
                    <li>冬季：12 1 2月</li>
                </ul>
                <p>提示</p>
                <ol>
                    <li>使用switch语句</li>
                    <li>合理利用坠落规则</li>
                </ol>
            </div>
        </CSlide>
    </CLangLayout>
</template>

<style scoped>
pre{
    background-color: black;
    overflow: scroll;
}
code {
    color: white;
    background: black;
}

.code {
    display: block;
    font-family: monospace;
    font-style: normal;
    color: white;
    background: black;
    padding: 1ex;
}

.code p {
    margin: 0.2em;
}

.omit {
    color: gray;
}

.indent-1 {
    margin-left: 4ex;
}

.indent-2 {
    margin-left: 8ex;
}

.indent-3 {
    margin-left: 12ex;
}

.executable{
    color:white;
}
.changeable {
    color: indianred;
    background-color: darkgrey;
}
.double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
}
</style>
