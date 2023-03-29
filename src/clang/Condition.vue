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
                <span class="ident-1">printf(&quot;fail&quot;);</span><br/>
                }<br/>
            </p>
            <p>输入多少时，输出<code>fail</code>？&#x1F914;</p>
        </CSlide>
        <CSlide title="注意事项">
            <div class="double">
                <p>if语句内<em>不要打分号</em></p>
                <p>如果不写花括号，<code>if</code>语句内只包含一条语句</p>
                <p class="code">if (score&lt;60)<span style="color: orange">;</span><br/>
                    <span class="ident-1 omit">printf(&quot;fail&quot;);</span>
                </p>
                <p class="code">if (score&lt;60)<br/>
                    <span class="ident-1">printf(&quot;you&nbsp;&quot;);</span><br/>
                    <span class="ident-1 omit">printf(&quot;fail&quot;);</span>
                </p>
            </div>
        </CSlide>
        <CSlide title="if ... else语句形式">
            <p class="code">int&nbsp;num=12;<br>
                if&nbsp;(num&gt;18)<br>
                <span class="ident-1 omit">printf(&quot;greater&nbsp;than&nbsp;18);</span><br>
                else<br>
                <span class="ident-1">printf(&quot;less&nbsp;than&nbsp;or&nbsp;equal&nbsp;to&nbsp;18&quot;);</span> </p>
            <p><em>if和else必须匹配！</em></p>
        </CSlide>
        <CSlide title="if ... else if语句">
            <p class="code">if(iSelection==1)&nbsp;{<br>
                <span class="ident-1">printf(&quot;first&nbsp;prize&quot;);</span><br>
                }&nbsp;else&nbsp;if&nbsp;(iSelection==2)&nbsp;{<br>
                <span class="ident-1">printf(&quot;second&nbsp;prize&quot;);</span><br>
                }&nbsp;else&nbsp;if&nbsp;(iSelection==3)&nbsp;{<br>
                <span class="ident-1">printf(&quot;third&nbsp;prize&quot;);</span><br>
                }&nbsp;else&nbsp;{<br>
                <span class="ident-1">printf(&quot;no&nbsp;prize&quot;);</span><br>
                }</p>
        </CSlide>
    </CLangLayout>
</template>

<script setup lang="ts">
import CSlide from "./CSlide.vue";
import CLangLayout from "./CLangLayout.vue";
</script>

<style scoped>
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

.ident-1 {
    margin-left: 4ex;
}

.ident-2 {
    margin-left: 8ex;
}

.ident-3 {
    margin-left: 12ex;
}

.double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
}
</style>
