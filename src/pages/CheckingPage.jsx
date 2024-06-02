import { Container } from "../components/Container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckingPage() {
  const [timer, setTimer] = useState(30);
  const [value, setValue] = useState("");
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const generatePassword = () => {
    const date = new Date();
    const day =
      date.getUTCDate() < 10
        ? "0".concat(date.getUTCDate())
        : date.getUTCDate();
    const month =
      date.getMonth() + 1 < 10
        ? "0".concat(date.getMonth() + 1)
        : date.getMonth() + 1;
    const year = date.getFullYear();
    return [day, month, year].join(".");
  };

  const inputHandler = (e) => setValue(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    password === value ? navigate("/documents") : navigate("/");
  };

  useEffect(() => {
    if (timer === 0) return;

    const timerInterval = setInterval(() => setTimer(timer - 1), 1000);

    return () => clearInterval(timerInterval);
  });
  useEffect(() => {
    if (timer === 0) navigate("/");
  }, [timer]);
  useEffect(() => {
    setPassword(generatePassword());
  }, []);

  return (
    <Container>
      <div className="flex justify-center">
        <div>
          <p className="text-base font-semibold mb-5">
            Для подтверждения прав доступа введите пароль и нажмите
            "подтвердить".
          </p>
          <div className="flex items-center gap-6 mb-5">
            <form className="flex items-center gap-6 mb-5">
              <input
                type="text"
                name="text"
                id="password"
                placeholder="пароль"
                className="p-5 border rounded-sm w-[30%] tracking-wider font-semibold"
                value={value}
                onChange={inputHandler}
              />
              <button
                type="submit"
                className="inline-block bg-[--color-green] w-[95px] pb-1.5 pt-1.5 text-xs font-bold uppercase leading-normal text-[--color-light] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-150 ease-in-out hover:bg-[--color-teal] active:bg-[--color-teal] rounded-sm"
                onClick={submitHandler}
              >
                Подтвердить
              </button>
            </form>
          </div>
          <p className="text-base font-semibold mb-5">
            Через
            <span className="text-3xl font-bold px-2">{timer}</span>
            секунд вы будете перенаправлены на главную страницу.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default CheckingPage;
