function time() {
  const now = new Date();

  const human = Date();
  document.getElementById("humandnt").innerText = human

  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hr = String(now.getHours()).padStart(2, '0');
  const mn = String(now.getMinutes()).padStart(2, '0');
  const sc = String(now.getSeconds()).padStart(2, '0');
  
  const hdnt = parseFloat(yy + mm + dd + hr + mn + sc)
  document.getElementById("hdnt").innerText = hdnt
  const epoch = Date.now();
  document.getElementById("unixdnt").innerText = epoch
  console.log(epoch + toString(hdnt))
}

function browser() {
  document.getElementById("ver").innerText = navigator.userAgent
}


time()
browser()
