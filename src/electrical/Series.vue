<template>
    <ElectricalLayout>
        <Slide title="问题引出：根号2等于多少？">
            <div id="sqrt2">
                <p style="word-break: break-all">{{ sqrt2partial }}</p>
                <p style="font-size: 1.5em">&downarrow;</p>
                <p>\(\sqrt{2}\)</p>
            </div>
        </Slide>
        <Slide title="根号2就是数列的极限">
            <div id="sqrt2">
                <p>\(a_1=1.4\)<br/>\(a_2=1.41\)<br/>\(a_3=1.414\)<br/>\(a_4=1.4142\)<br/>\(a_5=1.41421\)<br/>\(\vdots\)
                </p>
                <p>\(\lim_{n\to\infty}a_n\to\sqrt{2}\)</p>
            </div>
        </Slide>
        <Slide title="复数列的极限">
            <p>设\(\alpha_n=a_n+ib_n\)为一<em>复数列</em><br/>当\(N(\varepsilon)\)足够大，\(|\alpha_n-\alpha|\)可以任意小，
                即\(|\alpha_n-\alpha|&lt;\varepsilon\)，其中\(\varepsilon\)为任意正数。我们称\(\{\alpha_n\}\)<em>收敛</em>
            </p>
        </Slide>
        <Slide title="极限举例">
            <p>
                \[\alpha_1=10^8,\alpha_n=\frac{1}{2}\Big(\alpha_{n-1}+\frac{2}{\alpha_{n-1}}\Big),\lim_{n\to\infty}\alpha_n=\sqrt{2}\]</p>
            <table>
                <thead>
                <tr>
                    <td>\(|\alpha_n-\alpha|&lt;\varepsilon\)</td>
                    <td>\(N\)</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>0.1</td>
                    <td>{{ N[0] }}</td>
                </tr>
                <tr>
                    <td>0.01</td>
                    <td>{{ N[1] }}</td>
                </tr>
                <tr>
                    <td>0.001</td>
                    <td>{{ N[2] }}</td>
                </tr>
                <tr>
                    <td>0.0001</td>
                    <td>{{ N[3] }}</td>
                </tr>
                <tr>
                    <td>0.00001</td>
                    <td>{{ N[4] }}</td>
                </tr>
                <tr>
                    <td>0.000001</td>
                    <td>{{ N[5] }}</td>
                </tr>
                </tbody>
            </table>
        </Slide>
        <Slide title="极限收敛的充要条件">
            <ul>
                <li>写出<em>实部</em>与<em>虚部</em>\(\alpha_n=a_n+ib_n\)</li>
                <li>\[\lim_{n\to\infty}\alpha_n=\lim_{n\to\infty}(a_n+ib_n)=a+ib\]</li>
            </ul>
        </Slide>
        <Slide title="级数">
            <ul>
                <li>设\(\{\alpha_n\}\)为复数列，表达式
                    \[s_n=\alpha_1+\alpha_2+\cdots+\alpha_n\]
                    称为<em>部分和</em></li>
                <li>\[\sum_{n=1}^{\infty}\alpha_n=\alpha_1+\alpha_2+\cdots+\alpha_n+\cdots\]
                    称为<em>无穷级数</em></li>
                <li>如果\(\{s_n\}\)收敛，那么称级数\(\sum_{n=1}^{\infty}\alpha_n\)收敛，否则称为<em>发散</em></li>
            </ul>
        </Slide>
        <Slide title="绝对收敛">
            <canvas width="720" height="480" ref="converge"></canvas>
            <p>如果\(\sum_{n=1}^{\infty}|\alpha_n|\)收敛，那么\(\sum_{n=1}^{\infty}\alpha_n\)也收敛，称为<em>绝对收敛</em>，
                否则称为<em>条件收敛</em></p>
        </Slide>
        <Slide title="条件收敛">
            <ul>
               <li>\[\sum_{n=1}^{\infty}\frac{(-1)^n}{n}\]</li>
                <li>\[\sum_{n=1}^{\infty}\Big|\frac{(-1)^n}{n}\Big|=\sum_{n=1}^{\infty}\frac{1}{n}\]不收敛</li>
            </ul>
        </Slide>
        <Slide title="幂级数">
            <ul>
                <li>函数项级数\[\sum_{n=0}^{\infty}f_n(z)\]</li>
                <li>幂级数\[\sum_{n=0}^{\infty}c_nz^n\]</li>
            </ul>
        </Slide>
        <Slide title="阿贝尔定理">
            <ul>
                <li>如果级数\(\sum_{n=0}^{\infty}c_nz^n\)在\(z=z_0\)收敛，那么对满足\(|z|&lt;|z_0|\)的\(z\)，级数必<em>绝对收敛</em></li>
                <li>如果级数\(\sum_{n=0}^{\infty}c_nz^n\)在\(z=z_0\)发散，那么对满足\(|z|&gt;|z_0|\)的\(z\)，级数必<em>发散</em></li>
            </ul>
        </Slide>
        <Slide title="收敛圆与收敛半径">
            幂级数的收敛情况
            <ol>
                <li>复平面内出处收敛</li>
                <li>除了\(z=0\)，其他地方都是发散的</li>
                <li>在\(|z|&lt;R\)内收敛，其中\(R\)称为<em>收敛半径</em></li>
            </ol>
        </Slide>
        <Slide title="幂级数的运算和性质">
            <ul>
                <li>\[\sum_{n=0}^{\infty}a_nz^n\pm\sum_{n=0}^{\infty}b_nz^n=\sum_{n=0}^{\infty}(a_n\pm b_n)z^n\]</li>
                <li>\[\Big(\sum_{n=0}^{\infty}a_nz^n\Big)\Big(\sum_{n=0}^{\infty}b_nz^n\Big)=
                    \sum_{n=0}^{\infty}\Big(\sum_{k=0}^n a_kb_{n-k}\Big)z^n\]</li>
            </ul>
        </Slide>
        <Slide title="泰勒级数">
            <ul>
                <li>\[f(z)=\sum_{n=0}^{\infty}\frac{1}{n!}f^{(n)}(z_0)(z-z_0)^n\]</li>
                <li>\[\sin z=z-\frac{z^3}{3!}+\frac{z^5}{5!}-\cdots+(-1)^n\frac{z^{2n+1}}{(2n+1)!}+\cdots\]</li>
                <li><a href="https://www.bilibili.com/video/BV1P14y1W7pJ" target="_blank">泰勒公式的形象解释</a></li>
            </ul>
        </Slide>
    </ElectricalLayout>
