import './style.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
hljs.highlightAll();
document.querySelectorAll('code').forEach(el => {
    // then highlight each
    hljs.highlightElement(<HTMLElement>el);
});
