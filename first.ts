type User = {
  name: string;
  email: string;
};
type responseData = {
  name: string;
  email: string;
};

function fetchUserData(
  id: string,
  callback: (data: any) => void
): void {
  // Тут може бути якийсь запит, але ми його заповнимо самі
  const responseData = { name: 'Tom', email: '122@gmail.com' };

  callback(responseData);
}
