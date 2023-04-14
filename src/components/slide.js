export default function Slide(props){
    return <section className="slide">
        <div className="title">
            <h1>{props.title}</h1>
        </div>
        <div className="body">
            {props.children}
        </div>
    </section>
}
