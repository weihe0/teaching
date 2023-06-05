<script setup lang="ts">
import Plan from '@/layouts/Plan.vue'
import Paper from '@/layouts/Paper.vue'
</script>

<template>
  <Paper>
    <Plan
      keynote="操纵机械臂与设定基座标"
      difficulty="将机械爪移动到指定位置"
      :week="17"
      :count="1"
      :weekday="1"
      topic="华数机器人"
      :class-number="1"
    >
      <template #body>
        <ol>
          <li>华数机器人介绍</li>
          <ol>
            <li>示教器</li>
            <li>六轴机器人</li>
            <li>安全准则</li>
          </ol>
          <li>预备练习：手动操纵机械臂</li>
          <ol>
            <li>学会如何开机与关机</li>
            <li>机器人的运行模式：T1，T2，T3，T4</li>
            <li>
              操纵机器人前的检查清单：检查运行模式，检查运行速度，检查紧急停止按钮，检查报警信息
            </li>
            <li>用轴坐标系分别操纵机器人的六轴</li>
            <li>用世界坐标系调整机械爪的位置与姿态</li>
          </ol>
          <li>设定基座标</li>
          <ol>
            <li>将机器的基座标切换到“默认”</li>
            <li>选择测量->基座标->3点法</li>
            <li>设定原点、X方向、Y方向，Z方向垂直于X轴与Y轴。Z轴的朝向与X轴、Y轴满足右手法则</li>
            <li>标定坐标，然后保存基座标</li>
            <li>
              将机器的基座标切换到刚刚保存的坐标，沿着自定义的基座标的X方向、Y方向与Z方向移动，检查坐标设定是否正确
            </li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>什么是轴坐标系？什么是世界坐标系？</li>
          <li>工具坐标系的作用是什么？基座标的作用是什么？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生非常重视操作安全，</li>
          <li>学生在使用示教器时，点击屏幕过于频繁，导致示教器死机的事情时有发生</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="设定工具坐标系"
      difficulty="从多个角度接近参考点"
      :week="17"
      :count="2"
      :weekday="1"
      topic="工具坐标系"
      :class-number="1"
    >
      <template #body>
        <ol>
          <li>将机器的基座标切换到“默认”</li>
          <li>选择测量->基座标->3点法</li>
          <li>设定原点、X方向、Y方向，Z方向垂直于X轴与Y轴。Z轴的朝向与X轴、Y轴满足右手法则</li>
          <li>标定坐标，然后保存基座标</li>
          <li>
            将机器的基座标切换到刚刚保存的坐标，沿着自定义的基座标的X方向、Y方向与Z方向移动，检查坐标设定是否正确
          </li>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>什么是轴坐标系？什么是世界坐标系？</li>
          <li>工具坐标系的作用是什么？基座标的作用是什么？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生非常重视操作安全，</li>
          <li>学生在使用示教器时，点击屏幕过于频繁，导致示教器死机的事情时有发生</li>
          <li>学生在输入程序时，很容易将英文符号错误地输入为中文符号，导致程序出现语法错误</li>
          <li>学生运行程序的速度适中，基本上都成功实现了连续搬运的功能</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="华数机器人编程"
      difficulty="编写没有语法错误与运行错误的程序"
      :week="17"
      :count="3"
      :weekday="1"
      topic="华数机器人编程"
      :class-number="1"
    >
      <template #body>
        <ol>
          <li>
            dim指令用于定义变量，变量的类型包括location（位置），long（大范围整数），real（小数）等
          </li>
          <li>move指令表示沿着最快的曲线移动到指定坐标，moves指令表示沿着直线移动到指定坐标</li>
          <li>delay坐标用于延时，防止机械臂抖动时就执行下一条指令</li>
          <li>
            d_out指令用于发出信号。要使气爪闭合，d_out[9]=off，d_out[10]=on，要使气爪张开，d_out[9]=on，d_out[10]=off
          </li>
          <li>编写程序的注意事项：不能删除程序模板内的指令，不能使用中文符号</li>
        </ol>
        参考程序<br/>
        <code>
          dim P as location = #{0,0,50,0,0,0}<br/>
          LR[20]=LR[21]+P<br/>
          LR[30]=LR[31]+P<br/>
          move LR[20]<br/>
          moves LR[21]<br/>
          delay 1000<br/>
          d_out[9]=off<br/>
          d_out[10]=on<br/>
          delay 1000<br/>
          move LR[20]<br/>
          move LR[30]<br/>
          moves LR[31]<br/>
          delay 1000<br/>
          d_out[9]=on<br/>
          d_out[10]=off<br/>
          delay 1000<br/>
          move LR[30]<br/>
        </code>
      </template>
      <template #question>
        <ol>
          <li>什么是轴坐标系？什么是世界坐标系？</li>
          <li>工具坐标系的作用是什么？基座标的作用是什么？</li>
          <li>move指令与moves指令有什么区别？</li>
          <li>为什么程序中使用delay指令，不使用sleep指令？</li>
          <li>
            搬运程序使用哪些寄存器存放坐标？哪些坐标是起点，哪些坐标是途经点，哪些坐标是终点？
          </li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生非常重视操作安全，</li>
          <li>学生在使用示教器时，点击屏幕过于频繁，导致示教器死机的事情时有发生</li>
          <li>学生在输入程序时，很容易将英文符号错误地输入为中文符号，导致程序出现语法错误</li>
          <li>学生运行程序的速度适中，基本上都成功实现了连续搬运的功能</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="编写程序完成多次搬运"
      difficulty="使用while循环进行多次搬运，设定正确的寄存器"
      :week="17"
      :count="4"
      :weekday="1"
      topic="使用程序完成多次搬运"
      :class-number="1"
    >
      <template #body>
        <ol>
          <li>使用dim指令定义循环变量</li>
          <li>使用while与end while设定循环体，然后设定循环的条件</li>
          <li>用while循环改造搬运程序，修改相关的寄存器的编号</li>
          <li>在寄存器区域中设定起点与终点，由于要多次搬运，起点与终点有多个，必须正确设定</li>
          <li>加载程序，开始运行，完成多次搬运的任务</li>
        </ol>
        参考程序<br/>
        <code>
          dim P as location = #{0,0,50,0,0,0}<br/>
          dim T as long<br/>
          T = 1<br/>
          while T &lt;= 3<br/>
          LR[20]=LR[20+T]+P<br/>
          LR[30]=LR[30+T]+P<br/>
          move LR[20]<br/>
          moves LR[20+T]<br/>
          delay 1000<br/>
          d_out[9]=off<br/>
          d_out[10]=on<br/>
          delay 1000<br/>
          move LR[20]<br/>
          move LR[30]<br/>
          moves LR[30+T]<br/>
          delay 1000<br/>
          d_out[9]=on<br/>
          d_out[10]=off<br/>
          delay 1000<br/>
          move LR[30]<br/>
          T = T + 1<br/>
          end while<br/>
        </code>
      </template>
      <template #question>
        <ol>
          <li>move指令与moves指令有什么区别？</li>
          <li>为什么程序中使用delay指令，不使用sleep指令？</li>
          <li>
            搬运程序使用哪些寄存器存放坐标？哪些坐标是起点，哪些坐标是途经点，哪些坐标是终点？
          </li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生非常重视操作安全，</li>
          <li>学生在使用示教器时，点击屏幕过于频繁，导致示教器死机的事情时有发生</li>
          <li>学生在输入程序时，很容易将英文符号错误地输入为中文符号，导致程序出现语法错误</li>
          <li>学生运行程序的速度适中，基本上都成功实现了连续搬运的功能</li>
        </ol>
      </template>
    </Plan>
  </Paper>

</template>

<style scoped></style>
