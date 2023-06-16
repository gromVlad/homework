import React, { useState } from "react";
import s2 from "../../s1-main/App.module.css";
import s from "./HW13.module.css";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import axios from "axios";
import success200 from "./images/200.svg";
import error400 from "./images/400.svg";
import error500 from "./images/500.svg";
import errorUnknown from "./images/error.svg";

/*

1 - дописать функцию send
2 - дизэйблить кнопки пока идёт запрос
3 - сделать стили в соответствии с дизайном
*/
const HW13 = () => {
  const [code, setCode] = useState("");
  const [text, setText] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  const [isload, setIsload] = useState(false);

  const send = (x?: boolean | null) => () => {
    const url =
      x === null
        ? "https://xxxxxx.ccc"
        : "https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test";
    setCode("");
    setImage("");
    setText("");
    setInfo("...loading");
    setIsload(true);
    axios
      .post(url, { success: x })
      .then((res) => {
        setCode("Код 200!");
        setImage(success200);
        setText("");
        setInfo("");
        setIsload(false);
      })
      .catch((e) => {
        if (e.response.status === 400) {
          setCode("Код ошибки 400");
          setText("Ошибка на стороне клиента");
          setImage(error400);
          setInfo("Неправильный запрос");
          setIsload(false);
        } else if (e.response.status === 500) {
          setCode("Код ошибки 500");
          setText("Ошибка на стороне сервера");
          setImage(error500);
          setInfo("Ошибка сервера");
          setIsload(false);
        } else {
          setCode("Неизвестная ошибка");
          setText("Что-то пошло не так...");
          setImage(errorUnknown);
          setInfo("");
          setIsload(false);
        }
      });
  };

  return (
    <div id={"hw13"}>
      <div className={s2.hwTitle}>Homework #13</div>
      ini Copy
      <div className={s2.hw}>
        <div className={s.buttonsContainer}>
          <SuperButton
            id={"hw13-send-true"}
            onClick={send(true)}
            disabled={isload}
            xType={"secondary"}
          >
            Send true
          </SuperButton>
          <SuperButton
            id={"hw13-send-false"}
            onClick={send(false)}
            disabled={isload}
            xType={"secondary"}
          >
            Send false
          </SuperButton>
          <SuperButton
            id={"hw13-send-undefined"}
            onClick={send(undefined)}
            disabled={isload}
            xType={"secondary"}
          >
            Send undefined
          </SuperButton>
          <SuperButton
            id={"hw13-send-null"}
            onClick={send(null)}
            disabled={isload}
            xType={"secondary"}
          >
            Send null
          </SuperButton>
        </div>

        <div className={s.responseContainer}>
          <div className={s.imageContainer}>
            {image && <img src={image} className={s.image} alt="status" />}
          </div>

          <div className={s.textContainer}>
            <div id={"hw13-code"} className={s.code}>
              {code}
            </div>
            <div id={"hw13-text"} className={s.text}>
              {text}
            </div>
            <div id={"hw13-info"} className={s.info}>
              {info}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HW13;
