const getData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    throw `Что-то пошло не так! Статус ошибки: ${response.status}`;
  }
};

export default getData;