async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}
(async () => {
  const apiUrl = " https://meowfacts.herokuapp.com/";

  try {
    const result = await fetchData(apiUrl);
    console.log("Результат запроса:", result);
  } catch {
    console.log("Не удалось получить данные.");
  }
})();
