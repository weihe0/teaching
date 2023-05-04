<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
</script>

<template>
  <Slide title="虚拟助教Jill Watson">
    <div class="timeline">
      <div class="outer">
        <div class="card">
          <div class="info">
            <h3 class="title">2014年秋季</h3>
            <p>用4万条提问训练Jill</p>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h3 class="title">2015年1月</h3>
            <p>开始测试，Jill经常出错，需要人工助教审核</p>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h3 class="title">2015年3月底</h3>
            <p>Jill可以直接跟学生沟通</p>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h3 class="title">2015年4月底</h3>
            <p>教授向学生公布Jill的真实身份，学生才知道Jill是<em>虚拟助教</em></p>
          </div>
        </div>
      </div>
    </div>
  </Slide>
</template>

<style scoped>
:root {
  --primary-color: #212121;
  --background-color: #111;
  --font: sans-serif;
}

* {
  margin: 0;
  padding: 0;
}

/* Timeline Container */
.timeline {
  background: var(--primary-color);
  margin: 20px auto;
  padding: 20px;
  font-size: 40%;
}

/* Card container */
.card {
  position: relative;
  max-width: 400px;
}

/* setting padding based on even or odd */
.card:nth-child(odd) {
  padding: 30px 0 30px 30px;
}
.card:nth-child(even) {
  padding: 30px 30px 30px 0;
}
/* Global ::before */
.card::before {
  content: '';
  position: absolute;
  width: 50%;
  border: solid orangered;
}

/* Setting the border of top, bottom, left */
.card:nth-child(odd)::before {
  left: 0px;
  top: -4.5px;
  bottom: -4.5px;
  border-width: 5px 0 5px 5px;
  border-radius: 50px 0 0 50px;
}

/* Setting the border of top, bottom, right */
.card:nth-child(even)::before {
  right: 0;
  top: 0;
  bottom: 0;
  border-width: 5px 5px 5px 0;
  border-radius: 0 50px 50px 0;
}

/* Removing the border if it is the first card */
.card:first-child::before {
  border-top: 0;
  border-top-left-radius: 0;
}

/* Removing the border if it is the last card  and it's odd */
.card:last-child:nth-child(odd)::before {
  border-bottom: 0;
  border-bottom-left-radius: 0;
}

/* Removing the border if it is the last card  and it's even */
.card:last-child:nth-child(even)::before {
  border-bottom: 0;
  border-bottom-right-radius: 0;
}

/* Information about the timeline */
.info {
  display: flex;
  flex-direction: column;
  background: #333;
  color: gray;
  border-radius: 10px;
  padding: 10px;
}

/* Title of the card */
.title {
  color: orangered;
  position: relative;
}

/* Timeline dot  */
.title::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 999px;
  border: 3px solid orangered;
}

/* text right if the card is even  */
.card:nth-child(even) > .info > .title {
  text-align: right;
}

/* setting dot to the left if the card is odd */
.card:nth-child(odd) > .info > .title::before {
  left: -45px;
}

/* setting dot to the right if the card is odd */
.card:nth-child(even) > .info > .title::before {
  right: -45px;
}
</style>
