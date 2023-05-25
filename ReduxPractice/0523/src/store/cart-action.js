// 작업생성자 만들기 thunk로 만든다

// 장바구니 데이터 함수
import { uiActions } from "./ui-slice";
import { cart2Action } from "./index";

// 새로고침할때마다 데이터가 날아가기 떄문에 서버에서 조회해서 채우려고함.
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      console.log("fetchdata");
      const response = await fetch(
        "https://react-http-1adf2-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      return await response.json();
    };
    try {
      const cartData = await fetchData();
      console.log("test2");
      dispatch(
        cart2Action.replaceCart({
          // 프로덕트를 장바구니에 추가할 때
          // 빈 장바구니일 때 find .id 를 할 수없어서 (undefined 상태) 장바구니 추가할 떄마다 에러가 뿜음
          // 해결방법 : 서버에서 장바구니를 가져올때 빈 장바구니일경우 빈배열을 만들어주는 객체로 생성
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      console.log(cartData);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching data failed.",
        })
      );
    }
  };
};
//
export const sendCartData = (cart) => {
  return async (dispatch) => {
    //여기서 비동기요청과 부수효과를 작성하면 된다.
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "sending cart data!",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-1adf2-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "sending cart data failed",
        })
      );
    }
  };
};
