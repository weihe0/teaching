<template>
<ol>
    <li>哪些命题是正确的，哪些命题是错误的？（2分）</li>
    <ol>
        <li>连续函数必定是解析的</li>
        <li>解析函数必定是连续的</li>
        <li>连续但不解析的函数存在</li>
        <li>解析但不连续的函数存在</li>
    </ol>
    <li>求函数值（3分）</li>
    <ol>
        <li>\(e^{2+\frac{\pi}{2}i}\)</li>
        <li>\({(1+i)}^{2+i}\)</li>
        <li>\(\cos (1+i)\)</li>
    </ol>
    <li>求函数的导数（3分）</li>
    <ol>
        <li>\(f(z)=z^3\)</li>
        <li>\(f(z)=z+\frac{1}{z}\)</li>
        <li>\(f(z)=e^z\cos z\)</li>
    </ol>
    <li>计算曲线积分\[\oint_C \frac{\mathrm{d}z}{(z-z_0)^n}\]
        其中曲线\(C\)是以\(z_0\)为中心，\(r\)为半径的逆时针圆周， \(n\)为非负整数（2分）</li>
    <li>计算曲线积分\(\int_C z^2\mathrm{d}z\)，曲线\(C\)是任意一条从\(1+i\)出发，到\(2+3i\)结束的曲线。步骤如下（2分）</li>
    <ol>
        <li>求出\(z^2\)的原函数</li>
        <li>利用原函数计算积分</li>
    </ol>
    <li>求函数\[f(z)=\frac{sin z}{z^2}\]的洛朗级数。步骤如下（3分）</li>
    <ol>
        <li>列出\(\sin z\)的泰勒级数</li>
        <li>利用泰勒级数，求出\(f(z)\)的洛朗级数</li>
        <li>这个洛朗级数的极点是多少级极点？</li>
    </ol>
</ol>
</template>

<script setup lang="ts">
import renderMathInElement from "katex/contrib/auto-render";
import {onMounted} from "vue";

onMounted(()=>{
    renderMathInElement(document.body,{
        output: "html",
    });
})
</script>

<style scoped>
li{
    margin: 1ex;
}
</style>
