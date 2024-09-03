import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import Body from './body/Body'

function App() {
  const data = [
    { name : '김철수', phone: '010-1111-2222', group:'가족'},
    { name : '전정국', phone: '010-3333-4444', group:'직장'},
  ];
  // const data = JSON.parse(localStorage.getItem('numberLists')) || [];
  const [lists, setList] = useState(data);

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
