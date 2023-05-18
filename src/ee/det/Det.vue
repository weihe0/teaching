<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import EELayout from '@/layouts/EELayout.vue'
import Math from '@/components/Math.vue'
const slides: Component[] = [
  {
    render() {
      return (
        <Slide title="行列式">
          <ol>
            <li>二阶与三阶行列式</li>
            <li>行列式的性质</li>
            <li>克拉默法则</li>
            <li>
              <Math tex={'n'} />
              阶行列式
            </li>
            <li>对换与逆序数</li>
            <li>行列式按列展开</li>
          </ol>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="行列式的引入">
          <svg
            style={{ fill: 'none', stroke: 'black', strokeWidth: 4, width: 400, height: 400 }}
            viewBox="0 0 600 600"
          >
            <polygon points="150,450 300,150 450,300" />
            <foreignObject x={150} y={450} width={150} height={50}>
              <Math tex={'(x_0,y_0)'} />
            </foreignObject>
            <foreignObject x={320} y={120} width={150} height={50}>
              <Math tex={'(x_1,y_1)'} />
            </foreignObject>
            <foreignObject x={450} y={300} width={150} height={50}>
              <Math tex={'(x_2,y_2)'} />
            </foreignObject>
          </svg>
          <p>如何用坐标计算三角形的面积？🤔</p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="转化为向量">
          <svg
            style={{ fill: 'none', stroke: 'black', strokeWidth: 4, width: 400, height: 400 }}
            viewBox="0 0 600 600"
          >
            <polygon points="150,450 300,150 600,0 450,300 " />
            <foreignObject x={50} y={300} width={300} height={50}>
              <Math tex={'(x_1-x_0,y_1-y_0)'} />
            </foreignObject>
            <foreignObject x={300} y={400} width={300} height={50}>
              <Math tex={'(x_2-x_0,y_2-y_0)'} />
            </foreignObject>
          </svg>
          <p>
            三角形面积等于两个向量围成的<em>梯形面积</em>的一半
          </p>
        </Slide>
      )
    }
  },
  /*  {
    render() {
      return (
        <Slide title="行列式的几何意义">
          <ol>
            <li>
              向量
              <Vector2 mat={'a'} j={1} />与<Vector2 mat={'a'} j={2} />
              围成的平行四边形的<em>带符号面积</em>为<Det2a />
            </li>
            <li>
              向量
              <Vector3 mat={'a'} j={1} />，<Vector3 mat={'a'} j={2} />，<Vector3 mat={'a'} j={3} />
              围成的平行六面体的<em>带符号体积</em>为<Det3a />
            </li>
          </ol>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="行列式的性质">
          <p>
            如何计算行列式？🤔从行列式的<em>性质</em>推导计算公式🤓
          </p>
          <Math
            tex={`${DetString([
              ['1', '0'],
              ['0', '1']
            ])}=1`}
          />
          <Math
            tex={
              `${DetString([
                ['ka_{11}', 'a_{12}'],
                ['ka_{21}', 'a_{22}']
              ])}=` +
              `k${DetString([
                ['a_{11}', 'a_{12}'],
                ['a_{21}', 'a_{22}']
              ])}`
            }
          />
          <Math
            tex={
              `${DetString([
                ['a_{1}+b_{1}', 'c_1'],
                ['a_{2}+b_{2}', 'c_2']
              ])}=` +
              `${DetString([
                ['a_{1}', 'c_{1}'],
                ['a_{2}', 'c_{2}']
              ])}+${DetString([
                ['b_{1}', 'c_{1}'],
                ['b_{2}', 'c_{2}']
              ])}`
            }
          />
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'行列式的性质2'}>
          <Math
            tex={
              `${DetString([
                ['a_1', 'b_1'],
                ['a_2', 'b_2']
              ])}` +
              `=-${DetString([
                ['b_1', 'a_1'],
                ['b_2', 'a_2']
              ])}`
            }
          />
          <p>
            如果
            <Math tex={'a=kb'} />
            ，即
            <Math tex={'a'} />与<Math tex={'b'} />
            平行，那么
            <Math
              tex={`${DetString([
                ['a_1', 'b_1'],
                ['a_2', 'b_2']
              ])}=0`}
            />
          </p>
        </Slide>
      )
    }
  },*/
  {
    render() {
      return (
        <Slide title={'利用性质推导'}>
          <Math
            tex={String.raw`\begin{vmatrix}  a_{11} & a_{12}
      \\ a_{21} & a_{22}
      \end{vmatrix}=\begin{vmatrix}
      \begin{bmatrix} a_{11} \\ 0 \end{bmatrix}
      + \begin{bmatrix} 0 \\ a_{21} \end{bmatrix} &
      \begin{bmatrix} a_{12} \\ 0 \end{bmatrix}
      + \begin{bmatrix} 0 \\ a_{22} \end{bmatrix}
      \end{vmatrix}\\
      =\begin{vmatrix}  a_{11} & a_{12}\\ 0 & 0
      \end{vmatrix}+
      \begin{vmatrix}  a_{11} & 0
      \\ 0 & a_{22}
      \end{vmatrix}+
      \begin{vmatrix} 0 & a_{12}
      \\ a_{21} & 0
      \end{vmatrix}+
      \begin{vmatrix}  0 & 0
      \\ a_{21} & a_{22}
      \end{vmatrix}\\
      =0+a_{11}a_{22}+(-a_{21}a_{12})+0\\
      =a_{11}a_{22}-a_{21}a_{12}`}
          />
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'余子式'}>
          <ol>
            <li>
              <Math tex={'a_{43}'} />
              的位置移动到
              <Math tex={'a_{11}'} />
              的位置，交换行列
              <Math tex={'(4-1)+(3-1)=5'} />
              次，符号为
              <Math tex={'(-1)^5'} />
            </li>
            <li>
              对于一般的
              <Math tex={'a_{ij}'} />
              ，需要交换
              <Math tex={'(i-1)+(j-1)'} />
              次行列，符号为
              <Math tex={'(-1)^{(i-1)+(j-1)}'} />
              ，化简得到
              <Math tex={'(-1)^{i+j}'} />
            </li>
            <li>
              <Math tex={'a_{ij}'} />
              消去第
              <Math tex={'i'} />
              行第
              <Math tex={'j'} />
              列得到<em>余子式</em>
              ，记为
              <Math tex={'M_{ij}'} />
            </li>
            <li>
              给余子式加上符号就得到<em>代数余子式</em>，记为
              <Math tex={'A_{ij}'} />
              ，两者的关系为
              <Math tex={'A_{ij}=(-1)^{i+j}M_{ij}'} />
            </li>
          </ol>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'Laplace定理'}>
          <p>
            设<Math tex={'A=|a_{ij}|'} />是<Math tex={'n'} />
            阶行列式，那么
            <Math tex={String.raw`A=\sum_{j=1}^n a_{ij}A_{ij}, i=1,2,\cdots,n`} />
            <Math tex={String.raw`A=\sum_{i=1}^n a_{ij}A_{ij},j=1,2,\cdots,n`} />
          </p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'展开示例'}>
          4阶行列式按第3行展开
          <Math tex={String.raw`A=a_{31}A_{31}+a_{32}A_{32}+a_{33}A_{33}+a_{34}A_{34}`} />
          4阶行列式按第2列展开
          <Math tex={String.raw`A=a_{12}A_{12}+a_{22}A_{22}+a_{32}A_{32}+a_{42}A_{42}`} />
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'逆序数'}>
          <ul>
            <li>
              <Math tex={String.raw`A=\sum_p (-1)^{t(p)} a_{1 p(1)} a_{1 p(2)}\cdots a_{n p(n)}`} />
            </li>
            <li>
              <Math tex={'p(i)'} />
              称为<em>全排列</em>
            </li>
            <li>
              示例：
              <table>
                <tbody>
                  <tr>
                    <td>
                      <Math tex={'i'} />
                    </td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>
                      <Math tex={'p(i)'} />
                    </td>
                    <td>2</td>
                    <td>4</td>
                    <td>3</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <Math tex={'t(p)'} />
              称为<em>逆序数</em>，决定了展开项的<em>符号</em>，示例中
              <Math tex={'t(p)=4'} />
            </li>
          </ul>
        </Slide>
      )
    }
  }
]
</script>

<template>
  <EELayout :slides="slides" />
</template>

<style scoped></style>
