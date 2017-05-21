+++
title = "SendMessageOnce"
type = "page"
[menu.main]
identifier = "sendmessageonce"
weight = 2
parent = "handler"
+++

Target이 가지고 있는 MonoBehaviour에서 Message라는 이름을 가지는 함수를 Param 인자를 주어
호출합니다. 이 함수는 string 하나를 받는 함수여야 합니다.

이 핸들러는 실행되자마자 거의 바로 종료됩니다.

#### 파라미터
* Target : 움직일 GameObject의 이름(Hierarchy 창에서 확인 가능한 그것)
* Message : 호출할 메서드의 이름
* Param : 메서드로 전달할 string
