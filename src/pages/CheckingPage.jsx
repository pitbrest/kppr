import { Container } from "../components/Container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function CheckingPage() {
  const [timer, setTimer] = useState(30);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const inputHandler = (e) => setValue(e.target.value);
  const submitHandler = () => console.log(value);

  useEffect(() => {
    if (timer === 0) return;

    const timerInterval = setInterval(() => setTimer(timer - 1), 1000);

    return () => clearInterval(timerInterval);
  });

  useEffect(() => {
    if (timer === 0) navigate("/");
  }, [timer]);

  return (
    <Container>
      <div className="flex justify-center">
        <div>
          <p className="text-base font-semibold mb-5">
            Для подтверждения прав доступа введите пароль и нажмите
            "подтвердить".
          </p>
          <div className="flex items-center gap-6 mb-5">
            <input
              type="text"
              name="text"
              id="password"
              placeholder="пароль"
              className="p-5 border rounded-sm w-[30%]"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                console.log(value);
              }}
            />
            <button
              className="inline-block bg-[--color-green] w-[95px] pb-1.5 pt-1.5 text-xs font-bold uppercase leading-normal text-[--color-light] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-150 ease-in-out hover:bg-[--color-teal] active:bg-[--color-teal] tracking-wide rounded-sm"
              onClick={submitHandler}
            >
              Подтвердить
            </button>
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
