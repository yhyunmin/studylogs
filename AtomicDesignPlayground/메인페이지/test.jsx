import React, { useState } from 'react';

styled
const Test = () => {
  const [ text, setText ] = useState([
    'apple', 'grapes', 'orange', 'banana',
  ]);
  const [ text2, setText2 ] = useState([
    'apple', 'grapes', 'orange', 'banana',
  ]);
  const [ isHide, setIsHide ] = useState(false);

  // 스타알드 태그로 span 에게 transition 이랑 opacity 1을 줘요.
  // useeffect 작동할떄마다 얘네한테 classname 을 부여햐요
  // 예를들면 noshow. 이 classname은 styledcomponent로 &.noshow opacity0

  const interval =  3200;
  // 글자가 바뀌는 유즈이펙트
  useEffect(() => {
    setInterval(() => {
      const random = text[Math.floor(Math.random() * text.length)];
      setText(random)
      //   오파시티 0 되는 클래스네임 부여
      //   얘 오파시티가 0이되면 isHide 가 true 가 됨.
      // 그럼 isHide 가 true 일떄 , useEffect 가 작동 !
    }, interval)
  }, [ text, text2 ])
  // 텍스트 투명도가 0이될떄 ishide on 시키는 useEffect
  return (<div>
    <p>Lightweight, scalable animations for your
      <span>{ text }</span>and<span>{ text2 }</span>
    </p>
  </div>);
};

export default Test;
