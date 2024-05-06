const render = ($) => {
  $('#micro-jquery-box').html('Hello, render with jQuery');
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
      return render($);
    },
    unmount: (props) => {
      console.log('micro-jquery unmount', props);
      return Promise.resolve();
    },
  };
})(window);
