export default function(el, onOver, onOut, options) {
  let x, y, pX, pY, state = 0, timer = 0, focused = false, mouseOver = false;

  const defaultOptions = {
    sensitivity: 10,
    interval: 100,
    timeout: 0,
    handleFocus: false
  };

  options = { ...defaultOptions, ...options };

  function delay(e) {
    if (timer) clearTimeout(timer);
    state = 0;
    return focused ? undefined : onOut.call(el, e);
  }

  function tracker(e) {
    x = e.clientX;
    y = e.clientY;
  }

  function compare(e) {
    if (timer) clearTimeout(timer);
    if ((Math.abs(pX - x) + Math.abs(pY - y)) < options.sensitivity) {
      state = 1;
      return focused ? undefined : onOver.call(el, e);
    } else {
      pX = x;
      pY = y;
      timer = setTimeout(() => compare(e), options.interval);
    }
  }

  function dispatchOver(e) {
    if (options.capture) e.stopPropagation();
    mouseOver = true;
    if (timer) clearTimeout(timer);
    el.removeEventListener('mousemove', tracker);
    if (state !== 1) {
      pX = e.clientX;
      pY = e.clientY;
      el.addEventListener('mousemove', tracker);
      timer = setTimeout(() => compare(e), options.interval);
    }
    return this;
  }

  function dispatchOut(e) {
    mouseOver = false;
    if (timer) clearTimeout(timer);
    el.removeEventListener('mousemove', tracker);
    if (state === 1) {
      timer = setTimeout(() => delay(e), options.timeout);
    }
    return this;
  }

  function dispatchFocus(e) {
    if (!mouseOver) {
      focused = true;
      onOver.call(el, e);
    }
  }

  function dispatchBlur(e) {
    if (!mouseOver && focused) {
      focused = false;
      onOut.call(el, e);
    }
  }

  function addFocus() {
    el.addEventListener('focus', dispatchFocus);
    el.addEventListener('blur', dispatchBlur);
  }

  function removeFocus() {
    el.removeEventListener('focus', dispatchFocus);
    el.removeEventListener('blur', dispatchBlur);
  }

  function manualReset() {
    state = 1;
    dispatchOut();
  }

  const publicAPI = {
    options(opt) {
      const focusOptionChanged = opt.handleFocus !== options.handleFocus;
      options = { ...options, ...opt };
      if (focusOptionChanged) {
        options.handleFocus ? addFocus() : removeFocus();
      }
      return publicAPI;
    },
    remove() {

      if (!el) {
        return
      }

      if (timer) {
          clearTimeout(timer)
      }

      el.removeEventListener('mouseover', dispatchOver);
      el.removeEventListener('mouseout', dispatchOut);
      removeFocus();
    },
    manualReset
  };

  if (el) {
    el.addEventListener('mouseover', dispatchOver);
    el.addEventListener('mouseout', dispatchOut);
  }

  return publicAPI;
}