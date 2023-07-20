type A = string | null | undefined | boolean | number;
//NonNullable: 여러타입중에서 null&undefined 만 제외하고 가져오는 유틸리티
//Key에 적용한다.
type B = NonNullable<A>; // string| boolean | number;

// NonNullable 직접 만들기

type CustomN<T> = T extends null | undefined ? never : T;
