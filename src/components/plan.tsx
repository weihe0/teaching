import {Children, PropsWithChildren, ReactNode} from "react";
import styles from "@/styles/plan.module.css";

export function PlanLayout(props: PropsWithChildren) {
  return <div className={styles.office}>
    <div className={styles.paper}>
      {props.children}
    </div>
  </div>
}

export function Plan(props: {
  count:number, week: number, weekday: number, classNumber: number,
  topic: string, keynote: string, difficulty: string, children: ReactNode
}) {
  const sinicizedCount=sinicizeNumber(props.count)
  const sinicizedWeek = sinicizeNumber(props.week)
  const sinicizedWeekday = sinicizeNumber(props.weekday)
  const children = Children.toArray(props.children)
  return <>
    <div className={styles.title}>
      <h1>第{sinicizedCount}次课的整体教学安排</h1>
    </div>
    <div className={styles.plan}>
      <div className={styles.time}>
        <div className={styles.head}>授课时间</div>
        <div>第{props.week}周周{sinicizedWeekday}第{props.classNumber}-{props.classNumber + 1}节</div>
        <div className={styles.head}>课时安排</div>
        <div>2</div>
      </div>
      <div>
        <span className={styles.head}>授课题目：</span><br/>
        <span>{props.topic}</span>
      </div>
      <div className={styles.body}>
        <span className={styles.head}>教学内容：</span><br/>
        <span className={styles.head}>基本内容：</span><br/>
          {children[0]}
        <span className={styles.head}>重点：</span><span>{props.keynote}</span><br/>
        <span className={styles.head}>难点：</span><span>{props.difficulty}</span><br/>
      </div>
      <div>
        <span className={styles.head}>讨论、思考题、作业：</span><br/>
          {children[1]}
      </div>
      <div>
        <span className={styles.head}>实施情况及分析</span><br/>
          {children[2]}
      </div>
      <div><span className={styles.head}>教学过程设计：
    </span>复习10分钟，授新课40分钟，安排讨论10分钟，布置作业20分钟
      </div>
      <div><span className={styles.head}>授课类型：
    </span><CheckList items={['理论课', '讨论课', '实验课', '练习课', '其它']} checkedIndex={0}/></div>
      <div><span className={styles.head}>教学方式：
    </span><CheckList items={['讲授', '讨论', '指导', '其它']} checkedIndex={0}/></div>
      <div><span className={styles.head}>教学资源：
    </span><CheckList items={['多媒体', '模型', '实物', '挂图', '音像', '其它']} checkedIndex={0}/></div>
    </div>
  </>
}

export function CheckList(props: { items: string[], checkedIndex: number }) {
  return <span className={styles.check}>
    {props.items.map((item, index) => <div>{item}
      <div className={styles.checkbox}>{index === props.checkedIndex ? '✓' : ''}</div>
    </div>)}
  </span>
}

export function CheckItem(props: { checked?: true, children: ReactNode }) {
  return <span className={styles.check}>{props.children}
    <span className={styles.checkbox}>{props.checked ? '✓' : ''}</span>
  </span>
}

export function sinicizeNumber(n: number) {
  n = Math.round(n)
  const sinoDigit = "零一二三四五六七八九十"
  if (n >= 0 && n <= 10) {
    return sinoDigit[n]
  } else if (n < 20) {
    return '十' + sinoDigit[n - 10]
  } else {
    throw new RangeError('只支持20以内的数')
  }
}
