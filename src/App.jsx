import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './header/Header'
import Body from './body/Body'

function App() {
  //초기 더미 데이터는 'data'가 아니라 'initialData' 객체로 따로 생성한다.
  const initialData = [
    { name: '박은규', phone: '010-6666-8888', group: '가족' },
    { name: '김영희', phone: '010-4444-5555', group: '직장' },
    { name: '박민수', phone: '010-2222-2222', group: '직장' },
    { name: '손심이', phone: '010-1111-1111', group: '친구' },
    { name: '홍길동', phone: '010-0000-0000', group: '친구' },
  ];
  // const data = JSON.parse(localStorage.getItem('numberLists')) || [];
  const [lists, setList] = useState(() => {
    const savedLists = localStorage.getItem('numberLists');
    return savedLists ? JSON.parse(savedLists) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('numberLists', JSON.stringify(lists));
  }, [lists]);

  return (
    <>
      <Header />
      <Body setList={setList} lists={lists}/>
    </>
  )
}

export default App

      // {/* <SearchCom /> */}
      // {/* <PostList /> */}
      // {/* <SaveBtn /> */}
      // {/* <InputEl />}
      // {<SelectEl /> */}
      // {/* <DetailModal /> */}
      // {/* <GroupModal /> */}
      // {/* <InputCom />
      // <ListArea /> */}