</template>

<script setup lang="ts">
import Slide from "../components/Slide.vue";
import {onMounted, onUpdated, ref} from "vue";
import ElectricalLayout from "./ElectricalLayout.vue";
import renderMathInElement from "katex/contrib/auto-render";
onMounted(()=>{
    renderMathInElement(document.body);
})
const sqrt2partial = ref("0");
const sqrt_animation = (function* () {
    const sqrt2 = "1.4142135623730950488016887242096980785696718753769480731766797379907324784621" +
        "07038850387534327641572735013846230912297024924836055850737212644121497099935831" +
        "41322266592750559275579995050115278206057147010955997160597027453459686201472851"
    while (true) {
        for (let partial_length = 3; partial_length <= sqrt2.length; partial_length++) {
            sqrt2partial.value = sqrt2.slice(0, partial_length);
            yield;
        }
    }
})();
setInterval(() => {
    sqrt_animation.next();
}, 100);
const N = ref([0, 0, 0, 0, 0, 0]);

let epsilon = 0.1
for (let i = 0; i < N.value.length; i++) {
    let a = 1e8, n = 1;
    for (n = 1; Math.abs(Math.sqrt(2) - a) >= epsilon; n++) {
        a = (a + 2 / a) / 2;
    }
    N.value[i] = n;
    epsilon /= 10;
}

const converge = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
    const converge_animation = (function* () {
        const c = converge.value!.getContext("2d")!;
        c.transform(1,0,0,-1,c.canvas.width/2,c.canvas.height/2);
        while (true) {
            draw_x_axis(c);
            yield;
            let x0 = 0, y0 = 0;
            let angle = Math.PI;
            let modulus = 100;
            let x1 = modulus * Math.cos(angle), y1 = modulus * Math.sin(angle);
            let accumulated_modulus = 0.0, old_accumulated_modulus = 0.0;
            for (let i = 0; i < 5; i++) {
                x1 = modulus * Math.cos(angle);
                y1 = modulus * Math.sin(angle);
                draw_arrow(c, x0, y0, x1, y1, "orange");
                yield;
                accumulated_modulus += modulus;
                draw_arrow(c, old_accumulated_modulus, 0, accumulated_modulus, 0, "yellow");
                yield;
                modulus /= 2;
                angle /= 2;
                x0 = x1;
                y0 = y1;
                old_accumulated_modulus = accumulated_modulus;
            }
            c.clearRect(-c.canvas.width / 2, -c.canvas.height / 2, c.canvas.width, c.canvas.height);
            yield;
        }
    })();
    setInterval(() => {
        converge_animation.next();
    }, 1000);
})

function draw_arrow(c: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, color: string) {
    const modulus = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
    const cos = (x1 - x0) / modulus, sin = (y1 - y0) / modulus;
    const side = 20;
    c.save();
    c.transform(cos, sin, -sin, cos, x0, y0);
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(modulus - side, 0);
    c.lineWidth = 3;
    c.strokeStyle = color;
    c.stroke();
    c.beginPath();
    c.moveTo(modulus, 0);
    c.lineTo(modulus - side, side / 2);
    c.lineTo(modulus - side, -side / 2);
    c.closePath();
    c.lineWidth = 1;
    c.fillStyle = color;
    c.fill();
    c.restore();
}

function draw_x_axis(c: CanvasRenderingContext2D) {
    c.save();
    c.moveTo(-c.canvas.width / 2, 0);
    c.lineTo(c.canvas.width / 2 - 30, 0);
    c.lineWidth = 4;
    c.strokeStyle = "SpringGreen";
    c.stroke();
    c.beginPath();
    c.moveTo(c.canvas.width / 2, 0);
    c.lineTo(c.canvas.width / 2 - 30, 15);
    c.lineTo(c.canvas.width / 2 - 30, -15);
    c.closePath();
    c.fillStyle = "SpringGreen";
    c.fill();
    c.restore();
}
</script>

<style scoped>
#sqrt2 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#sqrt2 p {
    margin: 0.2em;
}

table {
    border-collapse: collapse;
}

td {
    min-width: 4em;
    border: solid black 2px;
    text-align: center;
}

canvas {
    background: black;
}
</style>
