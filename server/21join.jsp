<%@page contentType="text/html; charset=UTF-8" pageEncoding="utf-8"%>
<%
    //21form.html에서 보낸 form data 출력하기
    //클라이언트가 전송한 form data를 JSP에서 가져오려면
    //request.getParameter("폼요소이름")을 이용하면 됨
    //단, 전송되는 값이 한글인 경우
    //request.setCharacterEncoding("UTF-8")을 설정해야 함
    request.setCharacterEncoding("UTF-8");

    String uid = request.getParameter("uid");
    String pwd = request.getParameter("pwd");
    String name = request.getParameter("name");
    String gender = request.getParameter("gender");

    if(gender.equals("m")) gender="남자";
    else gender="여자";
%>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JSP 처리 결과</title>
</head>
<body>
<h1>JSP 처리 결과</h1>
<p>아이디 : <%out.print(uid);%></p>
<p>비밀번호 : <%=pwd%></p>
<p>이름 : <%=name%></p>
<p>성별 : <%=gender%></p>
</body>
</html>