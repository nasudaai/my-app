async function getJson() {
  const res = await fetch('/data.json');
  const data = await res.json();
  console.log(data);
}

getJson();