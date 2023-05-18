<script setup lang="ts">
import Paper from '@/layouts/Paper.vue'
import CodeBlock from '@/components/CodeBlock.vue'
</script>

<template>
  <Paper>
    <h1>实训指导书</h1>
    <section>
      <h2>工业机器人介绍</h2>
      <p>
        机器人(Robot)是自动执行工作的机器装置。它既可以接受人类指挥，又可以运行预先编排的程序，
        也可以根据以人工智能技术制定的原则纲领行动。它的任务是协助或取代人类工作的工作，例如生产业、建筑业，或是危险的工作。
        机器人技术是综合了计算机、控制论、机构学、信息和传感技术、人工智能、仿生学等多学科而形成的高新技术，
        是当代研究十分活跃，应用日益广泛的领域。机器人应用情况，是一个国家工业自动化水平的重要标志。
        工业机器人由操作机(机械本体)、控制器、何服驱动系统和检测传感装置构成，是一种仿人操作、自动控制、可重复编程、
        能在三维空间完成各种作业的机电-体化自动化生产设备。它对稳定、提高产品质量，提高生产效率，
        改善劳动条件和产品的快速更新换代起着十分重要的作用。
        机器人技术是综合了计算机、控制论、机构学、信息和传感技术、人工智能、仿生学等多学科而形成的高新技术，
        是当代研究十分活跃，应用日益广泛的领域。机器人应用情况，是一个国家工业自动化水平的重要标志。
        机械手是能模仿人和臂的某些动作功能，用以固定程序抓取、搬运物件或操作工具的自动操作装置。
        为了满足生产的需要，机械手要求设置多种工作方式，例如手动和自动(包括连续、单周期、单步和自动返回初始状态)工作方式。
        在运动控制方面PLC
        可以用于圆周运动或直线运动的控制。利用PLC程序控制可以实现机械手的控制要求。
        通过程序使各动作电磁阀动作，配合各极限位置的限位开关，准确又循环的连续操作。
        系统以液压传动为驱动方式，避免使用三相异步电动机,具有防过载的优点。
      </p>
    </section>
    <section>
      <h2>设定工具坐标系</h2>
      <p>
        华数机器人主要包括三大组成部分： 机器人本体、电气控制柜、示教器 。
        机器人控制器一般安装于机器人电柜内部，控制机器人的伺服驱动器、输入输出等主要执行设备；
        机器人示教器一般通过电缆连接到机器人电柜上，作为上位机通过以太网与控制器进行通讯
      </p>
      <img src="/training/bot.png" />
      <img src="/training/axis.png" /><br />
      <table class="description">
        <thead>
          <tr>
            <th>序号</th>
            <th>功能</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>切换运行模式</td>
          </tr>
          <tr>
            <td>2</td>
            <td>紧急停止</td>
          </tr>
          <tr>
            <td>3</td>
            <td>手动运行</td>
          </tr>
          <tr>
            <td>4</td>
            <td>程序调节量</td>
          </tr>
          <tr>
            <td>5</td>
            <td>手动调节量</td>
          </tr>
          <tr>
            <td>6</td>
            <td>菜单</td>
          </tr>
          <tr>
            <td>7</td>
            <td>暂停</td>
          </tr>
          <tr>
            <td>8</td>
            <td>停止</td>
          </tr>
          <tr>
            <td>9</td>
            <td>预留按键</td>
          </tr>
          <tr>
            <td>10</td>
            <td>自动运行</td>
          </tr>
          <tr>
            <td>11</td>
            <td>输入输出</td>
          </tr>
        </tbody>
      </table>
      <figure>
        <img src="/training/pad.png" />
      </figure>
    </section>
    <section>
      <h2>设定基坐标</h2>
    </section>
    <section>
      <h2>单次搬运</h2>
      <CodeBlock>
        MOVE&nbsp;ROBOT&nbsp;JR[2]&nbsp;VCRUISE=50；安全位<br />
        DELAY&nbsp;ROBOT&nbsp;1000；延时1秒<br />
        D_OUT[9]=ON；<br />
        D_OUT[10]=OFF；气爪松开<br />
        DELAY&nbsp;ROBOT&nbsp;1000；延时1秒<br />
        MOVE&nbsp;ROBOT&nbsp;LR[100]；工件上方<br />
        MOVES&nbsp;ROBOT&nbsp;LR[101]；工件正上方<br />
        MOVES&nbsp;ROBOT&nbsp;LR[102]；工件抓取位置<br />
        DELAY&nbsp;ROBOT&nbsp;1000；<br />
        D_OUT[9]=OFF；<br />
        D_OUT[10]=ON；夹紧<br />
        DELAY&nbsp;ROBOT&nbsp;1000；<br />
        MOVES&nbsp;ROBOT&nbsp;LR[101]；<br />
        MOVE&nbsp;ROBOT&nbsp;LR[100]；<br />
        MOVE&nbsp;ROBOT&nbsp;LR[103]；放置位的上方<br />
        MOVES&nbsp;ROBOT&nbsp;LR[104]；放置位的正上方<br />
        MOVES&nbsp;ROBOT&nbsp;LR[105]；放置点<br />
        DELAY&nbsp;ROBOT&nbsp;1000；<br />
        D_OUT[9]=ON；<br />
        D_OUT[10]=OFF；松开<br />
        DELAY&nbsp;ROBOT&nbsp;1000；<br />
        MOVES&nbsp;ROBOT&nbsp;LR[104]；<br />
        MOVES&nbsp;ROBOT&nbsp;LR[103]；<br />
        MOVE&nbsp;ROBOT&nbsp;JR[2]；回安全点
      </CodeBlock>
    </section>
    <section>
      <h2>多次搬运</h2>
      <CodeBlock>
        CALL&nbsp;REST；<br />
        WHILE&nbsp;TRUE；<br />
        IF&nbsp;D_IN[N]=1&nbsp;AND&nbsp;N＜6&nbsp;THEN；<br />
        IF&nbsp;F＜3&nbsp;THEN；<br />
        CALL&nbsp;PICK；<br />
        CALL&nbsp;PUTF；<br />
        F=F+1；<br />
        END&nbsp;IF；<br />
        END&nbsp;IF；<br />
        SLEEP&nbsp;10；<br />
        N=N+1；<br />
        IF&nbsp;N=6&nbsp;THEN；<br />
        N=3；<br />
        END&nbsp;IF；<br />
        SLEEP&nbsp;100；<br />
        END&nbsp;WHILE；<br />
        SUB&nbsp;REST；<br />
        N=3；<br />
        F=0；<br />
        Y=0；<br />
        D_OUT[9]=ON；<br />
        D_OUT[10]=OFF；<br />
        SLEEP&nbsp;100；<br />
        D_OUT[9]=OFF；<br />
        D_OUT[10]=OFF；<br />
        MOVE&nbsp;ROBOT&nbsp;JR[1]；<br />
        LR[1]={0,0,150,0,0,0}；<br />
        LR[2]={0,0,50,0,0,0}；<br />
        END&nbsp;SUB；<br />
        SUB&nbsp;PICK；<br />
        SELECT&nbsp;CASE&nbsp;N；<br />
        CASE&nbsp;3；<br />
        P1=LR[20]；<br />
        CASE&nbsp;4；<br />
        P1=LR[21]；<br />
        CASE&nbsp;5；<br />
        P1=LR[22]；<br />
        END&nbsp;SELECT；<br />
        SLEEP&nbsp;10；<br />
        MOVE&nbsp;ROBOT&nbsp;P1+LR[1]；<br />
        MOVES&nbsp;ROBOT&nbsp;P1+LR[2]；<br />
        MOVES&nbsp;ROBOT&nbsp;P1；<br />
        DELAY&nbsp;ROBOT&nbsp;100；<br />
        D_OUT[9]=OFF；<br />
        D_OUT[10]=ON；<br />
        SLEEP&nbsp;1000；<br />
        MOVES&nbsp;ROBOT&nbsp;P1+LR[2]；<br />
        MOVE&nbsp;ROBOT&nbsp;P1+LR[1]；<br />
        END&nbsp;SUB；<br />
        SUB&nbsp;PUTF；<br />
        SELECT&nbsp;CASE&nbsp;F；<br />
        CASE&nbsp;0；<br />
        P2=LR[40]；<br />
        CASE&nbsp;1；<br />
        P2=LR[41]；<br />
        CASE&nbsp;2；<br />
        P2=LR[42]；<br />
        END&nbsp;SELECT；<br />
        SLEEP&nbsp;10；<br />
        MOVE&nbsp;ROBOT&nbsp;P2+LR[1]；<br />
        MOVE&nbsp;ROBOT&nbsp;P2+LR[2]；<br />
        MOVES&nbsp;ROBOT&nbsp;P2；<br />
        DELAY&nbsp;ROBOT&nbsp;100；<br />
        D_OUT[9]=ON；<br />
        D_OUT[10]=OFF；<br />
        SLEEP&nbsp;1000；<br />
        MOVES&nbsp;ROBOT&nbsp;P2+LR[2]；<br />
        MOVES&nbsp;ROBOT&nbsp;P2+LR[1]；<br />
        END&nbsp;SUB；<br />
      </CodeBlock>
    </section>
  </Paper>
</template>

<style scoped>
p {
  text-indent: 2em;
}
section {
  width: 80%;
}
table.description {
  border-collapse: collapse;
}
table.description td {
  border: solid black 1px;
}
</style>
