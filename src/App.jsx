// import { toastifyMessage } from "./utils/helpers/ToastSetting";

import { toastifyMessage } from "./utils/helpers/ToastSetting";

// const App = () => {
//   const ckick = () => {
//     toastifyMessage({
//       status: "error",
//       duration: 2000,
//       message: "sdfhksajh ",
      
//     });
//   };
//   return <h1  onClick={ckick}>hello world</h1>;
// };

// export default App;
// App.jsx


const App = () => {
  const handleShowToast = () => {
    // Вызов функции для показа уведомления
    toastifyMessage({
      message: "Успешно выполнено!",
      status: "success",
      duration: 2000,
    });
  };

  return (
    <div>
      <h1>Toastify Example</h1>
      <button onClick={handleShowToast}>Показать уведомление</button> {/* Кнопка для показа уведомления */}
    </div>
  );
};

export default App;

