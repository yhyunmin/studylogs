# Redux 는 무엇인가 왜 쓰는가 ~  
배운게 얕아서 다시 공부
## What is redux ?
* 리덕스는 크로스컴포넌트 상태 관리 시스템 
* 상태를 변경하는 데이터를 관리하는데 도와준다.

## What is Cross-component / App-Wide State ?
* 리액트에서 상태 는 총 세가지의 종류가 있다.
> * Local State
> * Cross-Componenet State
> *  App-wide State

* Local State 란  데이터가 변경되어서 하나의 컴포넌트에 속하는 UI에  영향을 미치는 상태  
  (예를 들어, 사용자가 input 에 입력 후, 리액트는 키입력과 세부정보를 state에 저장하는 것 등등 useSate,useReducer)
* Cross-Component , 데이터가 하나의 컴포넌트가 아닌 여러 컴포넌트에 영향을 미치는 상태  
  (modal component와 같이 열고 닫는것이 다른 컴포넌트에도 영향을 미칠 때 prop 체인이 됨 drilling)
* App-wide State 는 다수의 컴포넌트가아닌 "모든" 컴포넌트의 영향이 미치는 상태를 말한다  
  (ex :로그인/로그아웃 상황의 다른 화면 출력)

## Redux Concepts
* 하나의 중앙 데이터 (Store)
* 컴포넌트가 store 를 구독
* 데이터가 변경시 store가 컴포넌트에게 알림
* 이 데이터는 state값이기 때문에 컴포넌트측에서도 변화가 있어야함
*  그렇지만, store에 저장된 데이터는 직접 조작하지않음
* 그러한이유로 컴포넌트가 store를 구독한 이유
* 리듀서 함수를 이용해 state를 변화함
* 리듀서와 컴포넌트를 연결하기 위해서 액션이 존재함
* 컴포넌트에서 액션을 리듀서에게 보냄
* 리듀서가 액션을 받아서 그 액션에 해당하는 새로운 싱태를 뱉어내고 
* 그 스테이트가 다시 Store에 들어감.


## 핵심 리덕스 개념
