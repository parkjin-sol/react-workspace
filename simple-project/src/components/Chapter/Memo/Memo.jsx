import styled from "styled-components";
import { useState } from "react";


const StyledWrap = styled.div `
    width: 1000px;
    height: 800px;
    margin : auto;
    border: 1px solid rgba(0,0,0, 0.17);
    border-radius : 12px;
    padding : 25px; 
`

const StyledTitle = styled.h1 `
    font-size : 40px;
    color: lightpink;
    text-align : center;
    padding-bottom : 20px; 
    
`

const StyledHr = styled.div `
    border : 1px solid rgba(0,0,0, 0.17);
`
const StyledMemo = styled.div `
    width: 275px;
    height : 160px;
    margin: 20px;
    padding : 7px;
    background-color: lightyellow;
    border : 1px solid #fbfb5985;
    border-radius : 2px;
    display : inline-block;
`

const StyledContent = styled.div `
    width : 90%;
    height : 60%;
    margin : auto; 
    padding : 7px;
    font-size : 19px;
    text-align: center;
`

const StyledWriter = styled.div `
    width:90%;
    height : 20%;
    font-weight: bold ;
    text-align: right;
`

/* -- useState 활용해보기 --  */
const Memo = () => {
    // AJAX 요청을 잘 보내서 응답을 받았다는 가정하에 메모들이 반환됨 (Table에서 조회됨)
    const [memos, setMemos] = useState ([
        {
            writer : "짱구",
            content : "자자자",
        },
        {
            writer : "철수",
            content : "배고프다",
        },
        {
            writer : "맹구",
            content : "하이하이",
        },
        {
            writer : "유리",
            content : "점심시간",
        }
    ]);
    const [content, setContent] = useState("");
    const [writer, setWriter] = useState("");

    // state : 컴포넌트에서 사용할 변수
    // state 의 변화가 일어나면 컴포넌트가 재렌더링
    // useState() => [value, setValue] == value 인자로 전달한 초기값의 식별자
    //                                 == setValue value를 변경할 수 있는 setter 변수

    const inputContentHandler = (e) => {
        setContent(e.target.value);
    }

    const inputWriterHandler = (e) => {
        setWriter(e.target.value);
    }

    const addMemo = () => {

        const memo = {writer : writer, content : content}

        // setState를 이용해서 memo state를 변경
        // memos.push(memo);
        setMemos([...memos, memo]);

        setContent("");
        setWriter("");

    };


    return (
        <>
            <StyledWrap>
                <StyledTitle>메모메모 작성해보기</StyledTitle>
                <StyledHr />
                { memos ? (
                        memos.map((memo, i) =>
                            (
                           
                            <StyledMemo key={i}>
                                <StyledContent>{memo.content}</StyledContent>
                                <StyledWriter>{memo.writer}</StyledWriter>
                            </StyledMemo>
                                
                            )
                        ) ) : (
                        <h2>메모가 존제하지 않습니다.</h2>
                    )}
                    <StyledHr />
                    <div>
                        <h4> 내용을 입력해주세요</h4>
                        <input type="text" onChange={inputContentHandler} value={content} />
                        <br />
                    </div>
                    <div>
                        <h4> 작성자를 입력해주세요</h4>
                        <input type="text" onChange={inputWriterHandler} value={writer} />
                        <br />
                    </div>
                    <button onClick={addMemo}>메모추가하기</button>
            </StyledWrap>

        </>
    )
};

export default Memo;