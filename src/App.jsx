import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import Body from './body/Body'

function App() {
  const data = [
    { name : '강혜린', phone: '010-1111-2222', group:'가족'},
    { name : '전정국', phone: '010-3333-4444', group:'직장'},
    { name: '박민수', phone: '010-2222-2222', group: '직장' },
    { name: '손심이', phone: '010-1111-1111', group: '친구' },
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
