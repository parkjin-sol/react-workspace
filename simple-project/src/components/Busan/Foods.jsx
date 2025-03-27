import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledWrap = styled.div `
    width: 1200px;
    height : auto;
    min-height: 1200px;
    margin : auto;
    margin-top: 30px;
    margin-bottom :30px;
    border : 1px solid #ddd;
    box-shadow : 0 0 9px 2px rgba(0, 0, 0, 0.1);
`
const StyleTitle = styled.h1 `
    font-size :60px;
    font-weight : 800;
    color : #333;
    text-align : center;
    margin : 15px 0px;
    border-radius : 80px;
    padding : 60px 0;
`

const StyledInnerWrap = styled.div `
    width : 1100px;
    margin : auto;
    height : auto;
    min-height : 800px;
    padding : 12px;
    border : 1px solid #f1f1f1;
    border-radius : 20px;
    display: flex;
    flex-wrap : wrap;
    justify-content: center;
    

`
const StyledCard = styled.div `
    width: calc(33% - 18px);
    height : 250px;
    margin: 9px;
    box-shadow : 0 0 3px 2px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
    

    &:hover {
        box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.1);
        opacity: .65;
    }
`
const StyledImg = styled.img `
    width: 100% ;
    height : 150px ;
    object-fit : cover;
    `
const StyledStoreName = styled.h3 `
    font-weight : bold;
    text-align : center;
    font-size: 17px;
    margin : 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85px;

`

const StyledMoreButton = styled.div `
    width : 150px;
    height : 80px;
    margin : auto;
    border-radius : 22px;
    background-color : #ff9a92;
    color: white;
    font-weight: 900;
    border : 2px dotted lightpink;
    margint-top: 15px;
    display : flex;
    align-items: center;
    justify-content : center;
    cursor: pointer;
    margin : 20px auto;

    &:hover {
        color : #ff9a92;
        background-color: white;
    }
`
const Foods = () => {
    const [pageNo, setPageNo] = useState(1);
    const [foods, setFoods] = useState([]);
    const [hasMore, setHasMore] = useState(true); // 더 불러올 게시글이 있는지

    const navi = useNavigate();

    useEffect(() => {
        /*
        fetch(`http://localhost/spring/busans?pageNo=${pageNo}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
        */

        /* axios({
            url : `http://localhost/spring/busans?pageNo=${pageNo}`,
            method : 'get',
        }).then(result => console.log(result));
        */
        
        axios.get(`http://localhost/spring/busans?pageNo=${pageNo}`)
             .then(result => {
               // console.log("결과잘오나~~");
               // console.log(result);
                const response = result.data.getFoodKr.item;
                // console.log(response);
                setFoods([...foods, ...response]);
                if(response.length < 9) {
                    setHasMore(false);
                }
             });
    }, [pageNo]);

    const clickToButtonHandler = () => {
        setPageNo(pageNo => pageNo + 1);
    }
    // 객체의 값을쓰는법 1)객체 2) 참조 3) 속성
    return (
        <> 
        <StyledWrap>
            <StyleTitle> 부산의 맛집 알아보기 </StyleTitle>
                <StyledInnerWrap>
                    {foods.length === 0 ? (
                        <h3>음식점 목록을 불러오는 중입니다.</h3>
                    ) : (
                    foods.map((e) => <StyledCard key={e.UC_SEQ} onClick={()=> navi(`foods/${e.UC_SEQ}`)}>
                        <StyledImg src={e.MAIN_IMG_THUMB}/>
                        <br />
                        <StyledStoreName>{e.MAIN_TITLE} </StyledStoreName>
                    </StyledCard> )
                    )}
                </StyledInnerWrap>
                {hasMore &&  (
                        <StyledMoreButton onClick={clickToButtonHandler}>더보기</StyledMoreButton>
                )}
                
            </StyledWrap>
        </>
    )
}

export default Foods;