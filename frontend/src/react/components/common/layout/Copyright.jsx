import { APP_NAME, APP_DEV } from "@config";
function Copyright() {
  const currentYear = new Date().getFullYear();
  const yearText = currentYear === 2023 ? "2023" : `2023 - ${currentYear}`;
  return (
    <>
      <p>
        {APP_NAME} - Copyright &copy; {yearText}
      </p>
      <p>{APP_DEV} - Tous Droits Réservés</p>
    </>
  );
}

export default Copyright;
