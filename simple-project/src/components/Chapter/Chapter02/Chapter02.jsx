// AJAX 요청을 보내서 응답을 받아올 것
// 요번 타임 주제 => 유저정보 ==> 회원들의 정보
import styled from "styled-components";

const StyleDiv = styled.div`
    width: 300px;
    height : 200px;
    border : 2px solid #000;
    margin : 10px;
    display: inline-block;
    background-color : ${(props) => (props.color ? props.color : "white")}
`;
const MemberInfo = (props) => {
    console.log(props);
    const {memberId, memberName, email, color} = props.member;
    // console.log(memberId, memberName, email);
    return (
        <>
          <StyleDiv color={color}>
            <h4>아이디 : {memberId}</h4>
            <strong>이름 : {memberName}</strong>
            <p>이메일 : {email}</p>
         </StyleDiv>
        </>
    );
};
const Chapter02 = () => {
    const response = [
        {
        memberId : "admin",
        memberName : "짱구" ,
        email : "jjang9@kh.com",
        color : "pink",
        },
        {
        memberId : "user01",
        memberName : "철수" ,
        email : "ironwater@kh.com" ,
        color : "blue"
        },
        {
        memberId : "user02",
        memberName : "유리" ,
        email : "glass@kh.com" 
        }, 
    ];

    return (
        <>
            {response ? (response.map((e, i) => (
                <MemberInfo member = {e} key={e.memberId} />))
            ) : (
                <div>조회결과가 존재하지 않습니다.</div>
            )}

           {/*  <MemberInfo {...response[0]}/>
            <MemberInfo {...response[1]}/>
            <MemberInfo {...response[2]}/> */}

            {/* <StyleDiv>
                <h4>아이디 : {response[0].memberId}</h4>
                <strong>이름 : {response[0].memberName} </strong>
                <p>이메일 : {response[0].email} </p>
            </StyleDiv>
            <StyleDiv>
                <h4>아이디 : {response[1].memberId}</h4>
                <strong>이름 : {response[1].memberName} </strong>
                <p>이메일 : {response[1].email} </p>
            </StyleDiv>
            <StyleDiv>
                <h4>아이디 : {response[2].memberId}</h4>
                <strong>이름 : {response[2].memberName} </strong>
                <p>이메일 : {response[2].email} </p>
            </StyleDiv> */}
        </>

    );

};

export default Chapter02;