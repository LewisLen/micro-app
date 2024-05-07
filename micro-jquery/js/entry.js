const render = ($) => {
  $('#micro-jquery-box').html('微前端jQuery子应用首页');
  return Promise.resolve();
};

((global) => {
  global['micro-jquery'] = {
    bootstrap: (props) => {
      console.log('micro-jquery bootstrap', props);
      return Promise.resolve();
    },
    mount: (props) => {
      console.log('micro-jquery mount', props);
      $('#micro-jquery-token').html(props.token);
      return render($);
    },
    unmount: (props) => {
      console.log('micro-jquery unmount', props);
      return Promise.resolve();
    },
  };
})(window);
