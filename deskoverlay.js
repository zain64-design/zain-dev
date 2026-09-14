const style = document.createElement('style');
document.head.appendChild(style);

style.sheet.insertRule(`
  .overlay::before {
    content: '';
    position: fixed;
    inset: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5) 100%);
    z-index: 999;
  }
`, style.sheet.cssRules.length);

const div = document.createElement('div');
div.className = 'overlay';
document.body.appendChild(div);




// const style = document.createElement('style');

// style.innerHTML = .overlay::before {content:'';position: fixed; inset:0; height: 100%; width:100%; background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5) 100%); z-index: 999};

// document.head.appendChild(style);

// const div = document.createElement('div');
// div.className = 'overlay';
// document.body.appendChild(div);