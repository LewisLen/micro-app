import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './public-path';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

let root = null;
function render(props) {
  const { container } = props;
  const dom = container ? container.querySelector('#root') : document.getElementById('root');
  root = createRoot(dom);
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/sub-react' : '/'}>
      <App />
    </BrowserRouter>
  );
}

// 判断是否在qiankun环境下，非qiankun环境下独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// qiankun各个生命周期
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
export async function bootstrap() {
  console.log('React子应用bootstrap---->');
}

// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
  console.log('React子应用mount---->', props);
  // props.onGlobalStateChange((state, prev) => {
  //   // state: 变更后的状态; prev 变更前的状态
  //   console.log(state, prev);
  //   // 将这个state存储到我们子应用store
  // });
  // props.setGlobalState({ count: 2 });
  render(props);
}

// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount(props) {
  console.log('React子应用unmount---->', props);
  if (root) {
    root.unmount();
    root = null;
  }
}

export async function update(props) {
  // 更新微应用
  console.log('React子应用update---->', props);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
