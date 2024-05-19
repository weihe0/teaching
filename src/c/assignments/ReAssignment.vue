<script setup lang="ts">
import Frac from '@/ee/components/Frac.vue';
</script>

<template>
  <ul>
    <li>提交程序与截图</li>
    <li>抄袭得零分</li>
  </ul>
  <ol>
    <li>编写一个C程序，输出你的姓名与学号</li>
    <li>
      编写一个C程序，输入两个整数，计算两个整数的加法、减法、乘法、除法与取余运算的结果
    </li>
    <li>
      编写一个C程序，输入一个摄氏温度，输出对应的华氏温度，两个温度都是小数。设摄氏温度为
      c，华氏温度为f， 转换公式为f=<Frac
        ><template #num>9</template><template #de>5</template></Frac
      >c+32。当c=10.0时，f=50.0。 运行截图中 必须包含c=25与c=38的结果。
    </li>
    <li>
      编写一个C程序，输入一个<em>小数</em>，输出这个小数的绝对值。当这个数为负数时，绝对值等于它取反，否则等于它本身。
    </li>
    <li>
      输入一个整数，表示一个人的全年工资（2分）
      <ol>
        <li>如果全年工资&leqslant;36000，输出“税率3%”</li>
        <li>如果36000&lt;全年工资&leqslant;144000，输出“税率10%”</li>
        <li>如果144000&lt;全年工资&leqslant;300000，输出“税率20%”</li>
      </ol>
    </li>
    <li>
      输入一个国际区号，输出对应的区域名称。必须用switch语句（2分）
      <ul>
        <li>区号86表示“中国”</li>
        <li>区号81表示“日本”</li>
        <li>区号44表示“英国”</li>
        <li>区号1表示“北美”</li>
        <li>其他区号输出“未知”</li>
      </ul>
    </li>
    <li>
      输入一个整数n，如果1&leqslant;n&leqslant;20<em>不成立</em>，重复输入n，直到1&leqslant;n&leqslant;20成立为止。提示：使用do
      while语句（3分）
    </li>
    <li>
      先按照第7题输入一个1到20之间的n，然后计算1&times;2&times;...&times;n（3分）
    </li>
  </ol>
</template>

<style scoped></style>
