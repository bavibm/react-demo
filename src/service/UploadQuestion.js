export default async function uploadQuestion(body) {
  console.log(body)
  try {
    const response = await fetch(
      'http://localhost:8080/add-question',
      {
        method: 'POST',
      },
      body
    );
    console.log(response.status);
    return response.json();
  } catch (e) {
    console.log(e);
    return e;
  }
}