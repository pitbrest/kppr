import { Container } from "../components/Container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function CheckingPage() {
  const [timer, setTimer] = useState(30);

  const navigate = useNavigate();

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
      <div>
        <p className="text-lg mb-5">
          Для подтверждения прав доступа введите пароль и нажмите "подтвердить"
        </p>
        <div className="flex items-center gap-4">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="пароль"
            className="p-5 border rounded-md mb-5"
          />
          <Button title={"подтвердить"} />
        </div>
        <p className="text-lg">
          в противном случае через{" "}
          <span className="text-3xl font-bold px-2">{timer}</span>
          секунд вы будете перенаправлены на главную страницу.
        </p>
      </div>
    </Container>
  );
}

export default CheckingPage;
