console.log('This site was generated by Hugo.');

async function getCounter() {
  const response = await fetch(
    'https://zrzq671re4.execute-api.us-east-1.amazonaws.com/dev/get_counter'
  );
  const counter = await response.json();
  console.log(counter);
}
getCounter();
