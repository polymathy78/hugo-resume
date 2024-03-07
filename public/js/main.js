console.log('This site was generated by Hugo.');

function getCounter() {
  const elem = document.getElementById('counter');
  console.log(elem);
  fetch(
    'https://zrzq671re4.execute-api.us-east-1.amazonaws.com/dev/get_counter'
  )
    .then((response) => response.json())
    .then((counter) => {
      const parsedData = JSON.parse(counter.body);
      let currentCount = parsedData.Item.counter.N;
      console.log('current count:', currentCount);
      elem.innerHTML = currentCount;
      console.log(elem);
      currentCount++;
      setCounter(currentCount);
    })
    .catch((error) => {
      elem.innerHTML = '#';
    });
}

function setCounter(num) {
  console.log('running set');
  fetch(
    'https://zrzq671re4.execute-api.us-east-1.amazonaws.com/dev/set_counter',
    {
      method: 'POST',
      body: JSON.stringify({
        website: 'jeffgraham.cloud',
        counter: num.toString(),
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
}
