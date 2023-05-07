<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import CLayout from '@/layouts/CLayout.vue'
import { ref } from 'vue'
const slides: Component[] = [
  {
    render() {
      return (
        <Slide title={'第14章 结构体'}>
          <ol>
            <li>结构体的应用场景</li>
            <li>结构体的定义</li>
            <li>结构体的使用</li>
            <li>结构体的嵌套</li>
            <li>结构体的数组</li>
            <li>结构体的指针</li>
          </ol>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'应用场景'}>
          <p class={'code'}>
            <span>char person0_name[20] = "Ho Lou Si";</span>
            <br />
            <span>unsigned int person0_id = 23;</span>
            <br />
            <span>float person0_temperature = 36.2f;</span>
            <br />
            <br />
            <span>char person1_name[20] = "Zhang San";</span>
            <br />
            <span>unsigned int person1_id = 15;</span>
            <br />
            <span>float person1_temperature = 36.3f;</span>
          </p>
          <p>假设我要记录某个人的姓名、编号、体温等信息</p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'归为一组变量'}>
          <ol>
            <li>person0_name</li>
            <li>person0_id</li>
            <li>person0_temperature</li>
          </ol>
          <p>
            三个变量必须<em>共同定义</em>，不能<em>缺少</em>
          </p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'定义结构体类型'}>
          <p class={'code'}>
            <span>struct person {'{'}</span>
            <br />
            <span class={'indent-1'}>char name[20];</span>
            <br />
            <span class={'indent-1'}>unsigned int id;</span>
            <br />
            <span class={'indent-1'}>float temperature;</span>
            <br />
            <span>{'};'}</span>
          </p>
          <p>
            <span class={'code'}>struct person</span>是<em>类型名</em>
          </p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'定义结构体的语法'}>
          <p>
            <span>struct my_structure</span>
            <br />
            <span>{'{'}</span>
            <br />
            <span class={'indent-1'}>double a;</span>
            <br />
            <span class={'indent-1'}>long *p;</span>
            <br />
            <span class={'indent-1'} style={{ color: 'gray' }}>
              //float p;
            </span>
            <br />
            <span class={'indent-1'}>char s[20];</span>
            <br />
            <span>{'}'}</span>
            <span style={{ color: 'blue' }}>;</span>
          </p>
          <ul>
            <li>
              <em>不能</em>在结构体定义中定义初值
            </li>
            <li>末尾有分号</li>
            <li>
              结构体中相同的名字<em>不能</em>出现多次
            </li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'定义结构体变量'}>
          <p>
            <em>struct person</em>是<em>类型名</em>
          </p>
          <p class={'code'}>struct person person0;</p>
          <p>定义了一个变量，类型是struct person，名字叫person0</p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'注意事项'}>
          <ul>
            <li>
              结构体是一种<em>数据类型</em>
            </li>
            <li>
              结构体内定义的名字称为<em>成员</em>
            </li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'结构体变量的初始化'}>
          <p class={'code'}>
            <span>struct person {'{'}</span>
            <br />
            <span class={'indent-1'}>
              char <span style={{ color: 'lawngreen' }}>name</span>[20];
            </span>
            <br />
            <span class={'indent-1'}>
              unsigned int <span style={{ color: 'limegreen' }}>id</span>;
            </span>
            <br />
            <span class={'indent-1'}>
              float <span style={{ color: 'darkgreen' }}>temperature</span>;
            </span>
            <br />
            <span>{'};'}</span>
            <br />
            <br />
            <span>struct person teacher_1 = {'{'}</span>
            <span style={{ color: 'lawngreen' }}>"Ho Lau Si"</span>,{' '}
            <span style={{ color: 'limegreen' }}>23</span>,
            <span style={{ color: 'darkgreen' }}>36.8f</span>
            <span>{'};'}</span>
          </p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'引用结构体的成员'}>
          <ul>
            <li>语法：结构体变量.成员</li>
            <li>
              作用：获得结构体变量的某个成员<em>变量</em>
            </li>
            <li>
              示例：<span class={'code'}>teacher_1.id = 25;</span>{' '}
            </li>
            <li>
              备注：点号（.）是一个<em>运算符</em>，只能用在表达式
              <span style={{ border: 'solid black 1px' }}>结构体变量.成员</span>中
            </li>
            <li>
              问题：已知person是结构体类型名，<span class={'code'}>person.id</span>能否编译？🤔
            </li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'结构体的数组'}>
          <p>语法：struct 结构体类型名 数组名[元素个数];</p>
          <p class={'code'}>
            <span>struct Dog {'{'}</span>
            <br />
            <span class={'indent-1'}>char breed[10];</span>
            <br />
            <span class={'indent-1'}>char color[10];</span>
            <br />
            <span class={'indent-1'}>float weight;</span>
            <br />
            <span class={'indent-1'}>int age;</span>
            <br />
            <span>{'};'}</span>
            <br />
            <span>struct Dog dogs[5];</span>
            <br />
            <span>dogs[0].breed="rural dog"</span>
          </p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'结构体数组的初始化'}>
          <p class={'code'}>
            <span>struct Dog dogs[3] = {'{'}</span>
            <br />
            <span class={'indent-1'}>
              {'{'}"Corgi", "white", 3.5f, 2{'}'},
            </span>
            <br />
            <span class={'indent-1'}>
              {'{'}"Teddy", "brown", 1.5f, 1{'}'},
            </span>
            <br />
            <span class={'indent-1'}>
              {'{'}"Husky", "white", 3.5f, 3{'}'},
            </span>
            <br />
            <span>{'}'}</span>
          </p>
        </Slide>
      )
    }
  },
  {
    setup() {
      let show = ref(false)
      return () => (
        <Slide title={'结构体指针'}>
          <p class={'code'}>
            <span>struct Dog {'{'}</span>
            <br />
            <span class={'indent-1'}>char breed[10];</span>
            <br />
            <span class={'indent-1'}>char color[10];</span>
            <br />
            <span class={'indent-1'}>float weight;</span>
            <br />
            <span class={'indent-1'}>int age;</span>
            <br />
            <span>{'};'}</span>
            <br />
            <span>struct {show.value ? 'Dog * pStruct;' : null}</span>
            <br />
          </p>
          <p>如何定义指向Dog结构体的指针？🤔</p>
          <button
            onClick={() => {
              show.value = !show.value
            }}
          >
            {show.value ? '隐藏答案' : '显示答案'}
          </button>
        </Slide>
      )
    }
  }
]
</script>

<template>
  <CLayout :slides="slides" />
</template>

<style scoped></style>
