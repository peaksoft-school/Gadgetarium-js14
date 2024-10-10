import Notification from "./components/UI/Toastify";
import { toastifyMessage } from "./utils/helpers/ToastSetting";

function App() {
  const handleSuccess = () => {
    // Пример успешного уведомления
    toastifyMessage({
      message: 'Товар успешно добавлен в корзину!',
      status: 'success',
      linkText: 'Перейти в корзину',
      linkUrl: '/cart',
    });
  };

  const handleError = () => {
    // Пример уведомления об ошибке
    toastifyMessage({
      message: 'Произошла ошибка при добавлении товара!',
      status: 'error',
    });
  };

  return (
    <div className="App">
      {/* Кнопка для демонстрации успешного уведомления */}
      <button onClick={handleSuccess}>Добавить товар</button>

      {/* Кнопка для демонстрации ошибки */}
      <button onClick={handleError}>Ошибка при добавлении товара</button>

      {/* Компонент для отображения уведомлений */}
      <Notification />
    </div>
  );
}

export default App;
