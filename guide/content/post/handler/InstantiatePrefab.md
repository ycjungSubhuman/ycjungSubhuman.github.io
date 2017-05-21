+++
title = "InstantiatePrefab"
type = "page"
[menu.main]
identifier = "instantiateprefab"
weight = 2
parent = "handler"
+++

Prefab을 Parent와 LocalPos를 설정하여 생성합니다.

이 핸들러는 실행되자마자 거의 바로 종료됩니다.

#### 파라미터
* Prefab : 생성할 Prefab의 이름. Assets/Resources 폴더를 기준으로 한다.
* LocalPos : 생성될 게임 오브젝트의 localPosition값
* Parent : Parent로 삼을 GameObject의 이름(Hierarchy 창에서 확인 가능한 그것)
