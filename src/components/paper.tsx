import {PropsWithChildren} from "react";
import styles from "@/styles/plan.module.css";

export function Paper(props:PropsWithChildren){
  return <div className={styles.office}>
    <div className={styles.paper}>
      {props.children}
    </div>
  </div>
}
