# styled component 마스터하기 

## 어떤역할의 태그인지 명시할 수 있다.
html 태그대신 컴포넌트을 사용하기 떄문에 태그명을 커스텀 할 수 있다.  
```js
<div>
<div></div>
</div>
// =>
<ItemList>
<ItemBox></ItemBox>
</ItemList>
// 와 같이 어떤역할의 태그인지 영역인지 한눈에 알기 쉽다.
```

## S컴포넌트에 props를 보내 스타일을 가변적으로 활용 할 수 있다.

```js
const Box1 = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const Box2 = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
<Box1 />
<Box2 />
// =>
const Box = styled.div`
background-color:${props => props.bgc};
width: 100px;
height: 100px;
`;
<Box bgc="teal"/>
<Box bgc="tomato"/>
```

## 스타일 상속 받기.
styled 이후 ()를 통해 원하는 스타일을 상속(확장) 할 수 있다.  
더 깔끔하게 사용할 수 있다.
```js
const Box = styled.div`
background-color:${props => props.bgc};
width: 100px;
height: 100px;
`;
const Circle = styled.div`
background-color:${props => props.bgc};
width:100px;
height:100px
`
// => 
const Circle = styled(Box)`
border-radius:50%;
`
```

## html 태그 조정하기 with As 
지정된 html 태그가 아닌 다른 태그를 사용 하고 싶을 때 사용할 수 있다.  
(polymorphic component 에서 사용 가능)  
`<Component as="">`

```js
const Box = styled.p``
<Box as="span"/>;
//p 태그인 Box 를 span 으로 재조정하였다.
```

## 태그 속성 styled 에 일괄 작성 하기
태그 속성을 여러번 작성 할 필요 없이.
styled component 를 통해 일괄 작성 할 수 있다. 
```js
<Input autofocus required />
//=>
const Input = styled.input.attr({autofocus:true,required:true})`
`
  
<Input />
```
가독성이 좋아진 모습
* minLength,maxLength 등 여러가지 사용 할 수 있다.

## styled Component Animation 활용
keyframes 를 styled components 에서 import 후
일반 컴포넌트처럼 사용하면됨.

```js
const Animation = keyframes`
//animation css 
`
```

## 스타일 가변적 대응
태그를 바꾸게되면 ( span -> p ) css상에서 선택자를   
styledcomponent의 컴포넌트명으로 지을 수 있다.
```js

const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${oneRound} 1s ease-in-out forwards;
  
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

```
Emoji가 p,span,div 상관없이 font-size:98px이 작동한다.
