+++
title = "Trigger"
type = "page"
[menu.main]
identifier = "trigger"
weight = 2
parent = "handler"
+++

Name의 이름을 가지는 변수를 하나 생성하고, 활성화 합니다.
이 변수는 TriggeredEvent이벤트를 통해 검사할 수 있습니다.
이 변수는 한 번 TriggeredEvent에서 감지되면 바로 비활성화됩니다.

이 핸들러는 실행되자마자 거의 바로 종료됩니다.

#### 파라미터
* Name : Trigger로 생성할 변수의 이름. TriggeredEvent에서 사용됩니다.
