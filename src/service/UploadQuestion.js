export default async function uploadQuestion(body) {
  try {
    const response = await fetch(
      'http://localhost:8080/add-question',
      {
        method: 'POST',
        body: JSON.stringify(body),
        header: {
          'Content-Type': 'application/json'
        }
      },
    );
    return response.json();
  } catch (e) {
    console.log(e);
    return e;
  }
}